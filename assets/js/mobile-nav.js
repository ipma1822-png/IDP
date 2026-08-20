// IDP v3.1 mobile horizontal menu + touch submenus
document.addEventListener('DOMContentLoaded',()=>{
  const strip=document.querySelector('.idp-mobile-strip');
  const wrap=document.querySelector('.mobile-submenu-wrap');
  if(!strip||!wrap) return;

  const buttons=[...strip.querySelectorAll('[data-mobile-menu]')];
  const panels=[...wrap.querySelectorAll('.mobile-submenu')];

  const closeAll=()=>{
    buttons.forEach(btn=>{
      btn.classList.remove('active');
      btn.setAttribute('aria-expanded','false');
    });
    panels.forEach(panel=>panel.classList.remove('active'));
    wrap.classList.remove('open');
  };

  buttons.forEach(btn=>{
    btn.addEventListener('click',e=>{
      e.preventDefault();
      const key=btn.dataset.mobileMenu;
      const panel=wrap.querySelector(`[data-mobile-panel="${key}"]`);
      const wasOpen=btn.classList.contains('active');
      closeAll();
      if(!wasOpen&&panel){
        btn.classList.add('active');
        btn.setAttribute('aria-expanded','true');
        panel.classList.add('active');
        wrap.classList.add('open');
      }
    });
  });

  panels.forEach(panel=>panel.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeAll)));
  document.addEventListener('keydown',e=>{if(e.key==='Escape') closeAll()});
});
