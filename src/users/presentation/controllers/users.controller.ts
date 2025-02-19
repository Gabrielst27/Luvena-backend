import { Controller, Get, Post, Body, Param, Inject, Logger } from '@nestjs/common';
import { SignUpDto } from '../../application/dtos/sign-up.dto';
import { IListEmployeesByCompanyId } from '@/users/application/use-cases/list-employees-by-company-id/list-employees-by-company-id.interface';
import { ISignUp } from '@/users/application/use-cases/sign-up/sign-up.interface';
import { ListEmployeesDto } from '@/users/application/dtos/list-employees.dto';

@Controller('users')
export class UsersController {
  public logger: Logger;

  constructor(
    @Inject('IListEmployeesByCompanyId')
    private readonly listEmployeesByCompanyIdService: IListEmployeesByCompanyId,
    @Inject('ISignUp')
    private readonly signUpService: ISignUp,
  ) {
    this.logger = new Logger();
  }

  @Get('all-by-company-id/:id')
  public async listEmployeesByCompanyId(@Param() id: string): Promise<ListEmployeesDto[]> {
    this.logger.debug('GET: all-by-company-id/:id');
    return await this.listEmployeesByCompanyIdService.execute(id);
  }

  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto) {
    this.logger.debug('POST: sign-up');
    return this.signUpService.execute(signUpDto);
  }
}
