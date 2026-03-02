import { generateText } from "ai";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

const lmstudio = createOpenAICompatible({
  name: "lmstudio",
  baseURL: "http://localhost:1234/v1",
});

const result = await generateText({
  model: lmstudio("gemma-3-12b"),
  prompt: "Who is the most powerful super hero and why? Be concise.",
});

console.log(result.text);
