/** JWT payload from JwtAuthGuard. Refreshed access tokens may omit profile claims. */
export interface AuthUser {
  sub: string;
  /** Alias of sub for callers that expect id. */
  id: string;
  vk_id?: number;
  username?: string;
  display_name?: string;
  avatar_url?: string | null;
  is_admin?: boolean;
  needs_username?: boolean;
}
