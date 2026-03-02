import { generateText } from "ai";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

const lmstudio = createOpenAICompatible({
  name: "lmstudio",
  baseURL: "http://localhost:1234/v1",
});

const result = await generateText({
  model: lmstudio("gemma-3-12b"),
  system:
    // "You are a helpful assistant that answers questions concisely and in markdown format. IMPORTANT: ALWAYS be concise.",
    "Address the user by name.",

  //   prompt: "Who is the most powerful super hero and why? Be verbose.",
  messages: [
    { role: "user", content: "Hi, my name is Daniel" },
    { role: "assistant", content: "Hello Daniel, how can I help you?" },
    { role: "user", content: "Who is the most powerful super hero and why?" },
  ],
});

console.log(result.text);
