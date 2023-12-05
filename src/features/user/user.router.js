import express from 'express';
import UserController from './user.controller.js';

const userController = new UserController();

//Setup the express router for the user router
export const UserRouter = express.Router();

//Signup
UserRouter.post('/signup', userController.signUp);

//SignIn
UserRouter.post('/signin', userController.signIn);




export default UserRouter;