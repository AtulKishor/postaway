import PostModel from "../post/post.model.js";

export default class CommentsModel {
  constructor(userId, postId, content) {
    this.id = Date.now();
    this.userId = userId;
    this.postId = postId;
    this.content = content;
  }
  //Retrieve all comments for a specific post by the postId
  static getAllComments(postId) {
    //Validaition
    //1. Check if the post exists or not in the posts
    const getPost = PostModel.getPostById(postId);
    if (!getPost.success) return getPost; //Post doesn't exists

    const result = comments.filter((c) => c.postId == postId);

    if (result.length == 0)
      //No comments found for the postId
      return {
        success: false,
        msg: `No comments for the post with id: ${postId}`,
      };
    else return { success: true, msg: result };
  }

  // Add a new comment to a specific post
  static addComment(userId, postId, content) {
    const newComment = new CommentsModel(userId, postId, content);
    comments.push(newComment);

    return {
      success: true,
      msg: `New comment successfully added to the post with id: ${postId}`,
    };
  }

  //Delete a specific comment by commentId
  static deleteComment(id) {
    const result = comments.findIndex((c) => c.id == id);
    if (result == -1)
      return { success: false, msg: `No comment found with id: ${id}` };
    else {
      comments.splice(result, 1); //delete the comment
      return { success: true, msg: `Comment has been successfully deleted` };
    }
  }

  //Update a specific comment by commentId
  static updateComment(id, content) {
    const result = comments.findIndex((c) => c.id == id);

    if (result == -1)
      return { success: false, msg: `No comment found with id: ${id}` };
    else {
      comments[result].content = content;
      return {
        success: true,
        msg: `Comment has been successfully updated, new content: ${comments[result].content}`,
      };
    }
  }
}

let comments = [];
