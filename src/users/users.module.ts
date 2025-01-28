import { Module } from '@nestjs/common';
import { UsersController } from './presentation/controllers/users.controller';
import { ListUsersService } from './application/use-cases/list-users/list-users.service';
import { UsersRepository } from './infrastructure/repositories/users.repository';
import { CreateUserService } from './application/use-cases/create-user/create-user.service';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: 'IUsersRepository',
      useClass: UsersRepository,
    },
    {
      provide: 'IListUsersService',
      useClass: ListUsersService,
    },
    {
      provide: 'ICreateUserService',
      useClass: CreateUserService,
    },
  ],
})
export class UsersModule {}
