-- IDP 대원가입 관리자용 RLS 정책
-- 중요: 아래 ADMIN_EMAIL 값을 실제 Supabase Auth 관리자 이메일로 바꾸세요.
-- 예: jeonseongkweon@gmail.com

-- 1) 신청자 목록 조회 권한
create policy "IDP admin read applications"
on public.idp_member_applications
for select
to authenticated
using ((auth.jwt() ->> 'email') = 'ADMIN_EMAIL');

-- 2) 승인/보류/반려 및 대원번호 수정 권한
create policy "IDP admin update applications"
on public.idp_member_applications
for update
to authenticated
using ((auth.jwt() ->> 'email') = 'ADMIN_EMAIL')
with check ((auth.jwt() ->> 'email') = 'ADMIN_EMAIL');

-- 3) 비공개 신청 사진을 관리자만 조회할 수 있는 권한
create policy "IDP admin read member photos"
on storage.objects
for select
to authenticated
using (
  bucket_id = 'idp-member-photos'
  and (auth.jwt() ->> 'email') = 'ADMIN_EMAIL'
);
