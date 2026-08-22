(function(){
  const LANGS = [{"code": "ko", "country": "KR", "name": "한국어", "flag": "kr"}, {"code": "en", "country": "US", "name": "English", "flag": "us"}, {"code": "zh-CN", "country": "CN", "name": "中文", "flag": "cn"}, {"code": "ja", "country": "JP", "name": "日本語", "flag": "jp"}, {"code": "es", "country": "ES", "name": "Español", "flag": "es"}, {"code": "fr", "country": "FR", "name": "Français", "flag": "fr"}, {"code": "de", "country": "DE", "name": "Deutsch", "flag": "de"}, {"code": "pt", "country": "BR", "name": "Português", "flag": "br"}, {"code": "it", "country": "IT", "name": "Italiano", "flag": "it"}, {"code": "ru", "country": "RU", "name": "Русский", "flag": "ru"}, {"code": "mn", "country": "MN", "name": "Монгол", "flag": "mn"}, {"code": "vi", "country": "VN", "name": "Tiếng Việt", "flag": "vn"}, {"code": "th", "country": "TH", "name": "ไทย", "flag": "th"}, {"code": "id", "country": "ID", "name": "Bahasa Indonesia", "flag": "id"}, {"code": "ms", "country": "MY", "name": "Bahasa Melayu", "flag": "my"}, {"code": "tl", "country": "PH", "name": "Filipino", "flag": "ph"}, {"code": "hi", "country": "IN", "name": "हिन्दी", "flag": "in"}, {"code": "ar", "country": "SA", "name": "العربية", "flag": "sa"}, {"code": "tr", "country": "TR", "name": "Türkçe", "flag": "tr"}, {"code": "ne", "country": "NP", "name": "नेपाली", "flag": "np"}];
  const SCRIPT = document.currentScript;
  const base = SCRIPT ? new URL('../', SCRIPT.src) : new URL('assets/', location.href);
  const flagsBase = new URL('flags/', base).href;
  const KEY='idpPreferredLanguage';

  function setCookie(name,value){
    const exp='; expires=Fri, 31 Dec 2038 23:59:59 GMT; path=/; SameSite=Lax';
    document.cookie=name+'='+value+exp;
    const host=location.hostname;
    if(host.split('.').length>2){
      const root='.'+host.split('.').slice(-2).join('.');
      document.cookie=name+'='+value+exp+'; domain='+root;
    }
  }
  function clearCookie(name){
    document.cookie=name+'=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    const host=location.hostname;
    if(host.split('.').length>2){
      const root='.'+host.split('.').slice(-2).join('.');
      document.cookie=name+'=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain='+root;
    }
  }
  function applyLang(code){
    localStorage.setItem(KEY,code);
    const u=new URL(location.href); u.searchParams.set('lang',code==='ko'?'ko':code);
    history.replaceState(null,'',u);
    if(code==='ko'){
      clearCookie('googtrans');
    }else{
      setCookie('googtrans','/ko/'+code);
    }
    location.reload();
  }
  function googleTranslateElementInit(){
    if(!window.google || !google.translate) return;
    new google.translate.TranslateElement({pageLanguage:'ko',includedLanguages:LANGS.map(x=>x.code).filter(x=>x!=='ko').join(','),autoDisplay:false},'idp_google_translate_element');
  }
  window.googleTranslateElementInit=googleTranslateElementInit;

  function injectTranslate(){
    if(document.getElementById('idp-google-translate-script')) return;
    const holder=document.createElement('div');holder.id='idp_google_translate_element';holder.style.display='none';document.body.appendChild(holder);
    const s=document.createElement('script');s.id='idp-google-translate-script';s.src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';s.async=true;document.head.appendChild(s);
  }

  function buildUI(){
    if(document.querySelector('.idp-lang-btn')) return;
    const style=document.createElement('style');
    style.textContent=`.idp-lang-btn{display:inline-flex;align-items:center;gap:8px;min-height:42px;padding:0 14px;border:1px solid rgba(216,168,63,.55);border-radius:999px;background:rgba(8,13,20,.82);color:#f4d57f;font-weight:900;cursor:pointer;white-space:nowrap}.idp-lang-modal{position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.72);backdrop-filter:blur(7px);display:none;place-items:center;padding:20px}.idp-lang-modal.open{display:grid}.idp-lang-panel{width:min(920px,100%);max-height:min(760px,90vh);overflow:auto;background:#0c121b;border:1px solid rgba(216,168,63,.45);border-radius:22px;padding:26px;box-shadow:0 30px 90px rgba(0,0,0,.55)}.idp-lang-head{display:flex;align-items:start;justify-content:space-between;gap:16px;margin-bottom:20px}.idp-lang-head small{display:block;color:#d8a83f;font-weight:900;letter-spacing:.15em}.idp-lang-head h2{margin:5px 0 0;color:#fff;font-size:clamp(24px,4vw,38px)}.idp-lang-close{border:0;background:none;color:#fff;font-size:34px;cursor:pointer;line-height:1}.idp-lang-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.idp-lang-choice{display:flex;align-items:center;gap:12px;text-align:left;background:#121a25;border:1px solid rgba(255,255,255,.11);border-radius:14px;padding:12px;color:#fff;cursor:pointer}.idp-lang-choice:hover{border-color:#d8a83f;background:#172232}.idp-lang-choice img{width:44px;height:30px;object-fit:cover;border-radius:4px;box-shadow:0 0 0 1px rgba(255,255,255,.15)}.idp-lang-choice strong{display:block;font-size:14px}.idp-lang-choice span{display:block;font-size:11px;color:#94a0af}.goog-te-banner-frame.skiptranslate,.goog-te-gadget-icon{display:none!important}body{top:0!important}@media(max-width:760px){.idp-lang-grid{grid-template-columns:repeat(2,1fr)}.idp-lang-panel{padding:18px}.idp-lang-btn{padding:0 11px;font-size:12px}}`;
    document.head.appendChild(style);

    const btn=document.createElement('button');btn.type='button';btn.className='idp-lang-btn';btn.innerHTML='🌐 20 Languages';btn.setAttribute('aria-label','언어 선택');
    const target=document.querySelector('.top-cta') || document.querySelector('.menu-toggle') || document.querySelector('.brand');
    if(target && target.parentNode){target.parentNode.insertBefore(btn,target);}else{btn.style.position='fixed';btn.style.right='18px';btn.style.top='18px';btn.style.zIndex='9999';document.body.appendChild(btn)}

    const modal=document.createElement('div');modal.className='idp-lang-modal';
    modal.innerHTML=`<div class="idp-lang-panel" role="dialog" aria-modal="true" aria-label="언어 선택"><div class="idp-lang-head"><div><small>20 LANGUAGES · ONE GLOBAL NETWORK</small><h2>언어를 선택하세요</h2><p style="margin:6px 0 0;color:#9eabb9">주요 홈페이지 내용을 선택한 언어로 자동 번역합니다. 교육 영상 자막은 추후 추가됩니다.</p></div><button class="idp-lang-close" type="button" aria-label="닫기">×</button></div><div class="idp-lang-grid"></div></div>`;
    document.body.appendChild(modal);
    const grid=modal.querySelector('.idp-lang-grid');
    LANGS.forEach(l=>{const b=document.createElement('button');b.type='button';b.className='idp-lang-choice';b.innerHTML=`<img src="${flagsBase+l.flag}.svg" alt="${l.country} flag"><div><strong>${l.name}</strong><span>${l.country}</span></div>`;b.onclick=()=>applyLang(l.code);grid.appendChild(b)});
    btn.onclick=()=>modal.classList.add('open');modal.querySelector('.idp-lang-close').onclick=()=>modal.classList.remove('open');modal.onclick=e=>{if(e.target===modal)modal.classList.remove('open')};
  }

  function inheritLangFromURL(){
    const q=new URLSearchParams(location.search).get('lang');
    if(q && LANGS.some(x=>x.code===q)){localStorage.setItem(KEY,q);if(q!=='ko')setCookie('googtrans','/ko/'+q);}
  }
  document.addEventListener('DOMContentLoaded',()=>{inheritLangFromURL();buildUI();injectTranslate();});
})();