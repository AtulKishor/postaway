import LikesModel from "./likes.model.js";

export default class LikesController {
  getAllLikes(req, res) {
    const postId = req.params.postId;

    const result = LikesModel.getAllLikes(postId);

    if (!result.success) return res.status(404).send(result.msg);
    else return res.status(200).send(result.msg);
  }

  toggleLike(req, res) {
    const postId = req.params.postId;
    const userId = req.userId;
    const result = LikesModel.toggleLike(userId, postId);

    if (!result.success) return res.status(404).send(result.msg);
    else return res.status(200).send(result.msg);
  }
}
