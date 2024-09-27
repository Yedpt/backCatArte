const express = require('express');

const router = express.Router();


router.delete('/users/:id', async (req, res) => {
  const userId = req.params.id;

  
});

module.exports = router;
