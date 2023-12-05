import PostModel from "./post.model.js";

export default class PostController {
  getALLPosts(req, res, next) {
    const result = PostModel.getALLPosts();
    //If no posts found
    if (!result.success) return res.status(404).send(result.msg);
    else {
      return res.status(200).send(result.msg);
    }
  }

  getUserPosts(req, res, next) {
    const userId = req.userId; //Because the userId is inserted in req while    generating the token for user
    const result = PostModel.getUserPosts(userId);

    //If no posts found
    if (!result.success) return res.status(404).send(result.msg);
    else {
      return res.status(200).send(result.msg);
    }
  }

  getPostById(req, res, next) {
    const id = req.params.id;

    const result = PostModel.getPostById(id);

    //If no posts found
    if (!result.success) return res.status(404).send(result.msg);
    else {
      return res.status(200).send(result.msg);
    }
  }

  createPost(req, res, next) {
    const userId = req.userId;
    const baseURL = "http://localhost:5000/api/uploads/";
    const imageUrl = baseURL + req.file.filename;
    const { caption } = req.body;

    const result = PostModel.createPost(userId, caption, imageUrl);

    return res.status(201).send(result.msg);
  }

  deletePost(req, res, next) {
    const id = req.params.id;

    const result = PostModel.deletePost(id);

    if (!result.success) return res.status(404).send(result.msg);
    else {
      
      return res
        .status(200)
        .send({ msg: result.msg, deletedPost: result.deleted[0] });
    }
  }

  updatePost(req, res, next) {
    const id = req.params.id;
    const baseURL = "http://localhost:5000/api/uploads/";
    const imageUrl = baseURL + req.file.filename;
    const { caption } = req.body;
    const result = PostModel.updatePost(id, caption, imageUrl);

    if (!result.success) return res.status(404).send(result.msg);
    else return res.status(201).send(result.msg);
  }

  //Get filtered posts based on the caption content
  filterPost(req, res) {
    const {searchContent} = req.body;

    const result = PostModel.filterPost(searchContent);

    if (!result.success) return res.status(404).send(result.msg);
    else return res.status(200).send(result.msg);
  }

  //Get sorted posts in ascending order of date of posting
  getSortedPosts(req, res){
    const result = PostModel.getSortedPosts();

    if (!result.success) return res.status(404).send(result.msg);
    else return res.status(200).send(result.msg);
  }


}
