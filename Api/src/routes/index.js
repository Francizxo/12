const {Router } = require ('express');

const router=Router();

router.get('/images', async (req, res) => {
    try {
      const results = await client.query('SELECT * FROM images');
      res.json(results.rows);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
module.exports = router;
