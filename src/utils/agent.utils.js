const { tavily } = require("@tavily/core");
const { Type } = require("@google/genai");
const tvly = tavily({
    apiKey: process.env.TAVILY_API_KEY
})
const searchInternetTool = {
    name: "searchInternet",
    description: "You have to use this tool in order to fetch relevant or current information",
    parameters: {
        type: Type.OBJECT,
        properties: {
            query: {
                type: Type.STRING,
                description: "The search query to find relevant information"
            }
        },
        required: ["query"]
    }
};


const tools = {
    "searchInternet": async ({ query }) => {
        const response = await tvly.search(query)
        return response.results;
    }
}

module.exports = {searchInternetTool, tools}