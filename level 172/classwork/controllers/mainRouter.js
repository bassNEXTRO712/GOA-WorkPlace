const express = require('express');
const { getAllPosts, findPostById, createPost, updatePostById, deletePostbyId } = require('./allroutes');

const postRouter = express.Router();

postRouter.route('/')
    .get(getAllPosts)
    .post(createPost);

postRouter.route('/:id')
    .get(findPostById)
    .patch(updatePostById)
    .delete(deletePostbyId);

module.exports = postRouter;
