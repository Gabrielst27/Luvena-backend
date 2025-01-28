import { UserEntity } from '@/users/domain/entities/user.entity';

export interface IListUsersService {
  execute(): Promise<UserEntity[]>;
}
