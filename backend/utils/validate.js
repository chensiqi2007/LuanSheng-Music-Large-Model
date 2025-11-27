export function validate(prompt, duration) {
  if (!prompt?.trim()) return "请输入描述内容";
  if (prompt.length > 200) return "描述过长（≤200 字）";
  if (!duration || duration < 10 || duration > 30) return "时长需在 10–30 秒";
  return null;
}
