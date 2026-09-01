(function(){
  'use strict';

  const CONTACT={phone:'+27 66 110 5578',whatsapp:'27661105578',email:'admin@chariotpower.co.za',calendar:''};
  const $=id=>document.getElementById(id);
  const $$=sel=>Array.from(document.querySelectorAll(sel));
  const num=id=>Math.max(0,parseFloat($(id)?.value)||0);
  const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
  const money=v=>'R'+Math.round(Math.max(0,v||0)).toLocaleString('en-ZA');
  const compactMoney=v=>{v=Math.max(0,v||0);return v>=1e9?'R'+(v/1e9).toFixed(1)+'bn':v>=1e6?'R'+(v/1e6).toFixed(1)+'m':v>=1e3?'R'+Math.round(v/1e3)+'k':'R'+Math.round(v)};
  const pct=v=>Math.round(v)+'%';
  const esc=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  const PROVINCES={
    'KwaZulu-Natal':4.9,'Gauteng':5.3,'Western Cape':5.4,'Eastern Cape':5.0,
    'Free State':5.6,'Limpopo':5.6,'Mpumalanga':5.2,'North West':5.7,'Northern Cape':6.2
  };
  const LOADS={
    farm:[
      ['irrigation','Irrigation / pivot','💧',22,8,.9,8,true],['borehole','Borehole pumps','◉',11,6,.8,12,true],['cold','Cold rooms / cooling','❄',18,20,.55,12,true],['dairy','Dairy equipment','◫',28,8,.55,12,true],['pack','Packhouse / processing','▤',35,9,.9,8,false],['workshop','Workshop equipment','⚙',18,6,.85,12,false],['housing','Homes / accommodation','⌂',12,12,.35,12,true],['other','Other equipment','＋',15,8,.5,12,false]
    ],
    industrial:[
      ['motors','Motors / production lines','⚙',60,16,.7,12,true],['compressor','Compressors','◌',45,14,.75,12,true],['cooling','Process cooling','❄',50,20,.6,12,true],['heating','Electric heating','♨',65,10,.8,12,false],['welding','Welders / fabrication','⌁',35,8,.8,12,false],['pumps','Pumps','💧',30,14,.7,12,true],['hvac','HVAC and ventilation','◫',35,10,.9,12,false],['office','Office and lighting','▦',18,10,.95,12,false]
    ],
    commercial:[
      ['hvac','Air conditioning','◫',35,10,.95,12,true],['refrigeration','Refrigeration','❄',28,20,.6,12,true],['lighting','Lighting','✦',15,12,.85,12,false],['office','Office equipment','▦',12,10,.95,12,false],['kitchen','Commercial kitchen','♨',30,8,.65,12,true],['ev','EV charging','⚡',22,6,.8,12,false],['pumps','Water pumps','💧',12,6,.75,12,true],['other','Other equipment','＋',15,8,.6,12,false]
    ],
    hospitality:[
      ['hvac','Air conditioning','◫',30,14,.7,12,true],['water','Water heating','♨',35,7,.55,12,true],['kitchen','Kitchen and laundry','▤',38,8,.55,12,true],['cold','Cold rooms','❄',22,20,.55,12,true],['pumps','Pools and pumps','💧',15,8,.9,12,false],['lighting','Lighting','✦',14,14,.45,12,false],['rooms','Guest rooms','⌂',30,14,.4,12,true],['other','Other equipment','＋',15,8,.5,12,false]
    ],
    mining:[
      ['crushing','Crushing / screening','◇',120,14,.75,12,true],['conveyor','Conveyors','⇢',80,14,.75,12,true],['pumps','Dewatering pumps','💧',70,20,.6,12,true],['compressor','Compressors','◌',65,14,.7,12,true],['workshop','Workshop equipment','⚙',35,10,.8,12,false],['ventilation','Ventilation','◫',60,20,.6,12,true],['camp','Camp / offices','⌂',25,14,.4,12,true],['other','Other equipment','＋',30,10,.6,12,false]
    ],
    other:[
      ['motors','Motors / machinery','⚙',30,10,.7,12,true],['pumps','Pumps','💧',20,8,.8,12,true],['cooling','Cooling / refrigeration','❄',22,18,.6,12,true],['hvac','Air conditioning','◫',20,10,.9,12,false],['lighting','Lighting','✦',12,12,.7,12,false],['heating','Heating','♨',25,8,.7,12,false],['ev','EV charging','⚡',22,5,.8,12,false],['other','Other equipment','＋',15,8,.5,12,false]
    ]
  };
  const UPGRADES=[
    {id:'battery',name:'Battery storage',copy:'Shift solar into peak periods and support selected loads.',impact:'Adds resilience and self-consumption'},
    {id:'generator',name:'Generator integration',copy:'Coordinate solar, storage and an existing or new generator.',impact:'Reduces diesel dependence'},
    {id:'ems',name:'Energy management',copy:'Live monitoring, alerts, peak control and performance insight.',impact:'Improves control and verification'},
    {id:'pfc',name:'Power-factor correction',copy:'Assess avoidable demand penalties and electrical efficiency.',impact:'Potential demand-charge saving'},
    {id:'carport',name:'Solar carports',copy:'Create generation space while providing shaded parking.',impact:'Adds structure allowance'},
    {id:'ground',name:'Ground-mount array',copy:'Use available land where roof capacity is constrained.',impact:'Adds civils and structure'},
    {id:'ev',name:'EV charging ready',copy:'Allow for managed fleet or customer charging infrastructure.',impact:'Adds future electrical capacity'},
    {id:'export',name:'Export control',copy:'Allow for zero-export controls, metering and compliance.',impact:'Protects grid compliance'},
    {id:'roof',name:'Roof reinforcement allowance',copy:'Flag potential structural work before final engineering.',impact:'Reduces budget surprises'},
    {id:'warranty',name:'Extended warranty',copy:'Indicative allowance for enhanced component protection.',impact:'Reduces lifecycle risk'},
    {id:'gridapp',name:'Grid application support',copy:'Allow for utility submissions, studies and metering changes.',impact:'Improves project readiness'},
    {id:'om',name:'Performance & O&M plan',copy:'Monitoring, preventative maintenance and reporting allowance.',impact:'Protects long-term performance'}
  ];

  const state={mode:'guided',step:1,energyMode:'bill',sector:'',timing:'mixed',priority:'cashflow',resilience:'saving',loads:new Set(),upgrades:new Set(),customLoads:[],equipmentDetails:{},location:null,siteArea:0,files:[],extracted:[],scenario:'base',model:null};
  let map=null,drawnItems=null;

  function init(){
    renderLoads('farm'); renderUpgrades(); bind(); restore(); recompute();
  }

  function bind(){
    $$('[data-start]').forEach(b=>b.addEventListener('click',()=>start(b.dataset.start)));
    $('voiceStart').addEventListener('click',()=>{$('voicePanel').hidden=!$('voicePanel').hidden});
    $('recordBtn').addEventListener('click',voiceCapture);
    $('advancedToggle').addEventListener('change',e=>setAdvanced(e.target.checked));
    $$('[data-energy-mode]').forEach(b=>b.addEventListener('click',()=>setEnergyMode(b.dataset.energyMode)));
    $$('[data-next]').forEach(b=>b.addEventListener('click',()=>go(+b.dataset.next)));
    $$('[data-back]').forEach(b=>b.addEventListener('click',()=>go(+b.dataset.back)));
    $$('[data-step-nav]').forEach(b=>b.addEventListener('click',()=>{const n=+b.dataset.stepNav;if(n<=state.step||n<5)go(n)}));
    bindChoice('sectorChoices','sector',v=>{renderLoads(v);state.loads.clear()});
    bindChoice('timingChoices','timing');bindChoice('priorityChoices','priority');bindChoice('resilienceChoices','resilience',v=>{if(v!=='saving')state.upgrades.add('battery');renderUpgrades()});
    $$('input,select,textarea').forEach(el=>el.addEventListener('input',()=>{if(el.id==='province'&&!state.location)state.location={source:'manual',province:el.value};recompute()}));
    $('billFile').addEventListener('change',handleFiles);
    $('geoBtn').addEventListener('click',useLocation);
    $('addressSearchBtn').addEventListener('click',searchAddress);
    $('siteAddress').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();searchAddress()}});
    $('addCustomLoad').addEventListener('click',addCustomLoad);
    $('saveBtn').addEventListener('click',save);
    $('restartBtn').addEventListener('click',restart);
    $('helpBtn').addEventListener('click',()=>$('helpDialog').showModal());
    $('meetingBtn').addEventListener('click',()=>$('meetingDialog').showModal());
    $('requestMeetingBtn').addEventListener('click',requestMeeting);
    $('whatsappBtn').addEventListener('click',shareWhatsapp);
    $('emailBtn').addEventListener('click',shareEmail);
    $('printBtn').addEventListener('click',()=>window.print());
    $('editBtn').addEventListener('click',()=>go(1));
    $$('[data-scenario]').forEach(b=>b.addEventListener('click',()=>{state.scenario=b.dataset.scenario;$$('[data-scenario]').forEach(x=>x.classList.toggle('active',x===b));recompute()}));
  }

  function bindChoice(id,key,after){
    $(id).addEventListener('click',e=>{const b=e.target.closest('[data-value]');if(!b)return;state[key]=b.dataset.value;$(id).querySelectorAll('[data-value]').forEach(x=>x.classList.toggle('selected',x===b));if(after)after(state[key]);recompute()});
  }

  function start(mode){
    state.mode=mode==='advanced'?'advanced':'guided';
    $('intro').hidden=true;$('app').hidden=false;
    setAdvanced(mode==='advanced');
    if(mode==='upload')setEnergyMode('upload');
    go(1);window.scrollTo({top:0,behavior:'smooth'});
  }
  function setAdvanced(on){
    $('advancedToggle').checked=on;document.body.classList.toggle('advanced-mode',on);state.mode=on?'advanced':'guided';
    $('modeTitle').textContent=on?'Advanced mode':'Guided mode';
    $('modeCopy').textContent=on?'Fine-tune technical and financial assumptions.':'We will keep this simple and make transparent assumptions.';
    recompute();
  }
  function setEnergyMode(mode){
    state.energyMode=mode;$$('[data-energy-mode]').forEach(b=>b.classList.toggle('active',b.dataset.energyMode===mode));
    $$('[data-energy-panel]').forEach(p=>p.hidden=p.dataset.energyPanel!==mode);
    if(mode==='upload'){$$('[data-energy-panel="bill"],[data-energy-panel="kwh"]').forEach(p=>p.hidden=false)}
    recompute();
  }
  function go(step){
    state.step=step;$$('.step').forEach(s=>s.classList.toggle('active',+s.dataset.step===step));
    $$('.progress button').forEach(b=>{const n=+b.dataset.stepNav;b.classList.toggle('current',n===step);b.classList.toggle('done',n<step)});
    $('livePanel').style.display=step===5?'none':'';
    if(step===4||step===5)recompute();
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function renderLoads(sector){
    sector=sector||state.sector||'farm';const rows=LOADS[sector]||LOADS.other;
    $('loadBuilder').innerHTML=rows.map(l=>`<button type="button" class="load-card ${state.loads.has(l[0])?'selected':''}" data-load="${l[0]}"><span>${l[2]}</span><b>${l[1]}</b><small>Typical ${l[3]} kW · editable</small></button>`).join('');
    $('loadBuilder').querySelectorAll('[data-load]').forEach(b=>b.addEventListener('click',()=>{b.classList.toggle('selected');b.classList.contains('selected')?state.loads.add(b.dataset.load):state.loads.delete(b.dataset.load);renderAdvancedLoads();recompute()}));
    renderAdvancedLoads();
  }
  function selectedLoadData(){const rows=LOADS[state.sector]||LOADS.other;return rows.filter(l=>state.loads.has(l[0]));}
  function renderUpgrades(){
    $('upgradeGrid').innerHTML=UPGRADES.map(u=>`<button class="upgrade-card ${state.upgrades.has(u.id)?'selected':''}" type="button" data-upgrade="${u.id}"><span class="check">${state.upgrades.has(u.id)?'✓':''}</span><b>${u.name}</b><small>${u.copy}</small><em>${u.impact}</em></button>`).join('');
    $('upgradeGrid').querySelectorAll('[data-upgrade]').forEach(b=>b.addEventListener('click',()=>{const id=b.dataset.upgrade;state.upgrades.has(id)?state.upgrades.delete(id):state.upgrades.add(id);if(id==='battery'&&!state.upgrades.has(id)&&state.resilience!=='saving'){state.resilience='saving';selectVisual('resilienceChoices','saving')}renderUpgrades();recompute()}));
  }
  function selectVisual(id,value){$(id).querySelectorAll('[data-value]').forEach(b=>b.classList.toggle('selected',b.dataset.value===value))}
  function renderAdvancedLoads(){
    const rows=selectedLoadData();if(!rows.length){$('advancedLoadTable').innerHTML='';return}
    $('advancedLoadTable').innerHTML=`<table class="equipment-table"><thead><tr><th>Equipment</th><th>Qty</th><th>Rating kW</th><th>Hours/day</th><th>Months/year</th><th>Duty %</th><th>Power factor</th><th>Start surge</th><th>Critical?</th><th>VSD?</th></tr></thead><tbody>${rows.map(l=>{const d=state.equipmentDetails[l[0]]||{qty:1,kw:l[3],hours:l[4],months:l[6],duty:70,pf:.9,surge:2,critical:l[7]?'yes':'no',vsd:'unknown'};state.equipmentDetails[l[0]]=d;return`<tr data-eqrow="${l[0]}"><td class="name-cell">${l[1]}</td><td><input data-eq="qty" type="number" min="1" value="${d.qty}"></td><td><input data-eq="kw" type="number" min="0" step=".1" value="${d.kw}"></td><td><input data-eq="hours" type="number" min="0" max="24" step=".5" value="${d.hours}"></td><td><input data-eq="months" type="number" min="1" max="12" value="${d.months}"></td><td><input data-eq="duty" type="number" min="1" max="100" value="${d.duty}"></td><td><input data-eq="pf" type="number" min=".5" max="1" step=".01" value="${d.pf}"></td><td><input data-eq="surge" type="number" min="1" max="8" step=".1" value="${d.surge}"></td><td><select data-eq="critical"><option ${d.critical==='yes'?'selected':''} value="yes">Yes</option><option ${d.critical==='no'?'selected':''} value="no">No</option></select></td><td><select data-eq="vsd"><option value="unknown">Unknown</option><option ${d.vsd==='yes'?'selected':''} value="yes">Yes</option><option ${d.vsd==='no'?'selected':''} value="no">No</option></select></td></tr>`}).join('')}</tbody></table>`;
    $('advancedLoadTable').querySelectorAll('[data-eqrow]').forEach(row=>row.querySelectorAll('[data-eq]').forEach(inp=>inp.addEventListener('input',()=>{const d=state.equipmentDetails[row.dataset.eqrow];d[inp.dataset.eq]=['critical','vsd'].includes(inp.dataset.eq)?inp.value:+inp.value;recompute()})));
  }
  function addCustomLoad(){
    const item={name:'',kw:0,hours:8};state.customLoads.push(item);const node=$('customLoadTemplate').content.cloneNode(true);const row=node.querySelector('.custom-load-row');
    const index=state.customLoads.length-1;row.querySelectorAll('input').forEach(inp=>inp.addEventListener('input',()=>{item[inp.dataset.custom]=inp.dataset.custom==='name'?inp.value:+inp.value;recompute()}));
    row.querySelector('button').addEventListener('click',()=>{state.customLoads.splice(index,1);row.remove();recompute()});$('customLoads').appendChild(node);
  }

  async function handleFiles(e){
    state.files=Array.from(e.target.files||[]);state.extracted=[];$('fileList').innerHTML=state.files.map(f=>`<div>⏳ Analysing ${esc(f.name)}…</div>`).join('');
    for(const f of state.files){let text='',status='Attached for review';try{if(/csv|text|spreadsheet/.test(f.type)||/\.(csv|txt)$/i.test(f.name)){text=await f.text();status='Meter or schedule data extracted'}else if(/pdf/.test(f.type)||/\.pdf$/i.test(f.name)){text=await extractPdf(f);status=text?'PDF text extracted':'PDF attached; manual review needed'}else if(/image/.test(f.type)&&window.Tesseract){const out=await Tesseract.recognize(f,'eng',{logger:()=>{}});text=out.data.text||'';status=text?'Image text extracted':'Image attached; manual review needed'}if(text)applyExtractedText(text,f.name);state.extracted.push({name:f.name,status,text:text.slice(0,1500)});}catch(err){state.extracted.push({name:f.name,status:'Attached; automatic extraction unavailable',text:''})}}
    $('fileList').innerHTML=state.extracted.map(x=>`<div>✓ ${esc(x.name)} · ${esc(x.status)}</div>`).join('');recompute();
  }
  async function extractPdf(file){if(!window.pdfjsLib)return'';pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';const pdf=await pdfjsLib.getDocument({data:await file.arrayBuffer()}).promise;let text='';for(let i=1;i<=Math.min(pdf.numPages,20);i++){const page=await pdf.getPage(i),content=await page.getTextContent();text+=' '+content.items.map(x=>x.str).join(' ')}return text}
  function applyExtractedText(text,name){const clean=text.replace(/,/g,' ');const rand=[...clean.matchAll(/(?:total|amount due|current charges|invoice total|r)\s*[:r]?\s*(\d[\d ]+(?:\.\d{1,2})?)/ig)].map(m=>+m[1].replace(/ /g,'')).filter(v=>v>500&&v<5e7);const kwh=[...clean.matchAll(/(\d[\d ]+(?:\.\d+)?)\s*kwh/ig)].map(m=>+m[1].replace(/ /g,'')).filter(v=>v>100&&v<1e8);if(rand.length&&!num('monthlyBill'))$('monthlyBill').value=Math.round(rand[rand.length-1]);if(kwh.length&&!num('monthlyKwh'))$('monthlyKwh').value=Math.round(kwh.reduce((a,b)=>a+b,0)/kwh.length);if(/generator|diesel/i.test(text)){const diesel=[...clean.matchAll(/(?:diesel|fuel)\D{0,20}(\d[\d ]+)/ig)].map(m=>+m[1].replace(/ /g,'')).filter(v=>v>100);if(diesel.length&&!num('dieselSpend'))$('dieselSpend').value=diesel[0]} }

  async function searchAddress(){
    const q=$('siteAddress').value.trim();if(!q)return;const box=$('addressResults');box.hidden=false;box.innerHTML='<div class="status-line">Searching South Africa…</div>';
    try{
      const res=await fetch('https://nominatim.openstreetmap.org/search?format=json&countrycodes=za&limit=5&addressdetails=1&q='+encodeURIComponent(q),{headers:{'Accept':'application/json'}});
      if(!res.ok)throw new Error('search unavailable');const data=await res.json();if(!data.length)throw new Error('No matching South African location found');
      box.innerHTML=data.map((x,i)=>`<button type="button" data-address="${i}">${esc(x.display_name)}</button>`).join('');
      box.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{const x=data[+b.dataset.address];applyLocation(+x.lat,+x.lon,x.display_name,provinceFromAddress(x.address),'address');box.hidden=true}));
    }catch(err){box.innerHTML='<div class="status-line bad">Location search is temporarily unavailable. Choose your province below—your assessment can still continue.</div>'}
  }
  function provinceFromAddress(a={}){const s=(a.state||a.province||'').toLowerCase();return Object.keys(PROVINCES).find(p=>s.includes(p.toLowerCase())||(p==='KwaZulu-Natal'&&s.includes('kwazulu')))||''}
  function useLocation(){
    const status=$('geoStatus');if(!navigator.geolocation){status.className='status-line bad';status.textContent='This browser cannot provide location. Search the address or choose a province.';return}
    status.className='status-line';status.textContent='Requesting permission…';$('geoBtn').disabled=true;
    navigator.geolocation.getCurrentPosition(async pos=>{
      const {latitude:lat,longitude:lon}=pos.coords;let label=`${lat.toFixed(5)}, ${lon.toFixed(5)}`,province='';
      try{const r=await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=12&addressdetails=1`);if(r.ok){const d=await r.json();label=d.display_name||label;province=provinceFromAddress(d.address)}}catch(err){}
      applyLocation(lat,lon,label,province,'device');$('geoBtn').disabled=false;
    },err=>{status.className='status-line bad';status.textContent=err.code===1?'Location permission was not allowed. Search the address or choose a province instead.':'We could not confirm your location. Search the address or choose a province.';$('geoBtn').disabled=false;},{enableHighAccuracy:false,timeout:15000,maximumAge:300000});
  }
  function applyLocation(lat,lon,label,province,source){state.location={lat,lon,label,province,source,confirmedAt:new Date().toISOString()};$('siteAddress').value=label;if(province)$('province').value=province;$('geoStatus').className='status-line good';$('geoStatus').textContent='✓ Location confirmed · '+label;showMap(lat,lon);recompute()}
  function showMap(lat,lon){
    const el=$('siteMap');el.hidden=false;$('mapReadout').hidden=false;if(!window.L){$('mapReadout').textContent=`Coordinates ${lat.toFixed(6)}, ${lon.toFixed(6)} confirmed. Satellite drawing is unavailable in this browser.`;return}
    if(!map){map=L.map(el,{zoomControl:true}).setView([lat,lon],18);L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:20,attribution:'Imagery © Esri'}).addTo(map);drawnItems=new L.FeatureGroup().addTo(map);if(L.Control.Draw){map.addControl(new L.Control.Draw({edit:{featureGroup:drawnItems},draw:{polyline:false,circle:false,circlemarker:false,rectangle:true,polygon:true,marker:true}}));map.on(L.Draw.Event.CREATED,e=>{drawnItems.addLayer(e.layer);if(e.layer.getLatLngs){const ring=e.layer.getLatLngs()[0];state.siteArea=Math.round(polygonArea(ring));$('roofArea').value=state.siteArea;$('mapReadout').innerHTML=`<strong>Mapped usable area:</strong> ${state.siteArea.toLocaleString('en-ZA')} m² · approximately ${Math.round(state.siteArea/5.2)} kWp maximum before setbacks and engineering.`;recompute()}});map.on(L.Draw.Event.EDITED,()=>{let area=0;drawnItems.eachLayer(l=>{if(l.getLatLngs)area+=polygonArea(l.getLatLngs()[0])});state.siteArea=Math.round(area);$('roofArea').value=state.siteArea;recompute()})}}
    map.setView([lat,lon],18);L.marker([lat,lon]).addTo(map).bindPopup('Confirmed site').openPopup();setTimeout(()=>map.invalidateSize(),100);$('mapReadout').innerHTML=`<strong>Coordinates:</strong> ${lat.toFixed(6)}, ${lon.toFixed(6)} · Use the drawing tools on the map to outline usable roof or ground space.`;
  }
  function polygonArea(points){if(points.length<3)return 0;const lat0=points.reduce((s,p)=>s+p.lat,0)/points.length*Math.PI/180;const xy=points.map(p=>({x:p.lng*111320*Math.cos(lat0),y:p.lat*110540}));let a=0;for(let i=0,j=xy.length-1;i<xy.length;j=i++)a+=(xy[j].x+xy[i].x)*(xy[j].y-xy[i].y);return Math.abs(a/2)}

  function voiceCapture(){
    const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR){alert('Voice capture is not supported by this browser. Type your description instead.');return}
    const r=new SR();r.lang='en-ZA';r.continuous=true;r.interimResults=true;const btn=$('recordBtn');btn.textContent='Listening… tap to stop';btn.classList.add('recording');let finalText=$('voiceNotes').value;
    r.onresult=e=>{let interim='';for(let i=e.resultIndex;i<e.results.length;i++){const t=e.results[i][0].transcript;e.results[i].isFinal?finalText+=' '+t:interim+=t}$('voiceNotes').value=(finalText+' '+interim).trim()};r.onerror=()=>{btn.textContent='Start voice capture';btn.classList.remove('recording')};r.onend=()=>{btn.textContent='Start voice capture';btn.classList.remove('recording');recompute()};btn.onclick=()=>r.stop();r.start();
  }

  function compute(){
    const tariff=num('tariff')||2.65;let monthlyBill=num('monthlyBill'),monthlyKwh=num('monthlyKwh');
    if(!monthlyKwh&&monthlyBill)monthlyKwh=monthlyBill/tariff;if(!monthlyBill&&monthlyKwh)monthlyBill=monthlyKwh*tariff;
    const growth=num('growth')/100,annualKwh=monthlyKwh*12*(1+growth);const timing={day:.72,mixed:.48,night:.27}[state.timing]||.48;
    const province=$('province').value||(state.location&&state.location.province)||'';const sun=PROVINCES[province]||5.2;const pr=(num('performanceRatio')||79)/100;const degradation=(num('degradation')||.5)/100;
    const selected=selectedLoadData();let connectedKw=0,selectedEnergy=0,criticalConnected=0;
    selected.forEach(l=>{const d=state.equipmentDetails[l[0]]||{qty:1,kw:l[3],hours:l[4],months:l[6],duty:70,pf:.9,critical:l[7]?'yes':'no'};const kw=d.qty*d.kw;connectedKw+=kw;selectedEnergy+=kw*d.hours*30*(d.months/12)*(d.duty/100);if(d.critical==='yes')criticalConnected+=kw});
    connectedKw+=state.customLoads.reduce((s,l)=>s+(+l.kw||0),0);selectedEnergy+=state.customLoads.reduce((s,l)=>s+(+l.kw||0)*(+l.hours||8)*30,0);
    const peak=num('peakKva')||connectedKw*.72||(monthlyKwh?monthlyKwh/(30*10)*1.35:0);const criticalPct=num('criticalPercent')||30;
    let targetKwp=annualKwh?annualKwh*timing/(sun*365*pr):peak*.72;targetKwp=clamp(targetKwp,0,50000);
    const spaceCap=(num('roofArea')+num('groundArea'))/5.2;if(spaceCap>0)targetKwp=Math.min(targetKwp,spaceCap);
    const batteryOn=state.upgrades.has('battery')||state.resilience!=='saving';const outage=num('outageHours')||2;let batteryKwh=0;if(batteryOn){const critKw=Math.max(criticalConnected,peak*criticalPct/100,targetKwp*.12);batteryKwh=critKw*outage/(.9*.85);if(state.resilience==='full')batteryKwh=Math.max(batteryKwh,peak*4/(.9*.85));batteryKwh=Math.ceil(batteryKwh/10)*10}
    let baseCapex=targetKwp*13000;let additions=0;
    if(batteryKwh)additions+=batteryKwh*7200;if(state.upgrades.has('generator'))additions+=Math.max(120000,peak*2300);if(state.upgrades.has('ems'))additions+=Math.max(65000,baseCapex*.025);if(state.upgrades.has('pfc'))additions+=Math.max(45000,peak*650);if(state.upgrades.has('carport'))additions+=targetKwp*2800;if(state.upgrades.has('ground'))additions+=targetKwp*1600;if(state.upgrades.has('ev'))additions+=180000;if(state.upgrades.has('export'))additions+=Math.max(45000,targetKwp*350);if(state.upgrades.has('roof'))additions+=baseCapex*.08;if(state.upgrades.has('warranty'))additions+=baseCapex*.025;if(state.upgrades.has('gridapp'))additions+=Math.max(55000,targetKwp*250);
    const capex=baseCapex+additions;const solarGen=targetKwp*sun*365*pr;let usableSolar=Math.min(annualKwh,solarGen*(batteryOn?.96:.88),annualKwh*(timing+(batteryOn?.32:0)));
    if(state.upgrades.has('ems'))usableSolar=Math.min(annualKwh,usableSolar*1.025);const energySaving=usableSolar*tariff;const demandSaving=state.upgrades.has('pfc')?peak*num('demandCharge')*12*.18:0;const dieselSpend=num('dieselSpend')*12;const dieselSaving=state.upgrades.has('generator')?dieselSpend*.45:batteryOn?dieselSpend*.3:0;const om=state.upgrades.has('om')?capex*.014:capex*.01;const annualBenefit=Math.max(0,energySaving+demandSaving+dieselSaving-om);
    const gridEsc=num('gridEscalation')/100||.08,discount=num('discountRate')/100||.1,years=num('analysisYears')||20;const ppaEsc=num('ppaEscalation')/100||.06,ppaDiscount=num('ppaDiscount')/100||.15;const interest=num('interestRate')/100||.1175,term=num('loanTerm')||10,deposit=num('deposit')/100;const ppaRate=num('ppaRate')||tariff*(1-ppaDiscount);
    const currentAnnual=monthlyBill*12+dieselSpend;const residualGrid=Math.max(0,currentAnnual-energySaving-demandSaving-dieselSaving+om);const loanPrincipal=capex*(1-deposit);const loanMonthly=annuity(loanPrincipal,interest/12,term*12);const rentMonthly=capex*1.3/(10*12);const ppaAnnual=usableSolar*ppaRate+Math.max(0,currentAnnual-energySaving-dieselSaving);
    const routeFlows={grid:[],cash:[],bank:[],rent:[],ppa:[]};
    for(let y=0;y<years;y++){
      const grid=currentAnnual*Math.pow(1+gridEsc,y);const productionFactor=Math.pow(1-degradation,y);const residual=Math.max(0,currentAnnual*Math.pow(1+gridEsc,y)-(energySaving+demandSaving+dieselSaving)*productionFactor);const oma=om*Math.pow(1+.06,y);const replacement=(batteryKwh&&y===11)?batteryKwh*4200:0;
      routeFlows.grid.push(grid);routeFlows.cash.push(residual+oma+replacement+(y===0?capex:0));routeFlows.bank.push(residual+oma+replacement+(y===0?capex*deposit:0)+(y<term?loanMonthly*12:0));routeFlows.rent.push(residual+oma+replacement+(y<10?rentMonthly*12:0));routeFlows.ppa.push((ppaAnnual*Math.pow(1+ppaEsc,y)));
    }
    const totals={};Object.keys(routeFlows).forEach(k=>totals[k]={nominal:routeFlows[k].reduce((a,b)=>a+b,0),npv:routeFlows[k].reduce((a,b,i)=>a+b/Math.pow(1+discount,i+1),0)});
    let route=state.priority==='ownership'?'bank':state.priority==='return'?'cash':'ppa';if(capex<1||!monthlyBill)route='ppa';
    const recommendedMonthly={cash:residualGrid/12,bank:residualGrid/12+loanMonthly,rent:residualGrid/12+rentMonthly,ppa:ppaAnnual/12}[route]||0;const monthlyImpact=monthlyBill+num('dieselSpend')-recommendedMonthly;
    const cashflows=[-capex];for(let y=1;y<=years;y++)cashflows.push(annualBenefit*Math.pow(1+gridEsc,y-1)-(y===12&&batteryKwh?batteryKwh*4200:0));const irrVal=irr(cashflows);const payback=annualBenefit?capex/annualBenefit:0;
    const confidence=confidenceScore({monthlyBill,monthlyKwh,province,selected,peak,spaceCap});
    return {monthlyBill,monthlyKwh,annualKwh,tariff,timing,province,sun,pr,degradation,peak,connectedKw,selectedEnergy,targetKwp,batteryKwh,capex,baseCapex,additions,solarGen,usableSolar,energySaving,demandSaving,dieselSaving,om,annualBenefit,currentAnnual,residualGrid,loanMonthly,rentMonthly,ppaAnnual,ppaRate,route,routeFlows,totals,monthlyImpact,recommendedMonthly,irr:irrVal,payback,confidence,years,selected};
  }
  function annuity(p,r,n){if(!p||!n)return 0;if(!r)return p/n;return p*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1)}
  function irr(flows){let lo=-.9,hi=2;for(let j=0;j<80;j++){const m=(lo+hi)/2;const npv=flows.reduce((s,c,i)=>s+c/Math.pow(1+m,i),0);if(npv>0)lo=m;else hi=m}const out=(lo+hi)/2;return isFinite(out)?out:0}
  function confidenceScore(m){let s=12;if(m.monthlyBill)s+=20;if(m.monthlyKwh)s+=14;s+=Math.min(12,num('billHistory'));if(state.sector)s+=8;if(m.province)s+=8;if(state.location)s+=5;if(m.selected.length||state.customLoads.length)s+=8;if(num('peakKva'))s+=6;if(num('roofArea')||num('groundArea'))s+=4;if(state.files.length)s+=8;return clamp(Math.round(s),10,96)}

  function recompute(){
    state.model=compute();updateLoadSummary();updateLive();renderFinance();if(state.step===5)renderResults();
  }
  function updateLoadSummary(){const m=state.model;if(!m)return;const count=state.loads.size+state.customLoads.length;$('loadSummary').textContent=count?`${count} load group${count===1?'':'s'} selected · approximately ${Math.round(m.connectedKw)} kW connected. Ratings and diversity remain assumptions until verified.`:'Nothing selected yet. We will estimate from your electricity data and clearly flag the assumption.'}
  function updateLive(){
    const m=state.model;const has=m.monthlyBill||m.monthlyKwh;$('liveSystem').textContent=has?`${Math.round(m.targetKwp*.85)}–${Math.round(m.targetKwp*1.15)} kWp`:'—';$('liveSaving').textContent=has?compactMoney(m.annualBenefit):'—';$('liveCapex').textContent=has?compactMoney(m.capex):'—';$('liveRoute').textContent=has?routeName(m.route):'—';
    $('liveConfidence').textContent=m.confidence<40?'Early estimate':m.confidence<70?'Developing':'Decision ready';$('confidenceBar').style.width=m.confidence+'%';$('knownCount').textContent=countKnown()+' supplied';$('assumedCount').textContent=(10-countKnown())+' key assumptions';
    $('nextBestInput').textContent=!m.monthlyBill?'Add your monthly bill or usage to begin.':!state.sector?'Choose your type of operation.':!m.province?'Confirm the site location or province.':!state.loads.size?'Choose the main equipment you operate.':'Your first estimate is taking shape.';renderMiniChart(m);
  }
  function countKnown(){return [num('monthlyBill')||num('monthlyKwh'),state.sector,$('province').value,state.loads.size,num('peakKva'),num('roofArea')||num('groundArea'),state.files.length,state.location,num('dieselSpend'),$('clientNotes')?.value].filter(Boolean).length}
  function routeName(k){return {cash:'Outright purchase',bank:'Bank finance',rent:'Rent-to-own',ppa:'Energy services / PPA',grid:'Grid only'}[k]||k}

  function renderMiniChart(m){
    const el=$('miniChart'),w=340,h=125,p=15,max=Math.max(...['grid','bank','ppa'].flatMap(k=>cumulative(m.routeFlows[k]))||[1]);const colors={grid:'#9aa5a8',bank:'#4f76a8',ppa:'#00a9d6'};
    el.innerHTML=`<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Indicative cumulative cost comparison">${[0,.5,1].map(v=>`<line x1="${p}" y1="${p+(h-2*p)*v}" x2="${w-p}" y2="${p+(h-2*p)*v}" stroke="#e8eeee"/>`).join('')}${['grid','bank','ppa'].map(k=>`<path d="${path(cumulative(m.routeFlows[k]),w,h,p,max)}" fill="none" stroke="${colors[k]}" stroke-width="2.5"/>`).join('')}<text x="${p}" y="${h-2}" font-size="8" fill="#788589">Now</text><text x="${w-p-34}" y="${h-2}" font-size="8" fill="#788589">Year ${m.years}</text></svg>`;
  }
  function cumulative(a){let s=0;return a.map(x=>(s+=x))}function path(a,w,h,p,max){if(!a.length)return'';return a.map((v,i)=>(i?'L':'M')+(p+i*(w-2*p)/(a.length-1)).toFixed(1)+' '+(h-p-v/max*(h-2*p)).toFixed(1)).join(' ')}

  function renderFinance(){
    const m=state.model;if(!m)return;$('financeSummary').innerHTML=`<div><span>Indicative project</span><strong>${compactMoney(m.capex)}</strong></div><div><span>Year-one benefit</span><strong>${compactMoney(m.annualBenefit)}</strong></div><div><span>Recommended route</span><strong>${routeName(m.route)}</strong></div>`;
    const cards=[
      ['cash','Outright purchase',0,'Own from day one'],['bank','Bank finance',m.loanMonthly,'Deposit plus fixed loan'],['rent','Rent-to-own',m.rentMonthly,'No or low upfront capital'],['ppa','Energy services / PPA',m.ppaAnnual/12,'Pay for delivered energy']
    ];
    $('financeCards').innerHTML=cards.map(c=>`<article class="finance-card ${m.route===c[0]?'recommended':''}">${m.route===c[0]?'<span class="rec">RECOMMENDED FIRST LOOK</span>':''}<h3>${c[1]}</h3><div class="payment">${c[0]==='cash'?compactMoney(m.capex):money(c[2])+' /mo'}</div><small>${c[3]}</small><dl><div><dt>Upfront</dt><dd>${c[0]==='cash'?compactMoney(m.capex):c[0]==='bank'?compactMoney(m.capex*num('deposit')/100):'Indicative R0'}</dd></div><div><dt>20-year NPV cost</dt><dd>${compactMoney(m.totals[c[0]].npv)}</dd></div><div><dt>Ownership</dt><dd>${c[0]==='ppa'?'Service term':c[0]==='rent'?'At term end':'Client asset'}</dd></div></dl></article>`).join('');
  }

  function renderResults(){
    const m=state.model,route=routeName(m.route);$('confidenceScore').textContent=m.confidence+'%';$('resultHeadline').textContent=m.monthlyImpact>=0?'Your energy spend can become a strategic advantage.':'Your site needs a more detailed funding review.';$('resultSubhead').textContent=`Based on the information supplied, a ${Math.round(m.targetKwp)} kWp starting design with ${route.toLowerCase()} deserves the next level of validation.`;
    $('resultKpis').innerHTML=[['Recommended size',Math.round(m.targetKwp)+' kWp','Preliminary range'],['Net monthly impact',money(m.monthlyImpact),m.monthlyImpact>=0?'Estimated positive cash effect':'Requires refinement'],['20-year NPV benefit',compactMoney(m.totals.grid.npv-m.totals[m.route].npv),'Versus remaining grid-only'],['Indicative return',m.irr>0?pct(m.irr*100)+' IRR':'To validate',m.payback?m.payback.toFixed(1)+' year simple payback':'Insufficient data']].map(x=>`<div><span>${x[0]}</span><strong>${x[1]}</strong><small>${x[2]}</small></div>`).join('');
    $('recommendation').textContent=route;$('recommendationWhy').textContent=recommendationWhy(m);$('fitBadge').textContent=m.confidence>=70?'STRONG FIRST FIT':m.confidence>=45?'PROMISING · VERIFY':'EARLY ESTIMATE';
    renderCostChart(m);renderLoadChart(m);renderSystem(m);renderMonthlyChart(m);renderWaterfall(m);renderEnergyFlow(m);renderSensitivity(m);renderTable(m);renderConfidence(m);renderRisks(m);
  }
  function recommendationWhy(m){if(m.route==='cash')return'Highest indicative long-term value where capital is available and ownership is the priority.';if(m.route==='bank')return'Balances ownership with staged repayment; final affordability depends on approved lending terms.';if(m.route==='rent')return'Provides a structured ownership path while reducing initial capital pressure.';return'Preserves capital and aligns payments to delivered energy, subject to credit approval and final PPA pricing.'}
  function scenarioModel(m){const factor=state.scenario==='conservative'?1.12:(state.scenario==='upside'?.91:1);return {factor}}
  function renderCostChart(m){
    const f=scenarioModel(m).factor,w=820,h=250,p=40,keys=['grid','cash','bank','rent','ppa'],colors={grid:'#a3acae',cash:'#1c775e',bank:'#5579aa',rent:'#8a6da6',ppa:'#00a9d6'},max=Math.max(...keys.flatMap(k=>cumulative(m.routeFlows[k]).map(v=>v*f)));$('costChart').innerHTML=`<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Twenty-year cumulative cost comparison">${[0,.25,.5,.75,1].map(v=>`<line x1="${p}" y1="${p+(h-2*p)*v}" x2="${w-p}" y2="${p+(h-2*p)*v}" stroke="#e7eded"/><text x="3" y="${p+(h-2*p)*v+3}" font-size="8" fill="#788589">${compactMoney(max*(1-v))}</text>`).join('')}${keys.map(k=>`<path d="${path(cumulative(m.routeFlows[k]).map(v=>v*f),w,h,p,max)}" fill="none" stroke="${colors[k]}" stroke-width="${k===m.route?4:2}"/><text x="${w-p-2}" y="${(h-p-(m.totals[k].nominal*f)/max*(h-2*p)).toFixed(1)}" font-size="8" fill="${colors[k]}" text-anchor="end">${routeName(k)}</text>`).join('')}<text x="${p}" y="${h-5}" font-size="8" fill="#788589">Now</text><text x="${w-p}" y="${h-5}" font-size="8" fill="#788589" text-anchor="end">Year ${m.years}</text></svg>`;
  }
  function renderLoadChart(m){
    const w=390,h=230,p=26;const load=[],solar=[];for(let hr=0;hr<24;hr++){const dayShape=hr>=6&&hr<=18?Math.sin((hr-6)/12*Math.PI):0;let lf=state.timing==='day'?(hr>=7&&hr<=18?1:.25):state.timing==='night'?(hr>=18||hr<=6?1:.35):(hr>=7&&hr<=18?.8:.55);load.push(Math.max(1,m.peak*lf));solar.push(m.targetKwp*dayShape*.86)}const max=Math.max(...load,...solar,1);$('loadChart').innerHTML=`<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Typical day load and solar profile"><path d="${area(load,w,h,p,max)}" fill="rgba(7,61,73,.13)" stroke="#073d49"/><path d="${area(solar,w,h,p,max)}" fill="rgba(0,169,214,.2)" stroke="#00a9d6"/><text x="${p}" y="${h-5}" font-size="8" fill="#788589">00:00</text><text x="${w/2}" y="${h-5}" font-size="8" fill="#788589" text-anchor="middle">12:00</text><text x="${w-p}" y="${h-5}" font-size="8" fill="#788589" text-anchor="end">24:00</text><circle cx="18" cy="12" r="4" fill="#073d49"/><text x="27" y="15" font-size="8">Load</text><circle cx="75" cy="12" r="4" fill="#00a9d6"/><text x="84" y="15" font-size="8">Solar</text></svg>`}
  function area(a,w,h,p,max){const pts=a.map((v,i)=>`${p+i*(w-2*p)/(a.length-1)},${h-p-v/max*(h-2*p)}`).join(' ');return`M${p},${h-p} L${pts} L${w-p},${h-p} Z`}
  function renderMonthlyChart(m){const season=[1.06,1.02,.98,.9,.82,.76,.78,.88,.98,1.05,1.1,1.08],months=['J','F','M','A','M','J','J','A','S','O','N','D'],w=820,h=240,p=36;const consumption=months.map(()=>m.annualKwh/12),generation=season.map(v=>m.solarGen/12*v);const max=Math.max(...consumption,...generation,1);const bw=(w-2*p)/12;$('monthlyChart').innerHTML=`<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Monthly consumption and solar generation">${months.map((mo,i)=>{const x=p+i*bw,gh=generation[i]/max*(h-2*p),ch=consumption[i]/max*(h-2*p);return`<rect x="${x+3}" y="${h-p-ch}" width="${bw*.38}" height="${ch}" rx="3" fill="#073d49" opacity=".72"/><rect x="${x+bw*.44}" y="${h-p-gh}" width="${bw*.38}" height="${gh}" rx="3" fill="#00a9d6"/><text x="${x+bw*.42}" y="${h-8}" text-anchor="middle" font-size="8" fill="#788589">${mo}</text>`}).join('')}<circle cx="${p}" cy="12" r="4" fill="#073d49"/><text x="${p+9}" y="15" font-size="8">Consumption</text><circle cx="${p+80}" cy="12" r="4" fill="#00a9d6"/><text x="${p+89}" y="15" font-size="8">Solar generation</text></svg>`}
  function renderWaterfall(m){const vals=[m.energySaving,m.demandSaving,m.dieselSaving,-m.om],labels=['Energy','Demand','Diesel','O&M'],w=390,h=230,p=30,max=Math.max(...vals.map(Math.abs),1),bw=55;$('waterfallChart').innerHTML=`<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Year-one value waterfall">${vals.map((v,i)=>{const bh=Math.abs(v)/max*(h-2*p-25),x=45+i*80,y=v>=0?h-p-bh:h-p;return`<rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="5" fill="${v>=0?'#1c775e':'#b74b4b'}"/><text x="${x+bw/2}" y="${v>=0?y-6:y+bh+12}" text-anchor="middle" font-size="8">${compactMoney(Math.abs(v))}</text><text x="${x+bw/2}" y="${h-8}" text-anchor="middle" font-size="8" fill="#788589">${labels[i]}</text>`}).join('')}</svg>`}
  function renderEnergyFlow(m){const grid=Math.max(0,m.annualKwh-m.usableSolar);$('energyFlow').innerHTML=`<div class="energy-flow"><div class="flow-source"><div class="flow-box">Solar generation<b>${Math.round(m.solarGen/1000).toLocaleString('en-ZA')} MWh</b></div><div class="flow-box">Grid retained<b>${Math.round(grid/1000).toLocaleString('en-ZA')} MWh</b></div>${m.dieselSaving?`<div class="flow-box">Diesel avoided<b>${compactMoney(m.dieselSaving)}</b></div>`:''}</div><div class="flow-arrow">→</div><div class="flow-use"><div class="flow-box">Site consumption<b>${Math.round(m.annualKwh/1000).toLocaleString('en-ZA')} MWh</b></div><div class="flow-box">Solar used on site<b>${Math.round(m.usableSolar/1000).toLocaleString('en-ZA')} MWh</b></div><div class="flow-box">Battery allowance<b>${m.batteryKwh?Math.round(m.batteryKwh)+' kWh':'None'}</b></div></div></div>`}
  function renderSensitivity(m){const tariffs=[-.15,0,.15],production=[-.1,0,.1];let html='<div class="sensitivity"><div class="head">Production ↓ / Tariff →</div>'+tariffs.map(t=>`<div class="head">${t<0?'−15%':t>0?'+15%':'Base'}</div>`).join('');production.forEach(p=>{html+=`<div class="head">${p<0?'−10%':p>0?'+10%':'Base'}</div>`;tariffs.forEach(t=>{const benefit=m.annualBenefit*(1+p)*(1+t),npv=benefit*7.9-m.capex,cls=npv>m.capex*.5?'cell':npv>0?'cell medium':'cell low';html+=`<div class="${cls}">${compactMoney(npv)} NPV</div>`})});$('sensitivityMatrix').innerHTML=html+'</div>'}
  function renderSystem(m){const upgrades=UPGRADES.filter(u=>state.upgrades.has(u.id)).map(u=>u.name).join(', ')||'Solar-only starting case';$('systemSnapshot').innerHTML=`<div class="system-list"><div><span>PV capacity</span><b>${Math.round(m.targetKwp)} kWp</b></div><div><span>Annual generation</span><b>${Math.round(m.solarGen).toLocaleString('en-ZA')} kWh</b></div><div><span>Battery allowance</span><b>${m.batteryKwh?Math.round(m.batteryKwh)+' kWh':'Not included'}</b></div><div><span>Indicative capex</span><b>${money(m.capex)}</b></div><div><span>Solar-resource source</span><b>${state.location?'Confirmed coordinates + provincial climatology':'Provincial climatology assumption'}</b></div><div><span>Performance ratio / degradation</span><b>${pct(m.pr*100)} / ${pct(m.degradation*100)} p.a.</b></div><div><span>Mapped usable area</span><b>${state.siteArea?state.siteArea.toLocaleString('en-ZA')+' m²':'Requires site confirmation'}</b></div><div><span>Options</span><b>${esc(upgrades)}</b></div><div><span>Model version / date</span><b>Snapshot 2.0 · ${new Date().toLocaleDateString('en-ZA')}</b></div></div>`}
  function renderTable(m){const ks=['grid','cash','bank','rent','ppa'],term=num('loanTerm')||10;$('comparisonTable').innerHTML=`<thead><tr><th>Route</th><th>Upfront</th><th>Monthly</th><th>Escalation / term</th><th>20-year nominal</th><th>20-year NPV</th><th>Year-one cash benefit</th><th>Break-even</th><th>Ownership / condition</th></tr></thead><tbody>${ks.map(k=>{const monthly=k==='grid'?m.monthlyBill:k==='cash'?m.residualGrid/12:k==='bank'?m.residualGrid/12+m.loanMonthly:k==='rent'?m.residualGrid/12+m.rentMonthly:m.ppaAnnual/12;const benefit=(m.monthlyBill+num('dieselSpend')-monthly)*12;return`<tr class="${k===m.route?'recommended-row':''}"><td>${routeName(k)}${k===m.route?' · Recommended':''}</td><td>${k==='cash'?compactMoney(m.capex):k==='bank'?compactMoney(m.capex*num('deposit')/100):k==='grid'?'R0':'Indicative R0'}</td><td>${money(monthly)}</td><td>${k==='grid'?num('gridEscalation')+'% assumed':k==='ppa'?num('ppaEscalation')+'% PPA':k==='bank'?term+' years':'Modelled term'}</td><td>${compactMoney(m.totals[k].nominal)}</td><td>${compactMoney(m.totals[k].npv)}</td><td>${compactMoney(benefit)}</td><td>${k==='cash'&&m.payback?m.payback.toFixed(1)+' yrs':k==='grid'?'Never':'Terms dependent'}</td><td>${k==='grid'?'None':k==='ppa'?'Credit + service agreement':k==='rent'?'Ownership at term end':'Client asset'}</td></tr>`}).join('')}</tbody>`}
  function renderConfidence(m){const extracted=state.extracted.length?`${state.extracted.length} document${state.extracted.length>1?'s':''} extracted`:'No document extracted';const rows=[['Electricity spend',m.monthlyBill?'Client supplied':'System assumed'],['Uploaded evidence',extracted],['Energy usage',num('monthlyKwh')?'Client supplied or extracted':'Derived from bill'],['Site location',state.location?'Externally verified map location':m.province?'Province supplied':'National assumption'],['Load profile',state.loads.size?'Client guided + editable':'Sector profile assumed'],['Peak demand',num('peakKva')?'Client supplied':'Requires technical validation'],['Solar space',num('roofArea')||num('groundArea')?'Client supplied / mapped':'Requires technical validation'],['Finance inputs',state.mode==='advanced'?'Client adjustable':'Standard assumptions']];$('confidencePanel').innerHTML=`<div class="confidence-list">${rows.map(r=>`<div><span>${r[0]}</span><i class="${/supplied|verified|extracted|editable/i.test(r[1])?'known':'assumed'}">${r[1]}</i></div>`).join('')}</div>`}
  function renderRisks(m){const risks=[];if(!state.files.length)risks.push(['Billing verification','Obtain 12 months of bills and interval data where available.']);if(!num('peakKva'))risks.push(['Demand profile','Confirm maximum demand, tariff structure and time-of-use charges.']);if(!num('roofArea')&&!num('groundArea'))risks.push(['Installation space','Confirm roof structure, shading, usable area or ground conditions.']);if(m.batteryKwh)risks.push(['Storage duty','Validate critical-load list, autonomy and battery cycling objective.']);risks.push(['Funding and approvals','Final rates, credit approval, grid permissions and tax treatment remain subject to review.']);$('riskPanel').innerHTML=`<div class="risk-list">${risks.slice(0,5).map(r=>`<div><b>${r[0]}</b><span>${r[1]}</span></div>`).join('')}</div>`}

  function summaryText(){const m=state.model;return`Chariot Energy Snapshot\n\nSite: ${state.sector||'Not specified'} · ${m.province||'Location to confirm'}\nMonthly bill: ${money(m.monthlyBill)}\nIndicative solar: ${Math.round(m.targetKwp)} kWp\nBattery allowance: ${m.batteryKwh?Math.round(m.batteryKwh)+' kWh':'Not included'}\nIndicative capex: ${money(m.capex)}\nYear-one benefit: ${money(m.annualBenefit)}\nRecommended first route: ${routeName(m.route)}\nData confidence: ${m.confidence}%\n\nClient notes: ${$('clientNotes').value||$('voiceNotes').value||'None supplied'}\n\nIndicative pre-feasibility only. Please contact me to validate the assessment.`}
  function shareWhatsapp(){window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(summaryText())}`,'_blank','noopener')}
  function shareEmail(){location.href=`mailto:${CONTACT.email}?subject=${encodeURIComponent('Chariot Energy Snapshot — pre-feasibility review')}&body=${encodeURIComponent(summaryText())}`}
  function requestMeeting(){const name=$('meetingName').value.trim(),contact=$('meetingContact').value.trim();if(!name||!contact){alert('Please add your name and phone or email.');return}if(CONTACT.calendar){window.open(CONTACT.calendar,'_blank','noopener');return}const text=`Chariot Energy Review Request\n\nName: ${name}\nCompany/site: ${$('meetingCompany').value||'Not supplied'}\nContact: ${contact}\nPreferred time: ${$('meetingWindow').value}\n\n${summaryText()}`;window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`,'_blank','noopener')}

  function save(){try{localStorage.setItem('chariot_snapshot_v2',JSON.stringify(serialize()));$('saveBtn').textContent='Saved ✓';setTimeout(()=>$('saveBtn').textContent='Save progress',1800)}catch(err){}}
  function serialize(){const values={};$$('input,select,textarea').forEach(e=>{if(e.id&&e.type!=='file')values[e.id]=e.value});return{...state,loads:[...state.loads],upgrades:[...state.upgrades],values,model:null,files:[]}}
  function restore(){try{const d=JSON.parse(localStorage.getItem('chariot_snapshot_v2'));if(!d)return;Object.assign(state,d,{loads:new Set(d.loads||[]),upgrades:new Set(d.upgrades||[]),files:[],model:null});Object.entries(d.values||{}).forEach(([k,v])=>{if($(k))$(k).value=v});if(state.sector){selectVisual('sectorChoices',state.sector);renderLoads(state.sector)}selectVisual('timingChoices',state.timing);selectVisual('priorityChoices',state.priority);selectVisual('resilienceChoices',state.resilience);renderUpgrades()}catch(err){}}
  function restart(){if(!confirm('Clear this assessment and start again?'))return;localStorage.removeItem('chariot_snapshot_v2');location.reload()}

  init();
  if('serviceWorker'in navigator&&location.protocol.startsWith('http'))window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
})();
