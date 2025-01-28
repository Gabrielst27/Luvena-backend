import { Injectable } from '@nestjs/common';
import { UserEntity, UserProps } from '@/users/domain/entities/user.entity';
import { IUsersRepository } from '../../domain/interfaces/users.repository.interface';
import { getFirestore } from 'firebase-admin/firestore';
import { CreateUserDto } from '@/users/presentation/dtos/create-user.dto';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor() {}
  public async createUser(user: CreateUserDto): Promise<void> {
    const userProps: UserProps = {
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
      createdAt: new Date(),
    };

    const userEntity = new UserEntity(userProps);
    const userData = JSON.parse(JSON.stringify(userEntity));
    await getFirestore().collection('users').add(userData);
  }

  public async listAllUsers(): Promise<UserEntity[]> {
    const snapshot = await getFirestore().collection('users').get();
    const users: UserEntity[] = snapshot.docs.map(
      doc => doc.data() as UserEntity,
    );
    return users;
  }
}
