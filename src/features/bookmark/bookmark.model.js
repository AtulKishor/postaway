import PostModel from "../post/post.model.js";

export default class BookmarkModel {
  constructor(userId, postId) {
    this.id = Date.now();
    this.userId = userId;
    this.postId = postId;
  }

  static getBookmarkedPosts(userId) {
    let bookMarkedPosts = bookmark.filter((b) => b.userId == userId);

    if (bookMarkedPosts.length == 0)
      return {
        success: false,
        msg: `Current ${userId} has not bookmarked any post!`,
      };
    else {
      let posts = [];
      bookMarkedPosts.forEach((b) => {
        posts.push(PostModel.getPostById(b.postId));
      });
      return { success: true, msg: bookMarkedPosts };
    }
  }

  //bookmark a post, if already bookmarked, unbookmark it.
  static bookmarkPost(userId, postId) {
    //get the post from the postmode
    const post = PostModel.getPostById(postId);

    //No posts found with the given postId
    if (!post.success) return post;

    //Check if the post was already bookmarked, if so unbookmark it
    const checkBookmark = bookmark.findIndex(
      (b) => b.postId == postId && b.userId == userId
    );

    if (checkBookmark != -1) {
      //remove from bookmark and return
      bookmark.splice(checkBookmark, 1);

      return {
        success: true,
        msg: `Post with ID ${postId} has been successfully unbookmarked!`,
      };
    }

    //Push the postId into the bookmark array
    const newBookmark = new BookmarkModel(userId, postId);
    bookmark.push(newBookmark);

    return {
      success: true,
      msg: `Bookmark successful for post with id: ${postId}`,
    };
  }
}

let bookmark = [];
