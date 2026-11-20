// Café social accounts shown in the guest menu's comment sheet. Links and follower
// counts are typed by the owner in the dashboard; platforms don't share live counts.
export type SocialId = "tiktok" | "instagram" | "facebook";
export type SocialAccount = { id: SocialId; url: string; followers: number | null; position: number };
export const socialLabels: Record<SocialId, string> = { tiktok: "TikTok", instagram: "Instagram", facebook: "Facebook" };

export function formatFollowers(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return String(n);
}
