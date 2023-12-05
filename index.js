import express from "express";
import swagger from 'swagger-ui-express';

import UserRouter from "./src/features/user/user.router.js";
import jwtAuth from "./src/middlewares/jwt.middleware.js";
import postRouter from "./src/features/post/post.router.js";
import { getUploadedImage } from "./src/features/helper functions/getUploadedImage.js";
import likesRouter from "./src/features/likes/likes.router.js";
import commentsRouter from "./src/features/comments/comments.router.js";
import apiDocs from './swagger.json' assert {type: 'json'};
import bookmarkRouter from "./src/features/bookmark/bookmark.router.js";
import archiveRouter from "./src/features/archive/archive.router.js";
import { errorPage } from "./src/middlewares/errorpage.middleware.js";

const server = express();

//To parse JSON data to the req.body
server.use(express.json());

//Api Routes

//Api route for the Swagger apiDocs
server.use('/api-docs', swagger.serve, swagger.setup(apiDocs));

//User signin/signout
server.use("/api", UserRouter);

//For getting uploaded images(helper route for sending downloadable images as repsonse)
server.get("/api/uploads/*", jwtAuth, getUploadedImage);

// Post routes
server.use("/api/posts",jwtAuth, postRouter);

// Comments Routes
server.use('/api/comments',jwtAuth, commentsRouter);

// Likes Routes
server.use('/api/likes',jwtAuth, likesRouter);

// Bookmark routes
server.use('/api/bookmark/', jwtAuth, bookmarkRouter);

// Archive routes
server.use('/api/archive', jwtAuth, archiveRouter);

server.get("/", (req, res) => {
  res.send("Welcome to Postaway!");
});

//For any invalid route. Error page should be displayed
server.use(errorPage);

server.listen(5000, (err) => {
  if (err) console.log(err);
  else console.log("Server is listening on 5000");
});
