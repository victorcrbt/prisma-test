import { Post } from '@prisma/client';

import IPostsRepository from '../repositories/IPostsRepository';

export default class ListPostsService {
  constructor(private postsRepository: IPostsRepository) {}

  public async run(): Promise<Post[]> {
    const posts = await this.postsRepository.findAll();

    return posts;
  }
}
