import express from 'express';

import ArchiveController from './archive.controller.js';

const archiveRouter = express.Router();

const archiveCtrlr = new ArchiveController();

//Post route for archiving a post
archiveRouter.post('/:postId', archiveCtrlr.archivePost);

//Get all archived posts for a specific user
archiveRouter.get('/', archiveCtrlr.getAllArchived);

//Put route to unarchvie a post
archiveRouter.put('/:postId', archiveCtrlr.unarchivePost);

export default archiveRouter;