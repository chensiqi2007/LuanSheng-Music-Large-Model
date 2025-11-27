export default function DurationSelector({ value, setValue }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-900">选择生成时长（10–30 秒）</span>
      <input
        type="range"
        min="10"
        max="30"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full"
      />
      <span>{value} 秒</span>
    </div>
  );
}
