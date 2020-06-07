import { Request, Response } from 'express';

import PostsRepository from '../../prisma/repositories/PostsRepository';

import CreatePostService from '@modules/posts/services/CreatePostService';
import ListPostsService from '@modules/posts/services/ListPostsService';

export default class PostsCotnroller {
  public async store(req: Request, res: Response): Promise<Response> {
    const { title, content, author_id } = req.body;

    const postsRepository = new PostsRepository();

    const createPost = new CreatePostService(postsRepository);

    const post = await createPost.run({ title, content, author_id });

    return res.status(201).json(post);
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const postsRepository = new PostsRepository();

    const createPost = new ListPostsService(postsRepository);

    const posts = await createPost.run();

    return res.status(201).json(posts);
  }
}
