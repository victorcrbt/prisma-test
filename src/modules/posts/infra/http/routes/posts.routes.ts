import { Router } from 'express';

import PostsController from '../controllers/PostsCotnroller';

const postsRouter = Router();
const postsController = new PostsController();

postsRouter.post('/', postsController.store);
postsRouter.get('/', postsController.index);

export default postsRouter;
