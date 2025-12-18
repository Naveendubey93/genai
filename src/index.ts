import OpenAI from "openai";
// const client = new OpenAI();
import "dotenv/config";
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});
async function main() {
console.log("process.env.OPENAI_API_KEY",process.env.OPENAI_API_KEY);
const response = await client.responses.create({
  // model: "gpt-5.2",
  model: "gpt-4.1-mini",

  input: "Write a short bedtime story about a unicorn.",
});

const responseN = await client.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages:[{
    role: 'user',
    content: "How tall is mount Everest?"
  }]
})

console.log(response.output_text);

console.log(responseN.choices[0]?.message.content);
}

main();
