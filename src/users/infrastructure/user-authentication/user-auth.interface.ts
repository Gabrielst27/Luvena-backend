import { UserRecord } from 'firebase-admin/auth';
import { SignUpDto } from 'src/users/application/dtos/sign-up.dto';

export interface IUserAuth {
  createUser(user: SignUpDto): Promise<UserRecord>;
}
