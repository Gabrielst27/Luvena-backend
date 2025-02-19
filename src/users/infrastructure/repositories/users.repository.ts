import { Injectable } from '@nestjs/common';
import { UserEntity, UserProps } from '@/users/domain/entities/user.entity';
import { IUsersRepository } from '../../domain/interfaces/users.repository.interface';
import { Firestore, getFirestore } from 'firebase-admin/firestore';

@Injectable()
export class UsersRepository implements IUsersRepository {
  private readonly db: Firestore;
  private readonly collection;
  constructor() {
    this.db = getFirestore();

    if (!this.db) {
      throw new Error('Firestore não inicializado');
    }

    this.collection = this.db.collection('users');
  }

  async listEmployeesByCompanyId(id: string): Promise<UserEntity[]> {
    try {
      const snapshot = await this.collection.get();
      return snapshot.docs.map(doc => new UserEntity(doc.data() as UserProps));
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  public async signUp(user: UserEntity): Promise<void> {
    const userData = JSON.parse(JSON.stringify(user));
    await getFirestore().collection('users').add(userData);
  }
}
