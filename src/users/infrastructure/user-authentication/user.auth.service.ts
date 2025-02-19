import { getAuth, UserRecord } from 'firebase-admin/auth';
import { SignUpDto } from 'src/users/application/dtos/sign-up.dto';
import { IUserAuth } from './user-auth.interface';
import { BadRequestException } from '@nestjs/common';

export class UserAuthService implements IUserAuth {
  async createUser(user: SignUpDto): Promise<UserRecord> {
    return await getAuth().createUser({
      email: user.email,
      password: user.password,
      displayName: user.name,
    });
  }
}
