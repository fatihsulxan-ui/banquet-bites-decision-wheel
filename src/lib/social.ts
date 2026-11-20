// Café social accounts shown in the guest menu's comment sheet.
// Follower counts are entered by hand: the platforms don't share live counts without business API access.
export type SocialAccount = { id: "tiktok" | "instagram" | "facebook"; label: string; url: string; followers: number };

export const socialAccounts: SocialAccount[] = [
  { id: "tiktok", label: "TikTok", url: "https://www.tiktok.com/@ummasbuncoffee", followers: 0 },
  { id: "instagram", label: "Instagram", url: "https://www.instagram.com/ummasbuncoffee", followers: 0 },
  { id: "facebook", label: "Facebook", url: "https://www.facebook.com/ummasbuncoffee", followers: 0 },
];

export function formatFollowers(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return String(n);
}
