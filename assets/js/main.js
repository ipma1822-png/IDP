document.getElementById('year').textContent=new Date().getFullYear();
const btn=document.querySelector('.menu-btn');
const nav=document.querySelector('.header nav');
btn.addEventListener('click',()=>nav.classList.toggle('open'));
document.getElementById('searchBtn').addEventListener('click',()=>{
  const v=document.getElementById('keyword').value.trim();
  const r=document.getElementById('result');
  r.style.display='block';
  r.innerHTML=v?`<b>조회 준비 완료</b><br>${v}<br><small>Google Apps Script 연결 후 실제 결과가 표시됩니다.</small>`:'이름 또는 등록번호를 입력해 주세요.';
});