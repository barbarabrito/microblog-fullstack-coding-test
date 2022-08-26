const Post = require('../model/Post');

module.exports = class PostController {

    static async createPost(req, res) {

        let { text } = req.body;
        if (!text) {
            return res.status(409).json({ message: 'Text is required' });
        }

        const post = new Post({
            text: req.body.text
        });

        try {
            await post.save();
            res.status(201).json(post);
        } catch (error) {
            res.status(400).json(error);
        }

    }

    static async getAllPosts(req, res) {
        const posts = await Post.find().sort();

        res.status(200).json({
            posts,
        })

    }

    static async removePost(req, res) {
        const id = req.params.id;

        try {
            await Post.findByIdAndRemove(id);
            res.status(200).json("removed")
        } catch (error) {
            res.status(400).json(error);
        }
    }

    static async getPostById(req, res) {
        const id = req.params.id

        const post = await Post.findById(id)

        if (!post) {

            res.status(404).json("Not Found")
            return
        }

        res.status(200).json({ post })
    }
}