import express from 'express';
import LikesController from './likes.controller.js';

const likesRouter = express.Router();

const likesController = new LikesController();

likesRouter.get('/:postId', likesController.getAllLikes);
likesRouter.get('/toggle/:postId', likesController.toggleLike);

export default likesRouter;