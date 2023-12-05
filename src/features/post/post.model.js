export default class PostModel {
  constructor(userId, caption, imageUrl) {
    this.id = Date.now();
    this.userId = userId;
    this.caption = caption;
    this.imageUrl = imageUrl;
  }

  static createPost(userId, caption, imageUrl) {
    const newPost = new PostModel(userId, caption, imageUrl);
    posts.push(newPost);

    return { success: true, msg: "New Post Created!" };
  }

  static getALLPosts() {
    if (posts.length == 0) return { success: false, msg: "No posts available" };
    else return { success: true, msg: posts };
  }

  static getPostById(id) {
    //Check if the post exists
    const findPost = posts.filter((p) => p.id == id);

    if (findPost.length == 0)
      return { success: false, msg: `No post found with id: ${id}` };
    else {
      return { success: true, msg: findPost };
    }
  }
  //Get posts based on the user credentials
  static getUserPosts(userId) {
    const findPosts = posts.filter((p) => p.userId == userId);

    if (findPosts.length > 0) return { success: true, msg: findPosts };
    else return { success: false, msg: "No posts found current user!" };
  }

  //delete a specific post by id
  static deletePost(id) {
    //Check if the post exists
    const findPost = posts.findIndex((p) => p.id == id);

    if (findPost == -1)
      return { success: false, msg: `No post found with id: ${id}` };
    else {
      const postArray = posts.filter((p) => p.id == id);
      posts.splice(findPost, 1); //delete post
      return { success: true, msg: "Post deleted!", deleted: postArray };
    }
  }

  //Update a post by id
  static updatePost(id, caption, imageUrl) {
    //Check if the post exists
    const findPost = posts.findIndex((p) => p.id == id);

    if (findPost == -1)
      return { success: false, msg: `No post found with id: ${id}` };
    else {
      posts[findPost].caption = caption ? caption : posts[findPost].caption;
      posts[findPost].imageUrl = imageUrl ? imageUrl : posts[findPost].imageUrl;

      return { success: true, msg: "Post updated!"};
    }
  }

  //Get filtered posts based on the caption content
  static filterPost(searchContent) {
    let modifiedQuery = searchContent.trim().toLowerCase();
    const result = posts.filter((p) =>
      p.caption.trim().toLowerCase().includes(modifiedQuery)
    );

    if (result.length == 0)
      return {
        success: false,
        msg: "No posts found with the given caption content",
      };
    else {
      return { success: true, msg: result };
    }
  }

  //Get sorted posts in ascending order of date posted
  static getSortedPosts(){
    //Check if there are any posts
    const checkLength = posts.length;
    if(checkLength == 0) return {success: false, msg: 'No posts are present. Create a post first!'}

    let sortedArray = posts.slice(); //creating a shallow copy of all the posts

    sortedArray = sortedArray.sort((a,b) => a.id - b.id);

    return {success: true, msg: sortedArray};
  } 

  //helper function to add an arhived post back to the model
  static addArchived(post){
    posts.push(post);
  }
}
let posts = [];
