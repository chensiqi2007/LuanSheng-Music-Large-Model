export default function InputBox({ value, setValue }) {
  return (
    <textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="请输入音乐描述，例如：空灵、古风、竹林、神秘感……"
      className="w-full p-4 rounded-xl border bg-white shadow"
    />
  );
}
