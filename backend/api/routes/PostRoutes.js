const router = require("express").Router();

const PostController = require('../controllers/PostController');

router.post('/send', PostController.createPost);
router.get('/get/all', PostController.getAllPosts);
router.delete('/:id', PostController.removePost);
router.get('/:id', PostController.getPostById);
router.put('/:id', PostController.updatePost);

module.exports = router;