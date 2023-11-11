const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const payload = await Tag.findAll();
    //debugging
    console.log(payload);
    res.status(200).json({ status: 'success', payload })
  } catch (err) {
    res.status(500).json({ status: 'error', sendback: err.message })
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const payload = await Model.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: "my_tags" }]
    });
    res.status(200).json({ status: 'success', payload })
  } catch (err) {
    res.status(500).json({ status: 'error', sendback: err.message })
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const payload = await Tag.create(req.body);
    res.status(200).json({ status: 'success', payload })
  } catch (err) {
    res.status(500).json({ status: 'error', sendback: err.message })
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const payload = await Tag.create(req.body);
    res.status(200).json({ status: 'success', payload })
  } catch (err) {
    res.status(500).json({ status: 'error', sendback: err.message })
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const payload = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (payload === 0) {
      res.status(200).json({ status: 'Tag is listed at zero' })
    } else {
      res.status(200).json({ status: 'success' })
    }
  } catch (err) {
    res.status(500).json({ status: 'error', sendback: err.message })
  }
});

module.exports = router;
