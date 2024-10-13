const { analyzeBusinessData } = require("../services/llmService");

exports.getBusinessInsights = async (req, res) => {
  const { businessData } = req.body;
  try {
    const insights = await analyzeBusinessData(businessData);
    res.status(200).json({ insights });
  } catch (error) {
    res.status(500).json({ message: "Error generating insights" });
  }
};
