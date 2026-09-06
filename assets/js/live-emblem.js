(()=>{
  'use strict';
  const VERSION='IDP LIVE EMBLEM v1.0';
  const BASE='assets/live-emblem/webp/';
  const heroLogo=document.querySelector('.hero-logo-wrap');
  if(!heroLogo||heroLogo.dataset.liveEmblemReady==='1') return;

  heroLogo.dataset.liveEmblemReady='1';
  heroLogo.setAttribute('aria-label','국제드론순찰대 LIVE EMBLEM');
  heroLogo.innerHTML=`
    <div class="idp-live-emblem" role="img" aria-label="국제드론순찰대 LIVE EMBLEM">
      <img class="idp-le-layer idp-le-energy" src="${BASE}07_blue-energy.webp" alt="" aria-hidden="true">
      <img class="idp-le-layer idp-le-ornament" src="${BASE}05_ornament.webp" alt="" aria-hidden="true">
      <img class="idp-le-layer idp-le-base" src="${BASE}01_eagle-shield.webp" alt="" aria-hidden="true">
      <img class="idp-le-layer idp-le-globe" src="${BASE}02_globe.webp" alt="" aria-hidden="true">
      <img class="idp-le-layer idp-le-drone" src="${BASE}03_drone.webp" alt="" aria-hidden="true">
      <img class="idp-le-layer idp-le-highlight" src="${BASE}04_gold-highlight.webp" alt="" aria-hidden="true">
      <img class="idp-le-layer idp-le-shimmer" src="${BASE}06_gold-shimmer.webp" alt="" aria-hidden="true">
      <img class="idp-le-layer idp-le-glow" src="${BASE}08_soft-glow.webp" alt="" aria-hidden="true">
      <span class="idp-le-badge">LIVE EMBLEM · v1.0</span>
    </div>`;

  const style=document.createElement('style');
  style.id='idp-live-emblem-style-v1';
  style.textContent=`
    .hero-logo-wrap[data-live-emblem-ready="1"]{width:min(500px,88%);aspect-ratio:1;padding:0;background:none;border-radius:0;box-shadow:none;overflow:visible}
    .hero-logo-wrap[data-live-emblem-ready="1"]>img{display:none!important}
    .idp-live-emblem{position:relative;width:100%;height:100%;isolation:isolate;filter:drop-shadow(0 20px 45px rgba(0,0,0,.38))}
    .idp-le-layer{position:absolute!important;inset:0;width:100%!important;height:100%!important;object-fit:contain!important;border-radius:0!important;pointer-events:none;user-select:none;transform-origin:50% 50%;will-change:transform,opacity,filter}
    .idp-le-energy{z-index:10;opacity:.18;mix-blend-mode:screen;animation:idpLeSpin 30s linear infinite,idpLeEnergyBreath 6s ease-in-out infinite}
    .idp-le-ornament{z-index:20;opacity:.66}
    .idp-le-base{z-index:30;opacity:1}
    .idp-le-globe{z-index:40;opacity:.91;animation:idpLeGlobe 11s ease-in-out infinite}
    .idp-le-drone{z-index:50;opacity:.96;animation:idpLeDrone 5s ease-in-out infinite}
    .idp-le-highlight{z-index:60;opacity:.16;mix-blend-mode:screen;animation:idpLeHighlight 6.5s ease-in-out infinite}
    .idp-le-shimmer{z-index:70;opacity:.09;mix-blend-mode:screen;animation:idpLeShimmer 8s ease-in-out infinite}
    .idp-le-glow{z-index:80;opacity:.12;mix-blend-mode:screen;animation:idpLeGlow 5.5s ease-in-out infinite}
    .idp-le-badge{position:absolute;z-index:90;left:50%;bottom:-18px;transform:translateX(-50%);white-space:nowrap;padding:5px 10px;border:1px solid rgba(216,168,63,.35);border-radius:999px;background:rgba(5,7,11,.72);backdrop-filter:blur(8px);color:#e8c76e;font-size:9px;font-weight:900;letter-spacing:.12em;opacity:.82}
    @keyframes idpLeSpin{to{transform:rotate(360deg)}}
    @keyframes idpLeEnergyBreath{0%,100%{opacity:.12;filter:brightness(.9)}50%{opacity:.23;filter:brightness(1.12)}}
    @keyframes idpLeGlobe{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-3px) rotate(.5deg)}}
    @keyframes idpLeDrone{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-7px) scale(1.006)}}
    @keyframes idpLeHighlight{0%,100%{opacity:.10;filter:brightness(.92)}50%{opacity:.21;filter:brightness(1.18)}}
    @keyframes idpLeShimmer{0%,100%{opacity:.04;transform:translateX(-1.3%) rotate(-.7deg)}50%{opacity:.15;transform:translateX(1.3%) rotate(.7deg)}}
    @keyframes idpLeGlow{0%,100%{opacity:.08;filter:brightness(.94)}50%{opacity:.17;filter:brightness(1.15)}}
    @media(max-width:1080px){.hero-logo-wrap[data-live-emblem-ready="1"]{width:min(470px,82vw)}}
    @media(max-width:700px){.hero-logo-wrap[data-live-emblem-ready="1"]{width:min(390px,90vw)}.idp-le-badge{bottom:-10px;font-size:8px}.idp-le-energy{opacity:.14}.idp-le-glow{opacity:.10}}
    @media(prefers-reduced-motion:reduce){.idp-le-layer{animation:none!important}.idp-le-badge{opacity:.7}}
  `;
  document.head.appendChild(style);
  window.IDP_LIVE_EMBLEM_VERSION=VERSION;
})();
