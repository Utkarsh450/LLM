const { GoogleGenAI } = require("@google/genai");
const { searchInternetTool } = require("../utils/agent.utils");


const ai = new GoogleGenAI({});

async function generateResponse(content) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: content,
    config:{
      tools: [{functionDeclarations: [searchInternetTool]}],
      systemInstruction: "Use this tool to generate responses for the real time queries"
    }
  });
//   console.log(response.text);
   return {
    text: response.text || "",
    functionCalls: response.functionCalls || []
  };
}
async function generateVector(content) {
    // If content is an array of messages, extract the text
    let textArray;

    if (Array.isArray(content)) {
        textArray = content.map(c => {
            if (c.parts && Array.isArray(c.parts)) {
                return c.parts.map(p => p.text).join("\n");
            }
            return c.text || "";
        });
    } else {
        textArray = [String(content)];
    }

    const response = await ai.models.embedContent({
        model: 'gemini-embedding-001',
        contents: textArray.map(t => ({ text: t })), // ✅ convert to { text: ... }
        config: {
            outputDimensionality: 768
        }
    });

    return response.embeddings[0].values;
}


module.exports = {generateResponse, generateVector};