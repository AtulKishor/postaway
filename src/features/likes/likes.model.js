import PostModel from "../post/post.model.js";

export default class LikesModel {
  constructor(userId, postId, liked) {
    this.id = Date.now();
    this.userId = userId;
    this.postId = postId;
    this.liked = liked ? liked : false;
  }

  static getAllLikes(postId) {
    //Check if post is there in all posts or not
    const postExists = PostModel.getALLPosts();
    if (!postExists.success)
      return {
        success: false,
        msg: "No posts available, first create a post!",
      };
    else {
      const checkPost = postExists.msg.findIndex((p) => p.id == postId);
      if (checkPost == -1)
        return { success: false, msg: `No post found with id: ${postId}` };
    }

    const result = likes.filter((l) => l.postId == postId && l.liked == true);

    if (result.length == 0)
      return { success: false, msg: `No likes for post with id: ${postId} ` };
    else {
      return {
        success: true,
        msg: result,
      };
    }
  }

  static toggleLike(userId, postId) {
    //Check if post is there in all posts or not
    const postExists = PostModel.getALLPosts();
    if (!postExists.success)
      return {
        success: false,
        msg: "No posts available, first create a post!",
      };
    else {
      const checkPost = postExists.msg.findIndex((p) => p.id == postId);
      if (checkPost == -1)
        return { success: false, msg: `No post found with id: ${postId}` };
    }
    let like = false;
    const postIndex = likes.findIndex(
      (p) => p.postId == postId && p.userId == userId
    );
    if (postIndex == -1) {
      //No likes are present
      like = true; //Create a new like for current post and user
      const newLike = new LikesModel(userId, postId, like);
      likes.push(newLike);

      return {
        success: true,
        msg: `User ${userId} has successfully liked the post : ${postId}`,
      };
    } //Post already present in the likes array, hence toggle the like
    else {
      const originalLikeStatus = likes[postIndex].liked;
      likes[postIndex].liked = !likes[postIndex].liked; //toggle the like status

      if (originalLikeStatus) {
        return {
          success: true,
          msg: `User ${userId} has successfully unliked the post : ${postId}`,
        };
      } else {
        return {
            success: true,
            msg: `User ${userId} has successfully liked the post : ${postId}`,
          };
      }
    }
  }
}

let likes = [];
