import BookmarkModel from "./bookmark.model.js";

export default class BookmarkController {
  //getAllBookmarked posts
  getBookmarkedPosts(req, res) {
    const userId = req.userId;
    const result = BookmarkModel.getBookmarkedPosts(userId);

    if (!result.success) return res.status(404).send(result.msg);
    else {
      return res.status(200).send(result.msg);
    }
  }

  //bookmark a post, if already bookmarked, unbookmark it.
  bookmarkPost(req, res) {
    const userId = req.userId;
    const postId = req.params.postId;

    const result = BookmarkModel.bookmarkPost(userId, postId);
    if (!result.success) return res.status(404).send(result.msg);
    else {
      return res.status(201).send(result.msg);
    }
  }
}
