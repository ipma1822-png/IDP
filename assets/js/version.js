(function(){
  const VERSION='IDP v4.3.0 · YOUTH LEVEL & BADGE · 2026.08.28';
  document.addEventListener('DOMContentLoaded',function(){
    if(document.querySelector('.idp-version-bar')) return;
    const bar=document.createElement('div');
    bar.className='idp-version-bar';
    bar.innerHTML='<span>INTERNATIONAL DRONE PATROL</span><strong>'+VERSION+'</strong>';
    document.body.appendChild(bar);
  });
})();
