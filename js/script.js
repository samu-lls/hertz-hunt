
const GC={'Metal Progressivo':'#e05c5c','Rock':'#e07a2f','Groove':'#d4c44a','Pop':'#5c9de0','Pop Alternative':'#a05ce0','R&B':'#e05c9d','Soul':'#e09a5c','Sertanejo':'#5ce07a','Pagode':'#5ccfe0','Rap Brasileiro':'#e0c45c','Eletrônica':'#5c7ae0'};
const GG={'Metal Progressivo':'#7a1515','Rock':'#7a3a0a','Groove':'#6a600a','Pop':'#0a3a7a','Pop Alternative':'#3a0a7a','R&B':'#7a0a40','Soul':'#7a4a0a','Sertanejo':'#0a7a2f','Pagode':'#0a5a7a','Rap Brasileiro':'#7a5a0a','Eletrônica':'#0a1a7a'};
const LE=['','🟢','🟡','🟠','🔴','💀'];
const LL=['','Aquecimento','Médio','Difícil','Avançado','Extremo'];

const T=[
  {lv:1,ch:"Separação de graves, hi-hats e guitarra.",d:'Uma dança disfarçada de teste. Se você não quiser balançar a cabeça, o fone não está entregando o ritmo certo.',g:"Groove",s:"Get Lucky",a:"Daft Punk ft. Pharrell",sid:"69kOkLUCkxIZYexIgSG8rq",fq:"mid",q:"Você conseguiu ouvir o ritmo da guitarra e os detalhes da bateria separados, sem virar uma mistura só?"},
  {lv:1,ch:"Distinção entre synth e linha de baixo.",d:'O sintetizador brilhante que fez essa música um hit precisa chegar até você. Se parecer abafado, seu fone está engolindo o brilho.',g:"Pop",s:"Blinding Lights",a:"The Weeknd",sid:"0VjIjW4GlUZAMYd2vXMi3b",fq:"high",q:"O brilho do sintetizador chegou nítido e vibrante, ou pareceu apagado e sem energia?"},
  {lv:1,ch:"Agudos vibrantes sem distorção.",d:'O agudo icônico do Rei do Pop precisa ser vibrante e energético. Se raspar ou sumir, seu fone está perdendo o alto da música.',g:"Groove",s:"Don't Stop 'Til You Get Enough",a:"Michael Jackson",sid:"46eu3SBuFCXWsPT39Yg3tJ",fq:"high",q:"Os agudos e a voz do Michael Jackson chegaram vivos e sem chiado, ou pareceram duros e cansativos?"},
  {lv:2,ch:"Baixo robusto sem mascarar a voz.",d:'O segredo aqui é ouvir o baixo robusto e a voz da Miley ao mesmo tempo, sem um abafar o outro. Fone fraco borra tudo numa lama só.',g:"Pop",s:"Flowers",a:"Miley Cyrus",sid:"7DSAEUvxU8FajXtRloy8M0",fq:"low",q:"O grave estava presente e firme sem abafar a voz? Você conseguiu ouvir os dois ao mesmo tempo com clareza?"},
  {lv:2,ch:"Resposta de frequência em barítono.",d:'Essa voz profunda de barítono precisa ter peso e calor. Se parecer nasal ou fina, o fone está cortando as frequências que fazem a diferença.',g:"Soul",s:"No Love Dying",a:"Gregory Porter",sid:"03BN4IvMyiT9OEDJv2fH5n",fq:"low",q:"A voz grave do cantor soou encorpada e quente, ou pareceu fina e sem corpo?"},
  {lv:2,ch:"Imagem estéreo e extensão nos graves.",d:'Feche os olhos. A orquestra deve crescer ao seu redor e a voz deve parecer estar bem na sua frente. É a diferença entre ouvir e sentir.',g:"Soul",s:"Feeling Good",a:"Nina Simone",sid:"6Rqn2GFlmvmV4w9Ala0I1e",fq:"mid",q:"Com os olhos fechados, você sentiu os instrumentos ao redor e a voz bem na sua frente, como se estivesse no palco?"},
  {lv:2,ch:"Agudos controlados sem sibilância.",d:'A voz da Hayley Williams é intensa e cheia de energia. Se você sentir um chiado ou dor no ouvido, seu fone está exagerando nos agudos.',g:"Rock",s:"Misery Business",a:"Paramore",sid:"3l9CW99AHtExIRV4hW2N5m",fq:"high",q:"Você conseguiu ouvir a voz da cantora claramente e com energia, sem chiado ou dor no ouvido?"},
  {lv:3,ch:"Equilíbrio espectral entre sub-grave e médios.",d:'Aqui o grave deve ser como uma neblina suave — presente em todo lugar, mas sem apagar a voz delicada. Equilíbrio é tudo.',g:"R&B",s:"telepatía",a:"Kali Uchis",sid:"6tDDoYIxWvMLTdKpjFkc1B",fq:"low",q:"O grave estava presente e envolvente sem abafar a voz delicada da cantora? Os dois coexistiram bem?"},
  {lv:3,ch:"Peso do bumbo sem mascarar as vozes.",d:'O bumbo da viola sertaneja precisa ter peso, mas sem engolir as vozes. Se parecer que você está lá na frente do palco, o fone passou.',g:"Sertanejo",s:"Arranhão",a:"Henrique e Juliano",sid:"4u06FbRh6FvV2FQZkouzCw",fq:"low",q:"O bumbo soou com peso e impacto, mas sem engolir as vozes dos cantores?"},
  {lv:3,ch:"Ataque seco e rápido do pandeiro.",d:'Cada batida do pandeiro precisa ter aquele estalo seco e rápido. Se soar borrado ou lento, seu fone não está acompanhando o ritmo do pagode.',g:"Pagode",s:"Pé Na Areia",a:"Diogo Nogueira",sid:"1b0qrz3GCfvlpo05Dso8Re",fq:"high",q:"Cada batida do pandeiro soou seca e bem definida, ou pareceu borrada e sem precisão?"},
  {lv:3,ch:"Distinção de instrumentos em conjunto ao vivo.",d:'Ao vivo, são vários músicos tocando ao mesmo tempo. Seu fone deve deixar você distinguir cada um deles, sem virar uma bagunça sonora.',g:"Pagode",s:"Sinal Vital",a:"Sorriso Maroto",sid:"61XyXIWZFWh2zdRBAqVrrE",fq:"mid",q:"Você conseguiu distinguir os instrumentos individualmente, ou tudo soou junto numa bagunça?"},
  {lv:4,ch:"Clareza no caos: bateria, guitarra e voz.",d:'Bateria acelerada, guitarras distorcidas e voz gritada. Tudo ao mesmo tempo. O fone precisa manter a clareza no caos total.',g:"Rock",s:"Basket Case",a:"Green Day",sid:"6L89mwZXSOwYl76YXfX13s",fq:"mid",q:"No meio do caos da música, bateria, guitarra e voz chegaram com clareza ou tudo virou uma parede de ruído?"},
  {lv:4,ch:"Voz delicada sobre sub-grave pesado.",d:'A Billie sussurra enquanto o grave bombeia pesado. Seu fone precisa entregar os dois sem deixar a voz delicada desaparecer no meio do baixo.',g:"Pop Alternative",s:"bad guy",a:"Billie Eilish",sid:"2Fxmhks0bxGSBdJ92vM42m",fq:"low",q:"O grave estava pesado e presente, mas a voz sussurrada da Billie ainda dava para ouvir com nitidez?"},
  {lv:4,ch:"Reprodução firme e seca do 808.",d:'Esse bumbo eletrônico pesado (o famoso 808) precisa ser firme e seco, quase físico. Se parecer frouxo ou distorcido, seu fone não aguentou.',g:"R&B",s:"MONACO",a:"Bad Bunny",sid:"4MjDJD8cW7iVeWInc2Bdyj",fq:"low",q:"O bumbo eletrônico soou firme e com impacto físico, ou pareceu mole e sem definição?"},
  {lv:4,ch:"Ausência de distorção em picos vocais.",d:'No refrão, a voz da Simone vai ao limite. Se seu fone começar a distorcer nos momentos mais intensos, ele não tem potência suficiente.',g:"Sertanejo",s:"Erro Gostoso",a:"Simone Mendes",sid:"51pxwIxDVCbFHW8oyJFQXD",fq:"high",q:"Nos momentos mais intensos do refrão, a voz ficou limpa ou você notou alguma distorção ou aspereza?"},
  {lv:4,ch:"Resposta à transição de dinâmica extrema.",d:'Começa suave e explode. A transição entre o trecho calmo e o drop cheio é o teste definitivo: seu fone precisa te surpreender na virada.',g:"Pop Alternative",s:"Hi-Lo (Hollow)",a:"Bishop Briggs",sid:"4pfcHOvZAf9f3dYMPcdfQc",fq:"mid",q:"A virada da música — de suave para explosivo — te surpreendeu com impacto, ou o fone não conseguiu expressar bem essa transição?"},
  {lv:5,ch:"Velocidade de resposta em alternância tonal.",d:'Aqui viola e distorção pesada alternam em segundos. O fone precisa de velocidade para trocar de um extremo ao outro sem embaralhar os sons.',g:"Metal Progressivo",s:"Ghost of Perdition",a:"Opeth",sid:"0ppdt8zRZOHIKh4ZDB0Zp9",fq:"mid",q:"Quando a música mudava radicalmente de timbre em poucos segundos, o fone acompanhou sem embaralhar os sons?"},
  {lv:5,ch:"Vocal e bateria audíveis sob camadas de guitarra.",d:'Camadas e mais camadas de guitarra. O desafio é ouvir a bateria e o vocal claramente mesmo com tudo aquilo soando ao mesmo tempo.',g:"Metal Progressivo",s:"Blackest Eyes",a:"Porcupine Tree",sid:"2Gl8sH6spK27nQ900wTGCb",fq:"mid",q:"Com todas as guitarras soando juntas, você ainda conseguiu ouvir a bateria e o vocal por baixo de tudo?"},
  {lv:5,ch:"Inteligibilidade vocal sobre beat denso.",d:'No meio de um beat pesado de rap, cada sílaba do Mano Brown precisa chegar clara. Se a voz sumir no grave, o fone não faz o dever de casa.',g:"Rap Brasileiro",s:"A Vida É Desafio",a:"Racionais MC's",sid:"4mZu6NuOntvYZqCZPrxTqT",fq:"mid",q:"Você conseguiu entender cada palavra do rap claramente, ou a voz se perdeu no meio do beat pesado?"},
  {lv:5,ch:"Extensão de sub-bass: você sente a nota?",d:'Esse é o teste final de sub-bass. A nota mais profunda da música só aparece para quem tem fone de verdade. Você vai sentir ou vai perder?',g:"Rap Brasileiro",s:"777-666",a:"Matuê",sid:"3sGcETRMuAgcPgjDpIkgMn",fq:"low",q:"Você sentiu a nota grave mais funda da música — aquela que parece vibrar no peito — ou ela sumiu no seu fone?"},
];

const SUPABASE_BASE_URL = 'https://msxxupxlcjlnuajpajrt.supabase.co/storage/v1/object/public/audios/';

const REMOTE_FILES = [
  '01_Get_Lucky.mp3','02_Blinding_Lights.mp3','03_Dont_Stop_Til_You_Get_Enough.mp3',
  '04_Flowers.mp3','05_No_Love_Dying.mp3','06_Feeling_Good.mp3',
  '07_Misery_Business.mp3','08_telepatia.mp3','09_Arranhao.mp3',
  '10_Pe_Na_Areia.mp3','11_Sinal_Vital.mp3','12_Basket_Case.mp3',
  '13_bad_guy.mp3','14_MONACO.mp3','15_Erro_Gostoso.mp3',
  '16_Hi-Lo_Hollow.mp3','17_Ghost_of_Perdition.mp3','18_Blackest_Eyes.mp3',
  '19_A_Vida_E_Desafio.mp3','20_777-666.mp3'
].map(file => SUPABASE_BASE_URL + file);

const player = new Audio();
player.preload = 'none';

let playerCtx = null;
let currentTrackIdx = -1;
let progressTimer = null;
let autoPlayEnabled = false;
let expObserver = null;


player.addEventListener('playing', () => {
  if (playerCtx === 'exp') setExpPlayingUI(currentTrackIdx, true);
  if (playerCtx === 'playlist') setPlPlayingUI(currentTrackIdx, true);
  if (playerCtx === 'modal') setModalPlayingUI(true);
  startProgressTimer();
  showToast(`▶ ${T[currentTrackIdx].s} — ${T[currentTrackIdx].a}`, 4000);
});
player.addEventListener('pause', () => {
  if (playerCtx === 'exp') setExpPlayingUI(currentTrackIdx, false);
  if (playerCtx === 'playlist') setPlPlayingUI(currentTrackIdx, false);
  if (playerCtx === 'modal') setModalPlayingUI(false);
  stopProgressTimer();
});
player.addEventListener('ended', () => {
  if (playerCtx === 'exp') { setExpPlayingUI(currentTrackIdx, false); stopProgressTimer(); resetExpProgress(currentTrackIdx); }
  if (playerCtx === 'playlist') { plNext(); }
  if (playerCtx === 'modal') { setModalPlayingUI(false); stopProgressTimer(); resetModalProgress(); }
});
player.addEventListener('error', () => {
  showToast('⚠ Arquivo não encontrado — verifique a pasta audio/', 5000);
  if (playerCtx === 'exp') setExpPlayingUI(currentTrackIdx, false);
  if (playerCtx === 'playlist') setPlPlayingUI(currentTrackIdx, false);
  if (playerCtx === 'modal') setModalPlayingUI(false);
  stopProgressTimer();
});
player.addEventListener('waiting', () => {
  if (playerCtx === 'exp') { const b = document.getElementById(`pb${currentTrackIdx}`); if(b){b.classList.add('loading');b.innerHTML='○';} }
  if (playerCtx === 'playlist') { const b = document.getElementById('pl-play-btn'); if(b){b.classList.add('loading');b.innerHTML='○';} }
  if (playerCtx === 'modal') { const b = document.getElementById('modal-play-btn'); if(b){b.classList.add('loading');b.innerHTML='○';} }
});

function playTrack(idx, ctx) {
  player.pause();
  currentTrackIdx = idx;
  playerCtx = ctx;
  player.src = REMOTE_FILES[idx]; // <-- Aqui foi a mudança!
  player.load();
  player.play().catch(() => showToast('⚠ Toque em qualquer lugar para habilitar o áudio', 4000));
}

function stopAll() {
  player.pause();
  if (currentTrackIdx >= 0) {
    if (playerCtx === 'exp') setExpPlayingUI(currentTrackIdx, false);
    if (playerCtx === 'playlist') setPlPlayingUI(currentTrackIdx, false);
    if (playerCtx === 'modal') setModalPlayingUI(false);
    stopProgressTimer();
  }
  playerCtx = null;
}

function startProgressTimer() {
  stopProgressTimer();
  progressTimer = setInterval(() => {
    try {
      const c = player.currentTime, d = player.duration || 0;
      if (!d) return;
      const pct = (c / d) * 100;
      const fmt = (s) => `${Math.floor(s/60)}:${Math.floor(s%60).toString().padStart(2,'0')}`;
      if (playerCtx === 'exp') {
        const f = document.getElementById(`af${currentTrackIdx}`);
        const p = document.getElementById(`p${currentTrackIdx}`);
        const tm = document.getElementById(`atm${currentTrackIdx}`);
        const du = document.getElementById(`adu${currentTrackIdx}`);
        if (f) f.style.width = pct + '%';
        if (p) p.style.width = pct + '%';
        if (tm) tm.textContent = fmt(c);
        if (du) du.textContent = fmt(d);
      }
      if (playerCtx === 'playlist') {
        const f = document.getElementById('pl-prog-fill');
        const tm = document.getElementById('pl-tm');
        const du = document.getElementById('pl-dur');
        if (f) f.style.width = pct + '%';
        if (tm) tm.textContent = fmt(c);
        if (du) du.textContent = fmt(d);
      }
      if (playerCtx === 'modal') {
        const f = document.getElementById('modal-fill');
        const tm = document.getElementById('modal-tm');
        const du = document.getElementById('modal-dur');
        if (f) f.style.width = pct + '%';
        if (tm) tm.textContent = fmt(c);
        if (du) du.textContent = fmt(d);
      }
    } catch(e) {}
  }, 500);
}
function stopProgressTimer() { if (progressTimer) { clearInterval(progressTimer); progressTimer = null; } }


function nav(page) {
 
  if (page !== 'experience' && page !== 'playlist') {
    stopAll();
    autoPlayEnabled = false;
    rpHide();
    document.getElementById('rp-bubble').classList.remove('show');
  }
  if (page === 'experience') {
    
    document.getElementById('exp-sdots').classList.add('visible');
  } else {
    document.getElementById('exp-sdots').classList.remove('visible');
  }

  document.querySelectorAll('.page').forEach(p => { p.classList.remove('active'); p.scrollTop = 0; });
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelector(`[data-page="${page}"]`).classList.add('active');

 
  if (page === 'experience') {
    const sc = document.getElementById('exp-scroll');
    if (sc) sc.scrollTop = 0;
  }
 
  if (page === 'playlist') buildPlaylist();
}

const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
const cur = document.getElementById('cur'), curR = document.getElementById('curR');
let cx=0, cy=0, rx=0, ry=0;
if (!isTouch) {
  document.addEventListener('mousemove', e => { cx=e.clientX; cy=e.clientY; cur.style.left=cx+'px'; cur.style.top=cy+'px'; });
  (function aR(){ rx+=(cx-rx)*.1; ry+=(cy-ry)*.1; curR.style.left=rx+'px'; curR.style.top=ry+'px'; requestAnimationFrame(aR); })();
}
function hov(on) { if(!isTouch){ cur.classList.toggle('h',on); curR.classList.toggle('h',on); } }

let toastTimer;
function showToast(msg, dur=3000) {
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), dur);
}


(function buildHome() {
  const body = document.getElementById('home-challenges-body');
  const byLevel = {};
  T.forEach((t,i) => { (byLevel[t.lv]||(byLevel[t.lv]=[])).push({...t,idx:i}); });
  [1,2,3,4,5].forEach(lv => {
    const group = byLevel[lv]||[];
    if (!group.length) return;
    const sec = document.createElement('div');
    sec.className = 'lvl-section';
    const pips = Array.from({length:5},(_,i)=>`<div class="lvl-pip-dot" style="${i<lv?'background:'+( GC[group[0].g]||'#1DB954')+'60':''}"></div>`).join('');
    sec.innerHTML=`<div class="lvl-header"><div class="lvl-badge"><span class="lvl-emoji">${LE[lv]}</span><span class="lvl-name-txt">Nível ${lv} — ${LL[lv]}</span></div><div class="lvl-pips-row">${pips}</div></div><div class="challenge-cards" id="cc${lv}"></div>`;
    body.appendChild(sec);
    const grid = sec.querySelector(`#cc${lv}`);
    group.forEach(t => {
      const c = GC[t.g]||'#1DB954';
      const card = document.createElement('div');
      card.className='ccard'; card.style.setProperty('--cc',c);
      card.innerHTML=`<div class="ccard-genre">${t.g}</div><div class="ccard-challenge">${t.ch}</div><div class="ccard-track"><strong>${t.s}</strong> · ${t.a}</div><div class="ccard-arrow"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg></div>`;
      card.addEventListener('click', () => openModal(t.idx));
      if (!isTouch) { card.addEventListener('mouseenter',()=>hov(true)); card.addEventListener('mouseleave',()=>hov(false)); }
      grid.appendChild(card);
    });
  });
})();

let modalIdx = -1;

function openModal(idx) {
  modalIdx = idx;
  const t = T[idx];
  const c = GC[t.g]||'#1DB954';
  const box = document.getElementById('modal-box');
  box.style.setProperty('--tc', c);

  document.getElementById('modal-genre-badge').textContent = t.g;
  document.getElementById('modal-genre-badge').style.setProperty('--tc',c);
  document.getElementById('modal-ch-label').textContent = `${LE[t.lv]} ${LL[t.lv]} · Nível ${t.lv}`;
  document.getElementById('modal-ch-label').style.setProperty('--tc',c);
  document.getElementById('modal-title').textContent = t.s;
  document.getElementById('modal-artist').textContent = t.a;
  document.getElementById('modal-desc').textContent = t.d;
  document.getElementById('modal-sp-btn').href = `https://open.spotify.com/track/${t.sid}`;

  const pips = document.getElementById('modal-diff-pips');
  pips.innerHTML = Array.from({length:5},(_,i)=>`<div class="modal-diff-pip${i<t.lv?' on':''}"></div>`).join('');

  const wv = document.getElementById('modal-waveform');
  wv.innerHTML = Array.from({length:14},(_,wi)=>`<div class="modal-wb" style="height:${6+Math.random()*18}px;animation-delay:${wi*.07}s"></div>`).join('');

  const vinyl = document.getElementById('modal-vinyl');
  vinyl.style.setProperty('--tc',c);
  vinyl.classList.remove('playing');

  resetModalProgress();
  setModalPlayingUI(false);

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';

 
  if (currentTrackIdx === idx && !player.paused) {
    playerCtx = 'modal';
    setModalPlayingUI(true);
  }
}

function closeModal(e, force) {
  if (!force && e && e.target !== document.getElementById('modal-overlay')) return;
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
  if (playerCtx === 'modal') { player.pause(); playerCtx = null; }
}

function modalPlayClick() {
  autoPlayEnabled = true;
  if (playerCtx === 'modal' && currentTrackIdx === modalIdx) {
    if (!player.paused) player.pause(); else player.play().catch(()=>{});
  } else {
    playTrack(modalIdx, 'modal');
  }
}

function modalSeek(e) {
  if (!player.duration) return;
  const r = e.currentTarget.getBoundingClientRect();
  player.currentTime = ((e.clientX - r.left) / r.width) * player.duration;
}

function setModalPlayingUI(on) {
  const btn = document.getElementById('modal-play-btn');
  const vinyl = document.getElementById('modal-vinyl');
  const wv = document.getElementById('modal-waveform');
  if (btn) { btn.innerHTML = on?'⏸':'▶'; btn.classList.toggle('playing',on); btn.classList.remove('loading'); }
  if (vinyl) vinyl.classList.toggle('playing', on);
  if (wv) wv.classList.toggle('playing', on);
}

function resetModalProgress() {
  const f=document.getElementById('modal-fill'), tm=document.getElementById('modal-tm'), du=document.getElementById('modal-dur');
  if(f)f.style.width='0%'; if(tm)tm.textContent='0:00'; if(du)du.textContent='—';
}


(function buildExp() {
 
  const grid = document.getElementById('exp-ch-grid');
  const byLevel = {};
  T.forEach((t,i)=>{ (byLevel[t.lv]||(byLevel[t.lv]=[])).push({...t,idx:i}); });
  [1,2,3,4,5].forEach(lv=>{
    const group = byLevel[lv]||[];
    const col = document.createElement('div'); col.className='exp-ch-col';
    const c = GC[group[0]?.g]||'#1DB954';
    const pips = Array.from({length:5},(_,i)=>`<div class="exp-ch-pip" style="${i<lv?'background:'+c+'70':''}"></div>`).join('');
    col.innerHTML=`<div class="exp-ch-col-header"><span class="exp-ch-lv-emoji">${LE[lv]}</span><span class="exp-ch-lv-name">Nível ${lv}</span><div class="exp-ch-pips">${pips}</div></div>`;
    group.forEach(t=>{
      const item = document.createElement('div');
      item.className='exp-ch-item'; item.style.setProperty('--cc', GC[t.g]||'#1DB954');
      item.textContent = t.ch;
      item.addEventListener('click',()=>expScrollToTrack(t.idx));
      col.appendChild(item);
    });
    grid.appendChild(col);
  });

 
  const container = document.getElementById('exp-tracks');
  const dots = document.getElementById('exp-sdots');
  
  const totalSections = 3 + T.length;
  for(let di=0; di<totalSections; di++){
    const d=document.createElement('div'); d.className='exp-sdot'+(di===0?' active':'');
    d.addEventListener('click',()=>expScrollToSection(di));
    dots.appendChild(d);
  }

  T.forEach((t,i)=>{
    const c=GC[t.g]||'#1DB954', g2=GG[t.g]||'#0a3a0a';
    const isLast = i===T.length-1;
    const wBars = Array.from({length:20},(_,wi)=>`<div class="wb" style="height:${8+Math.random()*28}px;animation-delay:${wi*.055}s"></div>`).join('');
    const dPips = Array.from({length:5},(_,pi)=>`<div class="d-pip${pi<t.lv?' on':''}"></div>`).join('');
    const sec = document.createElement('div');
    sec.className='exp-section exp-ts'; sec.id=`t${i}`; sec.dataset.i=i; sec.style.setProperty('--tc',c);
    const dPipsHTML = Array.from({length:5},(_,pi)=>`<div class="t-diff-pip${pi<t.lv?' on':''}"></div>`).join('');
    const nextHTML = !isLast ? `<div class="t-next-inline">Próxima <div class="t-next-arrow"></div></div>` : `<div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px"><div style="font-size:.55rem;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.15)">Fim ✓</div><button onclick="rpShowReportBtn()" style="font-size:.6rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:8px 16px;border-radius:999px;border:1px solid rgba(29,185,84,.4);background:rgba(29,185,84,.1);color:#1DB954;cursor:pointer;transition:all .2s" onmouseover="this.style.background='rgba(29,185,84,.22)'" onmouseout="this.style.background='rgba(29,185,84,.1)'">📊 Ver relatório</button></div>`;
    sec.innerHTML=`
      <div class="t-bg" style="background:radial-gradient(ellipse 55% 55% at 30% 55%,${c}35,transparent 55%),radial-gradient(ellipse 45% 45% at 70% 45%,${g2}28,transparent 55%),#07070f"></div>
      <div class="t-ov"></div>
      <div class="t-prog" id="p${i}"></div>
      <div class="t-nav">
        <span class="t-ctr">${String(i+1).padStart(2,'0')} / ${String(T.length).padStart(2,'0')}</span>
        <div class="t-nav-right">
          <span class="t-genre">${t.g}</span>
          <div class="t-diff-inline"><span>Dificuldade</span><div class="t-diff-pips">${dPipsHTML}</div></div>
          ${nextHTML}
        </div>
      </div>
      <div class="t-content">
        <div>
          <p class="challenge-label">${LE[t.lv]} ${LL[t.lv]} · Nível ${t.lv}</p>
          <h2 class="t-title">${t.s}</h2>
          <p class="t-artist">${t.a}</p>
          <p class="t-desc">${t.d}</p>
        </div>
        <div class="t-player">
          <div class="vinyl" id="v${i}"></div>
          <div class="waveform" id="w${i}">${wBars}</div>
          <div class="controls-row">
            <button class="play-btn" id="pb${i}" data-i="${i}">▶</button>
            <a class="sp-btn" href="https://open.spotify.com/track/${t.sid}" target="_blank" rel="noopener">
              <svg class="sp-ico" viewBox="0 0 24 24" fill="#1DB954"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
              Spotify
            </a>
          </div>
          <div class="a-prog">
            <div class="a-track" id="at${i}"><div class="a-fill" id="af${i}"></div></div>
            <div class="a-times"><span id="atm${i}">0:00</span><span id="adu${i}">—</span></div>
          </div>
        </div>
      </div>`;
    container.appendChild(sec);

    
    sec.querySelector(`#at${i}`).addEventListener('click',e=>{
      if(player.duration && currentTrackIdx===i && playerCtx==='exp'){
        const r=e.currentTarget.getBoundingClientRect();
        player.currentTime=((e.clientX-r.left)/r.width)*player.duration;
      }
    });
    
    sec.querySelector(`#pb${i}`).addEventListener('click',()=>{
      autoPlayEnabled=true;
      if(playerCtx==='exp'&&currentTrackIdx===i){ if(!player.paused)player.pause(); else player.play().catch(()=>{}); }
      else { playTrack(i,'exp'); }
    });
  });

 
  const allExpSecs = [
    document.getElementById('exp-intro'),
    document.getElementById('exp-about'),
    document.getElementById('exp-challenges'),
    ...T.map((_,i)=>document.getElementById(`t${i}`))
  ];
  expObserver = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting||entry.intersectionRatio<.6)return;
      const sec=entry.target;
      const di=allExpSecs.indexOf(sec);
      if(di>=0) updateExpDots(di);
      const i=parseInt(sec.dataset.i);
      if(isNaN(i))return;
      
      if(autoPlayEnabled && playerCtx==='exp' && i!==currentTrackIdx) playTrack(i,'exp');
      else if(autoPlayEnabled && playerCtx===null && i!==currentTrackIdx) playTrack(i,'exp');
      
      rpTriggerForTrack(i);
    });
  },{threshold:.6,root:document.getElementById('exp-scroll')});
  allExpSecs.forEach(s=>{ if(s) expObserver.observe(s); });
})();

function updateExpDots(idx) {
  document.querySelectorAll('.exp-sdot').forEach((d,i)=>d.classList.toggle('active',i===idx));
}
function expScrollToSection(idx) {
  const allSecs=[
    document.getElementById('exp-intro'),document.getElementById('exp-about'),document.getElementById('exp-challenges'),
    ...T.map((_,i)=>document.getElementById(`t${i}`))
  ];
  const target=allSecs[Math.max(0,Math.min(allSecs.length-1,idx))];
  if(target){ const sc=document.getElementById('exp-scroll'); sc.scrollTo({top:target.offsetTop,behavior:'smooth'}); }
}
function expScrollToTrack(idx){ autoPlayEnabled=true; expScrollToSection(idx+3); }
function expGoToAbout(){
  const sc=document.getElementById('exp-scroll');
  const ab=document.getElementById('exp-about');
  if(sc&&ab) sc.scrollTo({top:ab.offsetTop,behavior:'smooth'});
}

function setExpPlayingUI(idx,on){
  if(idx<0)return;
  const btn=document.getElementById(`pb${idx}`),v=document.getElementById(`v${idx}`),w=document.getElementById(`w${idx}`);
  if(btn){btn.innerHTML=on?'⏸':'▶';btn.classList.toggle('playing',on);btn.classList.remove('loading');}
  if(v)v.classList.toggle('playing',on);
  if(w)w.classList.toggle('playing',on);
}
function resetExpProgress(idx){
  const f=document.getElementById(`af${idx}`),p=document.getElementById(`p${idx}`),t=document.getElementById(`atm${idx}`);
  if(f)f.style.width='0%';if(p)p.style.width='0%';if(t)t.textContent='0:00';
}


let plBuilt = false;
function buildPlaylist(){
  if(plBuilt)return; plBuilt=true;
  const list=document.getElementById('pl-track-list');
  T.forEach((t,i)=>{
    const c=GC[t.g]||'#1DB954';
    const pips=Array.from({length:5},(_,pi)=>`<div class="pl-tr-pip" style="${pi<t.lv?'background:'+c+'70':''}"></div>`).join('');
    const row=document.createElement('div');
    row.className='pl-track-row'; row.id=`plr${i}`;
    row.innerHTML=`<span class="pl-tr-num">${String(i+1).padStart(2,'0')}</span><span class="pl-tr-icon">▶</span><div class="pl-tr-info"><div class="pl-tr-name">${t.s}</div><div class="pl-tr-artist">${t.a}</div></div><span class="pl-tr-genre" style="border-color:${c}30;color:${c}80">${t.g}</span><div class="pl-tr-lv">${pips}</div>`;
    row.addEventListener('click',()=>plPlay(i));
    list.appendChild(row);
  });
}

function plPlay(idx){
  autoPlayEnabled=true;

  if(playerCtx==='playlist'&&currentTrackIdx===idx){ if(!player.paused)player.pause(); else player.play().catch(()=>{}); return; }

  document.querySelectorAll('.pl-track-row').forEach(r=>r.classList.remove('active'));
  const row=document.getElementById(`plr${idx}`);
  if(row)row.classList.add('active');
 
  document.getElementById('pl-np-track').textContent=T[idx].s;
  document.getElementById('pl-np-artist').textContent=T[idx].a;
  playTrack(idx,'playlist');
}

function plPlayPause(){
  autoPlayEnabled=true;
  if(playerCtx==='playlist'&&currentTrackIdx>=0){
    if(!player.paused)player.pause(); else player.play().catch(()=>{});
  } else if(currentTrackIdx>=0){
    plPlay(currentTrackIdx);
  } else {
    plPlay(0);
  }
}
function plNext(){ plPlay((currentTrackIdx+1)%T.length); }
function plPrev(){ plPlay((currentTrackIdx-1+T.length)%T.length); }
function plSeek(e){
  if(!player.duration)return;
  const r=e.currentTarget.getBoundingClientRect();
  player.currentTime=((e.clientX-r.left)/r.width)*player.duration;
}

function setPlPlayingUI(idx,on){
  const btn=document.getElementById('pl-play-btn');
  if(btn){btn.innerHTML=on?'⏸':'▶';btn.classList.toggle('active-play',on);btn.classList.remove('loading');}
  if(!on) return;
  /* Update now playing */
  document.getElementById('pl-np-track').textContent=T[idx].s;
  document.getElementById('pl-np-artist').textContent=T[idx].a;
}


const ratings = new Array(T.length).fill(null); // null=not rated, false=skipped, 0–5=score
let rpCurrentIdx = -1;
let rpHover = null;

let rpMinimized = false;

function rpShow(idx) {
  if (idx < 0 || idx >= T.length) return;
 
  if (rpMinimized) {
    rpCurrentIdx = idx;
    rpUpdateBubbleColor(idx);
    return;
  }
  rpCurrentIdx = idx;
  const t = T[idx];
  const c = GC[t.g] || '#1DB954';
  const panel = document.getElementById('rating-panel');

  panel.style.setProperty('--rpc', c);
  document.getElementById('rp-track-name').textContent = t.s + ' · ' + t.a;
  document.getElementById('rp-question').textContent = t.q;
  document.getElementById('rp-value').textContent = '';
  document.getElementById('rp-btn-rate').classList.remove('ready');
  rpHover = null;

  
  const starsEl = document.getElementById('rp-stars');
  starsEl.innerHTML = '';
  for (let s = 1; s <= 5; s++) {
    const star = document.createElement('span');
    star.className = 'rp-star';
    star.textContent = '★';
    star.dataset.val = s;
    star.addEventListener('mousemove', e => rpStarHover(e, s, star));
    star.addEventListener('mouseleave', () => rpStarLeave());
    star.addEventListener('click', e => rpStarClick(e, s, star));
    starsEl.appendChild(star);
  }

  rpUpdateProgress();
  panel.classList.add('visible');
}

function rpHide() {
  document.getElementById('rating-panel').classList.remove('visible');
  document.getElementById('rp-bubble').classList.remove('show');
  rpCurrentIdx = -1;
  rpMinimized = false;
}

function rpMinimize() {
  rpMinimized = true;
  document.getElementById('rating-panel').classList.remove('visible');
  const bubble = document.getElementById('rp-bubble');
  bubble.classList.add('show');
  rpUpdateBubbleColor(rpCurrentIdx);
}

function rpUpdateBubbleColor(idx) {
  const bubble = document.getElementById('rp-bubble');
  const c = (idx >= 0 && T[idx]) ? (GC[T[idx].g] || '#1DB954') : '#1DB954';
  bubble.style.setProperty('--rpbc', c);
}

function rpUnminimize() {
  rpMinimized = false;
  document.getElementById('rp-bubble').classList.remove('show');
  
  if (rpCurrentIdx >= 0) {
    const idx = rpCurrentIdx;
    rpCurrentIdx = -1; 
    rpMinimized = false;
    rpShow(idx);
  }
}

function rpFinish() {
  
  ratings.forEach((r, i) => { if (r === null) ratings[i] = false; });
  rpHide();
  setTimeout(() => showReport(), 400);
}

function rpStarHover(e, s, el) {
  const rect = el.getBoundingClientRect();
  const isLeft = (e.clientX - rect.left) < rect.width / 2;
  rpHover = isLeft ? s - 0.5 : s;
  rpRenderStars(rpHover);
  const valEl = document.getElementById('rp-value');
  valEl.textContent = rpHover === 1 ? '1 estrela' : rpHover + ' estrelas';
  document.getElementById('rp-btn-rate').classList.add('ready');
}

function rpStarLeave() {
  const selected = ratings[rpCurrentIdx];
  if (typeof selected === 'number') {
    rpRenderStars(selected);
    document.getElementById('rp-value').textContent = selected === 1 ? '1 estrela' : selected + ' estrelas';
  } else {
    rpRenderStars(0);
    document.getElementById('rp-value').textContent = '';
    if (selected === null) document.getElementById('rp-btn-rate').classList.remove('ready');
  }
  rpHover = null;
}

function rpStarClick(e, s, el) {
  const rect = el.getBoundingClientRect();
  const isLeft = (e.clientX - rect.left) < rect.width / 2;
  const val = isLeft ? s - 0.5 : s;
  ratings[rpCurrentIdx] = val;
  rpRenderStars(val);
  document.getElementById('rp-value').textContent = val === 1 ? '1 estrela' : val + ' estrelas';
  document.getElementById('rp-btn-rate').classList.add('ready');
  rpUpdateProgress();
}

function rpRenderStars(val) {
  document.querySelectorAll('.rp-star').forEach((star, i) => {
    const starNum = i + 1;
    star.classList.remove('full', 'half');
    if (val >= starNum) star.classList.add('full');
    else if (val >= starNum - 0.5) star.classList.add('half');
  });
}

function rpUpdateProgress() {
  const prog = document.getElementById('rp-progress');
  prog.innerHTML = '';
  T.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'rp-pdot';
    if (ratings[i] === false) dot.classList.add('skipped');
    else if (typeof ratings[i] === 'number') dot.classList.add('rated');
    else if (i === rpCurrentIdx) dot.classList.add('current');
    prog.appendChild(dot);
  });
}

function rpSkip() {
  if (rpCurrentIdx >= 0) ratings[rpCurrentIdx] = false;
  rpHide();
  rpCheckShowReportButton();
}

function rpConfirm() {
  if (rpCurrentIdx < 0) return;
  if (typeof ratings[rpCurrentIdx] !== 'number') return;
  rpHide();
  rpCheckShowReportButton();
  
  if (!isTouch) showToast('⭐ Avaliação registrada!', 2000);
}

function rpCheckShowReportButton() {
  const allDone = ratings.every(r => r !== null);
  if (allDone) {
    setTimeout(() => showReport(), 600);
  }
}

function rpTriggerForTrack(idx) {
 
  const page = document.getElementById('page-experience');
  if (!page.classList.contains('active')) return;
  if (ratings[idx] !== null) return; // already rated or skipped
  
  setTimeout(() => {
    if (rpCurrentIdx !== idx) rpShow(idx);
  }, 1800);
}

function showReport() {
  const ratedEntries = T.map((t, i) => ({ t, i, r: ratings[i] })).filter(e => typeof e.r === 'number');

  if (ratedEntries.length === 0) {
    showToast('Avalie pelo menos uma música para ver o relatório!', 4000);
    return;
  }

  const hasLow  = ratedEntries.some(e => e.t.fq === 'low');
  const hasMid  = ratedEntries.some(e => e.t.fq === 'mid');
  const hasHigh = ratedEntries.some(e => e.t.fq === 'high');
  const insufficient = !hasLow || !hasMid || !hasHigh;

  function catAvg(fq) {
    const entries = ratedEntries.filter(e => e.t.fq === fq);
    if (!entries.length) return null;
    return entries.reduce((s, e) => s + e.r, 0) / entries.length;
  }
  const avgLow  = catAvg('low');
  const avgMid  = catAvg('mid');
  const avgHigh = catAvg('high');

  // Overall avg
  const overallAvg = ratedEntries.reduce((s, e) => s + e.r, 0) / ratedEntries.length;
  const overallRound = Math.round(overallAvg * 2) / 2;

  // Title / subtitle
  let title = 'Relatório do Fone';
  let subtitle = '';
  if (insufficient) {
    subtitle = 'Avaliação incompleta — faltaram categorias de frequência.';
  } else if (overallAvg >= 4.5) {
    subtitle = 'Seu fone é excepcional. Parabéns pela escolha!';
  } else if (overallAvg >= 3.5) {
    subtitle = 'Seu fone performa bem acima da média.';
  } else if (overallAvg >= 2.5) {
    subtitle = 'Seu fone é competente, com algumas limitações.';
  } else if (overallAvg >= 1.5) {
    subtitle = 'Seu fone tem limitações perceptíveis na reprodução.';
  } else {
    subtitle = 'Seu fone apresenta limitações significativas.';
  }

  document.getElementById('rep-title').textContent = title;
  document.getElementById('rep-subtitle').textContent = subtitle;
  document.getElementById('rep-rated-count').textContent = ratedEntries.length;

  const bigStars = document.getElementById('rep-big-stars');
  bigStars.innerHTML = renderStarHTML(overallRound, 'report-big-star');
  document.getElementById('rep-score-num').textContent = insufficient ? '—' : overallRound.toFixed(1);

  const cats = [
    { fq:'low',  icon:'🔊', name:'Graves', avg:avgLow  },
    { fq:'mid',  icon:'🎵', name:'Médios', avg:avgMid  },
    { fq:'high', icon:'✨', name:'Agudos', avg:avgHigh },
  ];
  const catsEl = document.getElementById('rep-cats');
  catsEl.innerHTML = '';
  cats.forEach(cat => {
    const div = document.createElement('div');
    div.className = 'report-cat' + (cat.avg === null ? ' insufficient' : '');
    const val = cat.avg !== null ? (Math.round(cat.avg * 2) / 2) : null;
    div.innerHTML = `
      <div class="report-cat-icon">${cat.icon}</div>
      <div class="report-cat-name">${cat.name}</div>
      <div class="report-cat-stars">${cat.avg !== null ? renderStarHTML(val, 'report-cat-star') : '<span style="font-size:.65rem;color:rgba(255,100,100,.5)">não avaliado</span>'}</div>
      <div class="report-cat-val">${cat.avg !== null ? val.toFixed(1) + ' / 5' : '—'}</div>`;
    catsEl.appendChild(div);
  });

  // Insights
  const insightsEl = document.getElementById('rep-insights');
  insightsEl.innerHTML = '';
  const insights = [];

  if (insufficient) {
    insights.push({ icon:'⚠️', text:'<strong>Avaliação insuficiente.</strong> Para um relatório completo, é preciso avaliar pelo menos uma música de graves, uma de médios e uma de agudos.' });
  } else {
    // Strengths
    const strong = cats.filter(c => c.avg !== null && c.avg >= 3.8).map(c => c.name);
    const weak   = cats.filter(c => c.avg !== null && c.avg < 2.5).map(c => c.name);
    if (strong.length) insights.push({ icon:'✅', text:`<strong>Ponto forte:</strong> Seu fone se destaca na reprodução de <strong>${strong.join(' e ')}</strong>. Ótima performance nessa faixa.` });
    if (weak.length)   insights.push({ icon:'⚠️', text:`<strong>Limitação:</strong> O fone apresenta dificuldade com <strong>${weak.join(' e ')}</strong>. Isso é comum em fones de entrada ou com resposta de frequência limitada.` });

    // Specific insights by category avg
    if (avgLow !== null && avgHigh !== null) {
      const diff = avgHigh - avgLow;
      if (diff > 1.5)        insights.push({ icon:'💡', text:'Seu fone tende a ser <strong>brilhante e analítico</strong> — acentuado nos agudos e mais contido nos graves. Ideal para podcasts e músicas acústicas.' });
      else if (diff < -1.5) insights.push({ icon:'💡', text:'Seu fone tem um som <strong>escuro e encorpado</strong> — forte nos graves e mais discreto nos agudos. Ótimo para rap, eletrônica e rock pesado.' });
      else                  insights.push({ icon:'💡', text:'Seu fone apresenta uma resposta de frequência <strong>relativamente equilibrada</strong> entre graves, médios e agudos.' });
    }
    if (avgMid !== null && avgMid >= 4)   insights.push({ icon:'🎤', text:'<strong>Excelente separação de médios</strong> — seu fone reproduz vozes e instrumentos com boa presença e clareza.' });
    if (overallAvg >= 4) insights.push({ icon:'🎧', text:'No geral, seu fone tem <strong>desempenho audiófilo</strong>. Você está ouvindo música como ela foi feita para ser ouvida.' });
    else if (overallAvg < 2) insights.push({ icon:'🔄', text:'Um upgrade de fone pode <strong>transformar completamente</strong> sua experiência musical. Mesmo modelos intermediários fariam grande diferença.' });
  }

  insights.forEach(ins => {
    const div = document.createElement('div');
    div.className = 'report-insight';
    div.innerHTML = `<span class="report-insight-icon">${ins.icon}</span><span class="report-insight-text">${ins.text}</span>`;
    insightsEl.appendChild(div);
  });

  document.getElementById('report-overlay').classList.add('open');
}

function renderStarHTML(val, cls) {
  let html = '';
  for (let s = 1; s <= 5; s++) {
    let state = 'empty';
    if (val >= s) state = 'full';
    else if (val >= s - 0.5) state = 'half';
    html += `<span class="${cls} ${state}">★</span>`;
  }
  return html;
}

function closeReport() {
  document.getElementById('report-overlay').classList.remove('open');
}

function rpShowReportBtn() {
  const ratedCount = ratings.filter(r => typeof r === 'number').length;
  if (ratedCount > 0) showReport();
  else showToast('Avalie pelo menos uma música para ver o relatório!', 4000);
}

const EMAILJS_SERVICE_ID  = 'service_ur8j178';
const EMAILJS_TEMPLATE_ID = 'template_z66fcrn';

async function sendFeedback() {
  const textarea = document.getElementById('ap-fb-text');
  const btn      = document.getElementById('ap-fb-send');
  const success  = document.getElementById('ap-fb-success');
  const msg      = textarea.value.trim();

  if (!msg) { showToast('✏ Escreva algo antes de enviar!', 3000); return; }

  btn.disabled = true;
  btn.textContent = '…';

  /* Verifica se EmailJS foi configurado */
  if (EMAILJS_SERVICE_ID.startsWith('EMAILJS')) {
    /* Fallback: abre cliente de email do usuário */
    window.location.href =
      `mailto:samu.lls@outlook.com?subject=Hertz%20Hunt%20%E2%80%94%20Sugest%C3%A3o&body=${encodeURIComponent(msg)}`;
    textarea.value = '';
    success.classList.add('show');
    btn.disabled = false;
    btn.textContent = '✉ Enviar';
    return;
  }

  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      message:  msg,
      to_email: 'samu.lls@outlook.com',
    });
    textarea.value = '';
    success.classList.add('show');
    showToast('✓ Feedback enviado!', 4000);
  } catch(e) {
    showToast('⚠ Erro ao enviar. Tente de novo.', 4000);
    console.error('EmailJS error:', e);
  } finally {
    btn.disabled = false;
    btn.textContent = '✉ Enviar';
  }
}

['click','touchstart','keydown'].forEach(ev=>{
  document.addEventListener(ev,()=>{autoPlayEnabled=true;},{once:true,passive:true});
});