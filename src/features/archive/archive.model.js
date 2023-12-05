import PostModel from "../post/post.model.js";

export default class ArchiveModel {
  constructor(userId, post) {
    this.id = Date.now();
    this.userId = userId;
    this.post = post;
  }

  static archivePost(userId, postId) {
    //Validation

    //Check if the post is already archived
    const alreadyPresent = archive.findIndex((p) => p.post.id == postId);
    if (alreadyPresent != -1)
      return {
        success: false,
        msg: `Post with id ${postId} is already archived!`,
      };

    //Archive the post and remove the post from PostModel
    const getPost = PostModel.getPostById(postId);
    
    //Post id is not correct
    if (!getPost.success) return getPost.msg;
    else {
      //remove the post from post model
      PostModel.deletePost(postId);

      //Add the post to the archive list
      const newArchive = new ArchiveModel(userId, getPost.msg[0]);
      archive.push(newArchive);

      return {
        success: true,
        msg: newArchive,
      };
    }
  }

  static getAllArchived(userId) {
    const result = archive.filter((a) => a.userId == userId);

    if (result.length == 0)
      return {
        success: false,
        msg: `No archived posts for the user with id: ${userId}`,
      };
    else {
      return { success: true, msg: result };
    }
  }

  static unarchivePost(userId, postId) {
    const getPost = archive.findIndex((u) => u.post.id == postId && u.userId == userId);

    if (getPost == -1)
      return {
        success: false,
        msg: `No archived posts with postId: ${postId}`,
      };
    else {
      //remove from the arhive and add to the postModel
      const removed = archive.splice(getPost, 1);

      PostModel.addArchived(removed[0].post);

      return { success: true, msg: `Post unarchived successfully!` };
    }
  }
}

let archive = [];
