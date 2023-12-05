import ArchiveModel from "./archive.model.js";

export default class ArchiveController {

  archivePost(req, res) {
    const postId = req.params.postId;
    const userId = req.userId;

    const result = ArchiveModel.archivePost(userId, postId);

    if (!result.success) return res.status(404).send(result);
    else res.status(201).send(result);
  }

  getAllArchived(req, res){
    const userId = req.userId;
    const result = ArchiveModel.getAllArchived(userId);

    if (!result.success) return res.status(404).send(result);
    else res.status(200).send(result);
  }

  unarchivePost(req, res){
    const postId = req.params.postId;
    const userId = req.userId;

    const result = ArchiveModel.unarchivePost(userId, postId);

    if (!result.success) return res.status(404).send(result);
    else res.status(200).send(result);
  }

}
