-- IDP 게시판 v1.1 연결 권한 보완
-- 기존 IDP-BOARD-v1.sql 실행 후 1회만 실행하면 됩니다.

grant usage on schema public to anon, authenticated;

grant select on table public.idp_board_posts to anon, authenticated;
grant insert, update, delete on table public.idp_board_posts to authenticated;

grant select on table public.idp_board_comments to anon, authenticated;
grant insert, update, delete on table public.idp_board_comments to authenticated;

grant select on table public.idp_board_reactions to anon, authenticated;
grant insert, delete on table public.idp_board_reactions to authenticated;

grant execute on function public.idp_is_admin() to anon, authenticated;
grant execute on function public.idp_increment_post_view(uuid) to anon, authenticated;

-- 연결 확인: 아래 결과가 3이면 정상
select count(*) as public_notice_count
from public.idp_board_posts
where board_type='notice' and is_published=true;
