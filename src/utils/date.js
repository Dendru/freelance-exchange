export function formatDate(dateStr) {
  if (!dateStr) return "";
  const [year, month, days] = dateStr.split("-");
  return `${days}.${month}.${year}`;
}
