const express = require('express');
const Posts = require('../data/db');

const route = express.Router();

route.get('/', async (req, res) => {
  try {
    const posts = await Posts.find(req.query);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the posts'
    });
  }
});

route.get('/:id', async (req, res) => {
  try {
    const posts = await Posts.findById(req.params.id);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the post with that ID'
    });
  }
});

route.get('/:id/comments', async (req, res) => {
  try {
    const comments = await Posts.findCommentById(req.params.id);
    res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the comments'
    });
  }
});

route.post('/', async (req, res) => {
  try {
    const post = await Posts.insert(req.body);
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error adding the post'
    });
  }
});

route.post('/:id/comments', async (req, res) => {
  const commentInfo = { ...req.body, post_id: req.params.id };
  try {
    const comment = await Posts.insertComment(commentInfo);
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({
      message: 'Error adding the comment'
    });
  }
});

module.exports = route;
