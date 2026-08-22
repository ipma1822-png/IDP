(function(){
  const VERSION='IDP v3.3.0 · 20 LANGUAGES GLOBAL ACCESS · 2026.08.23';
  document.addEventListener('DOMContentLoaded',function(){
    if(document.querySelector('.idp-version-bar')) return;
    const bar=document.createElement('div');
    bar.className='idp-version-bar';
    bar.innerHTML='<span>INTERNATIONAL DRONE PATROL</span><strong>'+VERSION+'</strong>';
    document.body.appendChild(bar);
  });
})();