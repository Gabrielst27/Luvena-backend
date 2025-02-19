import { IUsersRepository } from '@/users/domain/interfaces/users.repository.interface';
import { Inject, Injectable } from '@nestjs/common';
import { IListEmployeesByCompanyId } from './list-employees-by-company-id.interface';
import { ListEmployeesDto } from '../../dtos/list-employees.dto';
import { UserEntity } from '@/users/domain/entities/user.entity';

@Injectable()
export class ListEmployeesByCompanyIdService implements IListEmployeesByCompanyId {
  constructor(@Inject('IUsersRepository') private usersRepository: IUsersRepository) {}

  async execute(id: string): Promise<ListEmployeesDto[]> {
    const employees: UserEntity[] = await this.usersRepository.listEmployeesByCompanyId(id);
    const employeesDto = employees.map(user => {
      return {
        name: user.props.name,
        email: user.props.email,
        phone: user.props.phone,
        role: user.props.role,
      } as ListEmployeesDto;
    });
    return employeesDto;
  }
}
