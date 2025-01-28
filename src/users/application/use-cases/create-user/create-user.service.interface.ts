import { CreateUserDto } from '@/users/presentation/dtos/create-user.dto';

export interface ICreateUserService {
  execute(user: CreateUserDto): Promise<void>;
}
