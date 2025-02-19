import { ERole } from '@/shared/domain/enums/role.enum';
import { IsNotEmpty, IsString } from 'class-validator';

export class ListEmployeesDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  role: ERole;
}
