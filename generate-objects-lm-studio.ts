import { generateText } from "ai";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { z } from "zod";

const lmstudio = createOpenAICompatible({
  name: "lmstudio",
  baseURL: "http://localhost:1234/v1",
});

const schema = z.object({
  name: z.string(),
  superpowers: z.array(z.string()),
  weaknesses: z.array(z.string()),
  backstory: z.string(),
  isHero: z.boolean(),
  isVillain: z.boolean(),
});

const result = await generateText({
  model: lmstudio("gemma-3-12b"),
  prompt: `Who is the most powerful comic book character?
Respond with a JSON object with the following structure:
{
  "name": "character name",
  "superpowers": ["list", "of", "powers"],
  "weaknesses": ["list", "of", "weaknesses"],
  "backstory": "brief backstory",
  "isHero": true or false,
  "isVillain": true or false
}`,
});

console.log(result.text);

// Parse and validate the JSON response
try {
  const jsonMatch = result.text.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    const parsed = JSON.parse(jsonMatch[0]);
    const validated = schema.parse(parsed);
    console.log("\nParsed object:");
    console.log(validated);
    console.log("\nCharacter name:", validated);
  }
} catch (error) {
  console.error("Failed to parse JSON:", error);
}
