# Postaway - A Social Networking Platform

## Project Overview

Postaway is a feature-rich Social Networking Platform built using Express and Node.js, incorporating various libraries like JsonWebToken for authentication and Multer for handling file uploads. The application allows users to sign up, create posts, like and comment on posts, bookmark favorites, and more.

## Overview of Functionality

- *Project Architecture:** Follows a API based architecture. Each feature contains dedicated Model, Controller and Router script files for organized and scalable development.
- **User Authentication:** Implements user sign-in and sign-up functionality with JSON Web Tokens (JWT).
- **Post Management:** Provides endpoints for creating, updating, deleting, fetching posts and many other features.
- **Like and Comment System:** Allows users to like and comment on posts.
- **Bookmarking:** Enables users to bookmark their favorite posts.
- **Search and Sorting:** Includes endpoints for filtering and sorting posts based on user preferences.
- **Archive Management:** Handles archiving and unarchiving posts using.

## Key Features

- **User Authentication:** Secure user authentication with JWT to protect sensitive information.
- **Post Operations:** CRUD operations for posts, including creation, update, delete, and fetching.
- **Like System:** Users can like posts, and the count is tracked for each post.
- **Commenting:** Allows users to add comments to posts, fostering engagement.
- **Bookmarking and Archiving:** Users can bookmark posts and archive them for later reference.
- **Search and Sort:** Provides functionality to filter and sort posts for a personalized experience.
- **Archive:** Handles archiving and unarchiving posts.


## API Details

### Routes

- **User Authentication:**
  - Sign In: `POST /api/signin`
  - Sign Up: `POST /api/signup`

- **Post Operations:**
  - Get All Posts: `GET /api/posts/all`
  - Get User Posts: `GET /api/posts/`
  - Create Post: `POST /api/posts/`
  - Get One Post: `GET /api/posts/{postId}`
  - Delete Post: `DELETE /api/posts/{postId}`
  - Update Post: `PUT /api/posts/{postId}`
  - Filter Posts: `POST /api/posts/filter`
  - Sort Posts: `GET /api/custom/sort`

- **Like System:**
  - Get Post Likes: `GET /api/likes/{postId}`
  - Toggle Like: `GET /api/likes/toggle/{postId}`

- **Comment System:**
  - Get Post Comments: `GET /api/comments/{postId}`
  - Add Comment: `POST /api/comments/{postId}`
  - Delete Comment: `DELETE /api/comments/{commentId}`
  - Update Comment: `PUT /api/comments/{commentId}`

- **Bookmark and Archive:**
  - Get User Bookmarks: `GET /api/bookmark/`
  - Toggle Bookmark: `POST /api/bookmark/{postId}`
  - Archive Post: `POST /api/archive/{postId}`
  - Unarchive Post: `PUT /api/archive/{postId}`
  - Get User Archives: `GET /api/archive/`

### Middleware

- **Authentication:** Secures endpoints with JWT authentication.
- **Error Pge:** Handles invalid routes and errors by displaying the custom error message.
- **File Upload:** Manages image uploads using Multer middleware.

## Project Setup

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/gautamuniverse/postaway.git`
2. Navigate to the project directory: `cd postaway`
3. Install dependencies: `npm install`
4. Start the server: `npm start` or use `nodemon` for development: `npm run dev`

## Contact Information

- **Author:** Gautam
- **GitHub:** [gautamuniverse](https://github.com/gautamuniverse)
- **LinkedIn:** [Gautam](https://www.linkedin.com/in/gautam-116307bb/)
- **Instagram:** [@gautamuniverse.in](https://www.instagram.com/gautamuniverse.in/)

Feel free to reach out for any questions or collaboration opportunities!