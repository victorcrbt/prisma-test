import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import postsRouter from '@modules/posts/infra/http/routes/posts.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/posts', postsRouter);

export default routes;
