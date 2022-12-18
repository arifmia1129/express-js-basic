const router = require('express').Router();

router.get('/', (req, res) => {
    const { category, filter, page } = req.query;
    console.log(category, filter, page);
    res.send('Get all post')
})

router.get('/:postId', (req, res) => {
    res.send('Your searching post id is:' + req.params.postId);
})

router.post('/', (req, res) => {
    res.send('Create a new post')
})
router.put('/:postId', (req, res) => {
    res.send('Update a existing post' + req.params.postId)
})
router.delete('/:postId', (req, res) => {
    res.send('Delete a existing post' + req.params.postId)
})

module.exports = router;