const menuToggle=document.querySelector('.menu-toggle');
const mainNav=document.querySelector('.main-nav');
const toTop=document.querySelector('.to-top');
const year=document.querySelector('#year');
const searchBtn=document.querySelector('#demoSearchBtn');
const searchResult=document.querySelector('#searchResult');

if(year) year.textContent=new Date().getFullYear();

if(menuToggle&&mainNav){
  menuToggle.addEventListener('click',()=>{
    const open=mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded',String(open));
  });
  mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded','false');
  }));
}

window.addEventListener('scroll',()=>{
  if(toTop) toTop.classList.toggle('show',window.scrollY>600);
});

toTop?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

searchBtn?.addEventListener('click',()=>{
  const type=document.querySelector('#searchType')?.value;
  const keyword=document.querySelector('#searchKeyword')?.value.trim();
  const labels={
    member:'대원·회원',
    officer:'임원',
    instructor:'지도자',
    branch:'지부',
    certificate:'자격증'
  };

  if(!keyword){
    searchResult.innerHTML='<strong>조회 정보를 입력해 주세요.</strong><br><span>이름 또는 등록번호를 입력하면 결과가 표시됩니다.</span>';
    searchResult.classList.add('show');
    return;
  }

  searchResult.innerHTML=`<strong>${labels[type]||'통합'} 조회 준비 완료</strong><br><span>입력값: ${escapeHtml(keyword)}</span><br><small>Google Apps Script 연결 후 실제 데이터가 표시됩니다.</small>`;
  searchResult.classList.add('show');
});

function escapeHtml(value){
  return value.replace(/[&<>"']/g,char=>({
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&#039;'
  }[char]));
}
