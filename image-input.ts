import { generateText } from "ai";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import fs from "node:fs";

const image = fs.readFileSync("./disney.webp");

const lmstudio = createOpenAICompatible({
  name: "lmstudio",
  baseURL: "http://localhost:1234/v1",
});

const result = await generateText({
  model: lmstudio("gemma-3-12b"),
  //   model: lmstudio("llava-v1.5-7b"),
  messages: [
    {
      role: "user",
      content: [
        {
          type: "image",
          image: image.toString("base64"),
        },
        {
          type: "text",
          text: "Describe this image. Be concise.",
        },
      ],
    },
  ],
});

console.log(result.text);
