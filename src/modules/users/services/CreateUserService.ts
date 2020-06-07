import { User } from '@prisma/client';

import IUsersRepository from '../repositories/IUsersRepository';

interface IRequestDTO {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async run({ name, email, password }: IRequestDTO): Promise<User> {
    const user = await this.usersRepository.create({
      name,
      email,
      password,
    });

    return user;
  }
}
