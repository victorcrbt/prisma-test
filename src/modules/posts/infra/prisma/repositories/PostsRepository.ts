import { Post, PrismaClient } from '@prisma/client';

import IPostsRepository from '@modules/posts/repositories/IPostsRepository';

import ICreatePostDTO from '@modules/posts/dtos/ICreatePostDTO';

export default class PostsRepository implements IPostsRepository {
  private client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  public async create({
    author_id,
    content,
    title,
  }: ICreatePostDTO): Promise<Post> {
    const post = await this.client.post.create({
      data: {
        content,
        title,
        author: {
          connect: { id: author_id },
        },
      },
    });

    return post;
  }

  public async findAll(): Promise<Post[]> {
    const posts = await this.client.post.findMany({
      include: {
        author: true,
      },
    });

    return posts;
  }
}
