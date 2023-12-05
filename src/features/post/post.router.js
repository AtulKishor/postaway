import express from 'express';

import PostController from './post.controller.js';
import upload from '../../middlewares/fileUpload.middleware.js';

const postRouter = express.Router();

const postController = new PostController();

//Get all the posts
postRouter.get('/all', postController.getALLPosts);

//Get posts based on user credentials
postRouter.get('/', postController.getUserPosts);

//Get specific post by id
postRouter.get('/:id', postController.getPostById);

//Create a new post
postRouter.post('/',upload.single('imageUrl'), postController.createPost);

//Delete a specific post by id
postRouter.delete('/:id', postController.deletePost);

//Update a post by id
postRouter.put('/:id',upload.single('imageUrl'), postController.updatePost);

//Get filtered posts based on the caption content
postRouter.post('/filter', postController.filterPost);

//Get sorted posts in ascending order of date of posting
postRouter.get('/custom/sort', postController.getSortedPosts);

export default postRouter;