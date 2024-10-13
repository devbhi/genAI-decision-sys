const axios = require("axios");

async function retrieveCompanyData(query) {
  try {
    const response = await axios.post(
      process.env.PINECONE_API_URL,
      {
        topK: 5,
        vector: query.vector,
        includeMetadata: true,
      },
      {
        headers: {
          "Api-Key": process.env.PINECONE_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.matches.map((match) => match.metadata);
  } catch (error) {
    console.error("Error retrieving company data:", error);
    throw error;
  }
}

module.exports = { retrieveCompanyData };
