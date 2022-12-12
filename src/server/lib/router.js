const express = require('express');
const router = express.Router();
const MOCK_DATA = require('./mock-data');

router.get('/users', async (_req, res) => {
  setTimeout(() => {
    res.status(200).json(MOCK_DATA);
  }, 500);
});

module.exports = router;
