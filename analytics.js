(()=>{
  'use strict';
  const TAG_ID='GT-NFJBJXPC';
  const KEY='chariot_analytics_consent_v1';
  const copy={
    en:{title:'Help improve this free tool',body:'With your permission, Google Analytics will receive anonymous usage data such as page views and feature clicks. It will never receive your bills, uploads, notes, contact details or site coordinates.',allow:'Allow anonymous analytics',decline:'No thanks'},
    zu:{title:'Siza ukuthuthukisa leli thuluzi lamahhala',body:'Ngemvume yakho, i-Google Analytics izothola idatha yokusetshenziswa engakuhlonzi, njengamakhasi nezinkinobho ezisetshenzisiwe. Ngeke ithole izikweletu, amafayela, amanothi, imininingwane yokuxhumana noma izixhumanisi zesiza.',allow:'Vumela izibalo ezingaziwa',decline:'Cha, ngiyabonga'},
    af:{title:'Help om hierdie gratis hulpmiddel te verbeter',body:'Met u toestemming ontvang Google Analytics anonieme gebruiksdata soos bladsybesoeke en funksieklikke. Dit ontvang nooit u rekeninge, oplaaie, notas, kontakbesonderhede of perseelkoördinate nie.',allow:'Laat anonieme analise toe',decline:'Nee dankie'}
  };
  let loaded=false;
  function language(){const raw=document.documentElement.lang||'en';return raw.startsWith('zu')?'zu':raw.startsWith('af')?'af':'en'}
  function renderCopy(){const c=copy[language()],box=document.getElementById('analyticsConsent');if(!box)return;box.querySelector('[data-analytics-title]').textContent=c.title;box.querySelector('[data-analytics-body]').textContent=c.body;box.querySelector('[data-analytics-allow]').textContent=c.allow;box.querySelector('[data-analytics-decline]').textContent=c.decline}
  function gtag(){window.dataLayer=window.dataLayer||[];window.dataLayer.push(arguments)}
  function loadAnalytics(){
    if(loaded)return;loaded=true;
    window.dataLayer=window.dataLayer||[];
    window.gtag=gtag;
    gtag('js',new Date());
    gtag('config',TAG_ID,{send_page_view:true,allow_google_signals:false,allow_ad_personalization_signals:false,cookie_expires:7776000});
    const s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(TAG_ID);document.head.appendChild(s);
  }
  function track(name,params={}){
    if(localStorage.getItem(KEY)!=='granted')return;
    loadAnalytics();
    const safe={};
    Object.entries(params).forEach(([k,v])=>{if(['mode','step','tool','action','language','method'].includes(k))safe[k]=String(v).slice(0,40)});
    gtag('event',name,safe);
  }
  function choice(value){localStorage.setItem(KEY,value);document.getElementById('analyticsConsent').hidden=true;if(value==='granted')loadAnalytics()}
  function bindEvents(){
    document.addEventListener('click',e=>{
      const t=e.target.closest('button,a');if(!t)return;
      if(t.matches('[data-start]'))track('assessment_started',{mode:t.dataset.start});
      else if(t.matches('[data-step-nav]'))track('wizard_step',{step:t.dataset.stepNav});
      else if(t.matches('[data-map-tool]'))track('site_map_tool',{tool:t.dataset.mapTool});
      else if(t.id==='geoBtn')track('location_method',{method:'device'});
      else if(t.id==='addressSearchBtn')track('location_method',{method:'address'});
      else if(t.id==='coordinateBtn')track('location_method',{method:'coordinates'});
      else if(t.id==='solarDataBtn')track('solar_resource_requested',{action:'nasa_power'});
      else if(t.id==='printBtn')track('summary_printed');
      else if(t.id==='whatsappBtn')track('share_selected',{method:'whatsapp'});
      else if(t.id==='emailBtn')track('share_selected',{method:'email'});
      else if(t.id==='meetingBtn')track('meeting_opened');
    });
    document.getElementById('languageSelect')?.addEventListener('change',e=>track('language_changed',{language:e.target.value}));
  }
  function init(){
    renderCopy();bindEvents();
    const value=localStorage.getItem(KEY),box=document.getElementById('analyticsConsent');
    if(value==='granted')loadAnalytics();else if(value!=='denied')box.hidden=false;
    document.addEventListener('chariot:languagechange',renderCopy);
    document.querySelector('[data-analytics-allow]')?.addEventListener('click',()=>choice('granted'));
    document.querySelector('[data-analytics-decline]')?.addEventListener('click',()=>choice('denied'));
  }
  window.ChariotAnalytics={track};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();