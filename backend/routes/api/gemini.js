const express = require('express');
const { getGeminiResponse } = require('../../controller/gemini');
const router = express.Router();

router.post('/', getGeminiResponse);

module.exports = router;
