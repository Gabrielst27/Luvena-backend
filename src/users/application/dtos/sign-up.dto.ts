import { ERole } from '@/shared/domain/enums/role.enum';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SignUpDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsEnum(ERole)
  @IsNotEmpty()
  role: ERole;

  @IsString()
  @IsOptional()
  cpf?: string;
}
