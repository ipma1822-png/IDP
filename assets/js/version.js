(function(){
  const VERSION='IDP v3.4.2 · SIMPLE JOIN + KAKAO LOGIN · 2026.08.25';
  document.addEventListener('DOMContentLoaded',function(){
    if(document.querySelector('.idp-version-bar')) return;
    const bar=document.createElement('div');
    bar.className='idp-version-bar';
    bar.innerHTML='<span>INTERNATIONAL DRONE PATROL</span><strong>'+VERSION+'</strong>';
    document.body.appendChild(bar);
  });
})();