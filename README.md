# LuanSheng-Music-Large-Model
鸾笙音乐生成大模型

# 鸾笙大模型 · LuanSheng Music LLM
支持 ChatGPT / Gemini / 自定义模型的音乐生成前后端项目。

## ✨ 功能
- 输入文本 → 生成 10–30 秒音乐  
- 三种可接入模型：
  - OpenAI ChatGPT 音频生成
  - Google Gemini 音乐生成
  - 自定义大模型（HTTP）

---

## 🚀 运行前端
```bash
cd frontend
npm install
npm run dev
```

## 🚀 运行后端
```
cd backend
npm install
npm start
```

## 🔧 配置 `.env`
```
OPENAI_API_KEY=your-key
GEMINI_API_KEY=your-key
CUSTOM_MODEL_ENDPOINT=https://your-model/api
```

后端会自动根据配置启用对应模型。
