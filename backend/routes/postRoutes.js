
const express = require("express");

const {getAllPosts, createPost, updatePost, deletePost} = require("../controllers/postControllers");

const router = express.Router();

router.route("/").get(getAllPosts).post(createPost);

router.route("/:id").delete(deletePost);

router.route("/:name").put(updatePost);

module.exports = router;