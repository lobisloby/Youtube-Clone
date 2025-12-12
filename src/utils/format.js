export function formatViews(num) {
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M'
  if (num >= 1_000) return Math.floor(num / 1000) + 'K'
  return num
}


