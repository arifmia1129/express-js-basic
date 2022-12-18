const router = require('express').Router();
const postController = require('./postController');

router.get('/', postController.getAllPost)

router.get('/:postId', postController.getSinglePost)

router.post('/', postController.createPost)
router.put('/:postId', postController.updatePost)
router.delete('/:postId', postController.deletePost)

module.exports = router;