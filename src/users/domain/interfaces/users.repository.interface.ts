import { UserEntity } from '../entities/user.entity';

export interface IUsersRepository {
  listEmployeesByCompanyId(id: string): Promise<UserEntity[]>;
  signUp(user: UserEntity): Promise<void>;
}
