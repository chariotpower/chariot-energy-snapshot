/* ============================================================
   CHARIOT POWER — SHARED TRACKING & LEAD CAPTURE
   One file. Included by all three tools with a single line:
     <script src="chariot-track.js?v=1"></script>

   It does three things:
     1. Loads Google Analytics 4
     2. Fires meaningful events (not just pageviews)
     3. Writes serious leads into Supabase so the pipeline has a feed

   ONLY ONE THING TO EDIT — the GA_ID below.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- 1. CONFIG ----------
     GA tag is the SAME one analytics.js already uses, and the SAME consent key.
     Change it here only if the Google tag itself changes. */
  var GA_ID = "GT-NFJBJXPC";
  var CONSENT_KEY = "chariot_analytics_consent_v1";

  var SUPABASE = {
    url: "https://ircfpoeifedbuhvygufo.supabase.co",
    key: "sb_publishable_E_kyBi-bJ2_rDj_LipCBzw_-oRK2J6K"
  };

  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  var TOOL = page.indexOf("qualify") === 0 ? "qualify"
           : page.indexOf("application") === 0 ? "application"
           : "snapshot";

  /* ---------- 2. GOOGLE ANALYTICS 4 (consent-gated, never duplicated) ---------- */
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  function consentGranted() {
    try { return localStorage.getItem(CONSENT_KEY) === "granted"; } catch (e) { return false; }
  }
  /* analytics.js owns GA on any page that loads it — never configure twice. */
  function analyticsAlreadyLoaded() {
    return !!document.querySelector('script[src*="analytics.js"]') ||
           !!document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
  }
  var gaReady = false;
  function loadGA() {
    if (gaReady || analyticsAlreadyLoaded() || !consentGranted()) return;
    gaReady = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_ID);
    document.head.appendChild(s);
    gtag("js", new Date());
    gtag("config", GA_ID, {
      send_page_view: true,
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_expires: 7776000,
      page_title: "Chariot " + TOOL
    });
  }
  loadGA();
  /* If the person grants consent later in this session, pick it up. */
  window.addEventListener("storage", function (e) { if (e.key === CONSENT_KEY) loadGA(); });
  document.addEventListener("click", function () { setTimeout(loadGA, 300); }, true);

  function track(event, params) {
    if (!consentGranted()) return;   /* no consent, no analytics event */
    try { window.gtag("event", event, Object.assign({ tool: TOOL }, params || {})); } catch (e) {}
  }
  window.chariotTrack = track;

  /* ---------- 3. SUPABASE — the pipeline feed ---------- */
  function sbInsert(table, row) {
    try {
      return fetch(SUPABASE.url + "/rest/v1/" + table, {
        method: "POST",
        headers: {
          apikey: SUPABASE.key,
          Authorization: "Bearer " + SUPABASE.key,
          "Content-Type": "application/json",
          Prefer: "return=minimal"
        },
        body: JSON.stringify(row)
      }).catch(function () {});
    } catch (e) {}
  }

  function val(id) {
    var el = document.getElementById(id);
    return el && el.value ? String(el.value).trim() : "";
  }
  /* First non-empty match from a list of candidate field ids */
  function first() {
    for (var i = 0; i < arguments.length; i++) {
      var v = val(arguments[i]);
      if (v) return v;
    }
    return "";
  }

  function captureLead(channel, extra) {
    var name    = first("meetingName", "contactName", "fullName", "name", "leadName");
    var contact = first("meetingContact", "contactNumber", "phone", "email", "contactEmail");
    var company = first("companyName", "company", "businessName", "meetingCompany");
    var prov    = first("province", "siteProvince");
    var bill    = first("monthlyBill", "monthlySpend", "electricitySpend");

    /* Nothing identifying captured? Then it is not a lead — log the event only. */
    if (!name && !contact && !company) {
      sbInsert("events", { event: TOOL + "_" + channel + "_anonymous", meta: { page: page } });
      track(channel, { lead: false });
      return;
    }

    sbInsert("leads", {
      name: name || null,
      contact: contact || null,
      province: prov || null,
      monthly_bill: Number(String(bill).replace(/[^0-9.]/g, "")) || null,
      snapshot_json: Object.assign({
        tool: TOOL,
        channel: channel,
        company: company || null,
        captured_at: new Date().toISOString(),
        url: location.href,
        /* pipeline routing defaults — every lead arrives with a stage and an owner slot */
        stage: TOOL === "application" ? "Data & Documents"
             : TOOL === "qualify" ? "Qualified"
             : "New / Unreviewed",
        owner: null,
        next_action: TOOL === "application" ? "Acknowledge application and confirm outstanding documents"
                   : TOOL === "qualify" ? "Review qualification notes and book discovery"
                   : "Run 20-minute qualification call",
        next_action_due: new Date(Date.now() + 2 * 864e5).toISOString().slice(0, 10)
      }, extra || {})
    });

    sbInsert("events", { event: TOOL + "_" + channel, meta: { company: company || null } });
    track("lead_captured", { channel: channel, stage: TOOL });
  }
  window.chariotCaptureLead = captureLead;

  /* ---------- 4. AUTO-WIRING — no edits needed in the pages ---------- */
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    track("tool_opened", { page: page });

    /* Any button or link that hands over to a human is a lead moment. */
    document.addEventListener("click", function (e) {
      var el = e.target.closest("a,button");
      if (!el) return;
      var id = (el.id || "").toLowerCase();
      var txt = (el.textContent || "").toLowerCase();
      var href = (el.getAttribute("href") || "").toLowerCase();

      if (href.indexOf("wa.me") >= 0 || id.indexOf("wa") === 0 || txt.indexOf("whatsapp") >= 0) {
        captureLead("whatsapp");
      } else if (href.indexOf("mailto:") === 0 || id.indexOf("email") >= 0 || txt.indexOf("email") >= 0) {
        captureLead("email");
      } else if (id.indexOf("meeting") >= 0 || txt.indexOf("book") >= 0 || txt.indexOf("consultation") >= 0) {
        captureLead("meeting");
      } else if (txt.indexOf("pdf") >= 0 || txt.indexOf("download") >= 0 || txt.indexOf("export") >= 0) {
        track("export", { label: (el.textContent || "").trim().slice(0, 40) });
      }
    }, true);

    /* Application form submission is always a serious lead. */
    var form = document.getElementById("applicationForm");
    if (form) {
      form.addEventListener("submit", function () { captureLead("application_submit"); });
      var copyBtn = document.getElementById("copySummary");
      var draftBtn = document.getElementById("draftEmail");
      if (copyBtn) copyBtn.addEventListener("click", function () { captureLead("application_copy"); });
      if (draftBtn) draftBtn.addEventListener("click", function () { captureLead("application_email"); });
    }

    /* Step progress on the Snapshot tells us where people drop out. */
    document.addEventListener("click", function (e) {
      var b = e.target.closest("[data-step],.wizard-next,#nextBtn");
      if (b) track("step_advanced", { label: (b.textContent || "").trim().slice(0, 30) });
    }, true);
  });
})();
