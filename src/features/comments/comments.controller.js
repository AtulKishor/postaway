import CommentsModel from "./comments.model.js";

export default class CommentsController {
  //Retrieve all comments for a specific post by the postId
  getAllComments(req, res) {
    const postId = req.params.postId;

    const result = CommentsModel.getAllComments(postId);

    if (!result.success) return res.status(404).send(result.msg);
    else return res.status(200).send(result.msg);
  }

  // Add a new comment to a specific post
  addComment(req, res) {
    const postId = req.params.postId;
    const userId = req.userId;
    const { content } = req.body;

    const result = CommentsModel.addComment(userId, postId, content);

    if (!result.success) return res.status(404).send(result.msg);
    else return res.status(201).send(result.msg);
  }

  //Delete a specific comment by commentId
  deleteComment(req, res) {
    const id = req.params.commentId;

    const result = CommentsModel.deleteComment(id);

    if (!result.success) return res.status(404).send(result.msg);
    else return res.status(200).send(result.msg);
  }

  //Update a specific comment by commentId
  updateComment(req, res) {
    const id = req.params.commentId;
    const content = req.body.content;
    const result = CommentsModel.updateComment(id, content);

    if (!result.success) return res.status(404).send(result.msg);
    else return res.status(201).send(result.msg);
  }
}
