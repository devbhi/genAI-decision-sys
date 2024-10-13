const express = require("express");
const router = express.Router();
const decisionController = require("../controllers/decisionController");

router.post("/insights", decisionController.getBusinessInsights);

module.exports = router;
