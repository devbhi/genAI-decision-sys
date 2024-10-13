const axios = require("axios");

async function analyzeBusinessData(data) {
  try {
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/gpt2",
      { inputs: "Analyze the quarterly sales data of XYZ company" },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in LLM analysis:", error);
    throw error;
  }
}

module.exports = { analyzeBusinessData };
