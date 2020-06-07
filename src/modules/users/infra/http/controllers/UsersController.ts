import { Request, Response } from 'express';

import CreateUserService from '@modules/users/services/CreateUserService';
import UsersRepository from '@modules/users/infra/prisma/repositories/UsersRepository';

export default class UsersController {
  public async store(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const usersRepository = new UsersRepository();

    const createUser = new CreateUserService(usersRepository);

    const user = await createUser.run({ name, email, password });

    return res.status(201).json(user);
  }
}
