

let asyncHandler = require("express-async-handler");
let Post = require("../models/postModel");
//@desc         Get All Posts
//@route        GET   /api/posts/
//@access       Public

exports.getAllPosts = asyncHandler(async (req, res, next) => {

    let posts = await Post.find();

    res.status(200).json(posts);
    
});

//@desc        Create a post
//@route       POST    /api/posts/
//@access      Public

exports.createPost = asyncHandler(async (req, res, next) => {
    
    let {text, amount} = req.body;

    if (!text || !amount) {
        res.status(400)
        throw new Error("Please fill enough information!")
    }

    let post = await Post.create({
        text: text,
        amount: amount 
    });

    res.status(201).json(post);
    
});

//@desc        Update a post
//@route       PUT    /api/posts/
//@desc        Private

exports.updatePost = asyncHandler(async (req, res, next) => {

    let post = await Post.findOne({text: req.params.name});

    if (!post) {
        res.status(404)
        throw new Error("Post not found!")
    };

   
    let updatedPost = await Post.findOneAndUpdate({text: req.params.name}, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json(updatedPost);
});

//@desc         Delete a post
//@route        Delete /api/posts/:id
//@desc         Private

exports.deletePost = asyncHandler(async (req, res, next) => {

    let post = await Post.findById(req.params.id);

    if (!post) {
        res.status(404)
        throw new Error("Post not found!")
    };

    let deletePost = await Post.findByIdAndRemove(req.params.id);

    res.status(200).json(deletePost);

});









