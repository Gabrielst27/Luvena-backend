import { IUsersRepository } from '@/users/domain/interfaces/users.repository.interface';
import { Inject, Injectable } from '@nestjs/common';
import { IListUsersService } from './list-users.service.interface';

@Injectable()
export class ListUsersService implements IListUsersService {
  constructor(
    @Inject('IUsersRepository') private usersRepository: IUsersRepository,
  ) {}

  execute() {
    return this.usersRepository.listAllUsers();
  }
}
