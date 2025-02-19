import { SignUpDto } from '@/users/application/dtos/sign-up.dto';

export interface ISignUp {
  execute(user: SignUpDto): Promise<void>;
}
