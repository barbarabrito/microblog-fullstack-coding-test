const router = require("express").Router();

const PostController = require('../controllers/PostController');

router.post('/send', PostController.createPost);
router.get('/get/all', PostController.getAllPosts);

module.exports = router;