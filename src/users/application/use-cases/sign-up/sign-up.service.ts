import { Inject, Injectable } from '@nestjs/common';
import { ISignUp } from './sign-up.interface';
import { IUsersRepository } from '@/users/domain/interfaces/users.repository.interface';
import { SignUpDto } from '../../dtos/sign-up.dto';
import { UserEntity, UserProps } from '@/users/domain/entities/user.entity';
import { IUserAuth } from '@/users/infrastructure/user-authentication/user-auth.interface';

@Injectable()
export class SignUpService implements ISignUp {
  constructor(
    @Inject('IUsersRepository') private readonly usersRepository: IUsersRepository,
    @Inject('IUserAuth') private readonly authService: IUserAuth,
  ) {}
  public async execute(userDto: SignUpDto): Promise<void> {
    const user = new UserEntity({
      name: userDto.name,
      email: userDto.email,
      phone: userDto.phone,
      role: userDto.role,
      cpf: userDto.cpf || null,
    } as UserProps);

    try {
      if (user) {
        const userAuth = await this.authService.createUser(userDto);
        user.props.id = userAuth.uid;

        await this.usersRepository.signUp(user);
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
