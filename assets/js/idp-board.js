
const IDP_URL='https://ojxarsfaewehwjidwgac.supabase.co';
const IDP_KEY='sb_publishable_ZoAZrV5rDmYDLxhXlnEXCw_lPqJfin0';
const idpdb=window.supabase.createClient(IDP_URL,IDP_KEY);
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fmt=d=>d?new Date(d).toLocaleDateString('ko-KR'):'';
async function session(){return (await idpdb.auth.getSession()).data.session}
async function otp(email,redirect){return idpdb.auth.signInWithOtp({email,options:{emailRedirectTo:redirect,shouldCreateUser:true}})}
async function socialLogin(provider,redirect){return idpdb.auth.signInWithOAuth({provider,options:{redirectTo:redirect}})}
async function logout(){await idpdb.auth.signOut();location.reload()}
