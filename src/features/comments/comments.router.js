import express from 'express';
import CommentsController from './comments.controller.js';

const commentsRouter = express.Router();
const commentsController = new CommentsController();

// GET /:id: Retrieve all comments for a specific post
commentsRouter.get('/:postId', commentsController.getAllComments);

// POST /:id: Add a new comment to a specific post
commentsRouter.post('/:postId', commentsController.addComment);

// DELETE /:id: Delete a specific comment by ID
commentsRouter.delete('/:commentId', commentsController.deleteComment);

// PUT /:id: Update a specific comment by ID
commentsRouter.put('/:commentId', commentsController.updateComment);

export default commentsRouter;

