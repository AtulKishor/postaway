import express from 'express';

import BookmarkController from "./bookmark.controller.js";

const bookmarkRouter = express.Router();

const bookmarkController = new BookmarkController();

//Route to get all the bookmarked posts
bookmarkRouter.get('/', bookmarkController.getBookmarkedPosts);

//Route to bookmark a post
bookmarkRouter.post('/:postId', bookmarkController.bookmarkPost);

export default bookmarkRouter;