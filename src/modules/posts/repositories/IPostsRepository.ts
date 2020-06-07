import { Post } from '@prisma/client';

import ICreatePostDTO from '../dtos/ICreatePostDTO';

export default interface IPostsRepository {
  create(data: ICreatePostDTO): Promise<Post>;
  findAll(): Promise<Post[]>;
}
