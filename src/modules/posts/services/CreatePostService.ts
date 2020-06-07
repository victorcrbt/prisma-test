import { Post } from '@prisma/client';

import IPostsRepository from '../repositories/IPostsRepository';

interface IRequestDTO {
  title: string;
  content: string;
  author_id: string;
}

export default class CreatePostService {
  constructor(private postsRepository: IPostsRepository) {}

  public async run({ title, content, author_id }: IRequestDTO): Promise<Post> {
    const post = await this.postsRepository.create({
      title,
      content,
      author_id,
    });

    return post;
  }
}
