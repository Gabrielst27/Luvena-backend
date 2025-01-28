import { Inject, Injectable } from '@nestjs/common';
import { ICreateUserService } from './create-user.service.interface';
import { CreateUserDto } from '@/users/presentation/dtos/create-user.dto';
import { IUsersRepository } from '@/users/domain/interfaces/users.repository.interface';

@Injectable()
export class CreateUserService implements ICreateUserService {
  constructor(
    @Inject('IUsersRepository') private usersRepository: IUsersRepository,
  ) {}
  public async execute(user: CreateUserDto): Promise<void> {
    await this.usersRepository.createUser(user);
  }
}
