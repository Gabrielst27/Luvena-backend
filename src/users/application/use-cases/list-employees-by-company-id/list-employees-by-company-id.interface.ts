import { ListEmployeesDto } from '../../dtos/list-employees.dto';

export interface IListEmployeesByCompanyId {
  execute(id: string): Promise<ListEmployeesDto[]>;
}
