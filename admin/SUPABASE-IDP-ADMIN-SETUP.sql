-- IDP 대원가입 관리자용 RLS 정책
-- 관리자 이메일 적용 완료: jeonseongkweon@gmail.com

-- 1) 신청자 목록 조회 권한
drop policy if exists "IDP admin read applications" on public.idp_member_applications;
create policy "IDP admin read applications"
on public.idp_member_applications
for select
to authenticated
using ((auth.jwt() ->> 'email') = 'jeonseongkweon@gmail.com');

-- 2) 승인/보류/반려 및 대원번호 수정 권한
drop policy if exists "IDP admin update applications" on public.idp_member_applications;
create policy "IDP admin update applications"
on public.idp_member_applications
for update
to authenticated
using ((auth.jwt() ->> 'email') = 'jeonseongkweon@gmail.com')
with check ((auth.jwt() ->> 'email') = 'jeonseongkweon@gmail.com');

-- 3) 비공개 신청 사진을 관리자만 조회할 수 있는 권한
drop policy if exists "IDP admin read member photos" on storage.objects;
create policy "IDP admin read member photos"
on storage.objects
for select
to authenticated
using (
  bucket_id = 'idp-member-photos'
  and (auth.jwt() ->> 'email') = 'jeonseongkweon@gmail.com'
);
