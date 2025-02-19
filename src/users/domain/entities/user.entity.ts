import { ERole } from '@/shared/domain/enums/role.enum';

export type UserProps = {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: ERole;
  cpf?: string | null;
  createdAt?: Date | null;
};

export class UserEntity {
  constructor(public readonly props: UserProps) {
    this.props.createdAt = this.props.createdAt ?? new Date();
  }
}
