import { CreateUserDto } from '@/users/presentation/dtos/create-user.dto';
import { UserEntity } from '../entities/user.entity';

export interface IUsersRepository {
  listAllUsers(): Promise<UserEntity[]>;
  createUser(user: CreateUserDto): Promise<void>;
}
