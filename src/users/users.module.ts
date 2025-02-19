import { Module } from '@nestjs/common';
import { UsersController } from './presentation/controllers/users.controller';
import { ListEmployeesByCompanyIdService } from './application/use-cases/list-employees-by-company-id/list-employees-by-company-id.service';
import { UsersRepository } from './infrastructure/repositories/users.repository';
import { SignUpService } from './application/use-cases/sign-up/sign-up.service';
import { UserAuthService } from './infrastructure/user-authentication/user.auth.service';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: 'IUsersRepository',
      useClass: UsersRepository,
    },
    {
      provide: 'IListEmployeesByCompanyId',
      useClass: ListEmployeesByCompanyIdService,
    },
    {
      provide: 'ISignUp',
      useClass: SignUpService,
    },
    {
      provide: 'IUserAuth',
      useClass: UserAuthService,
    },
  ],
})
export class UsersModule {}
