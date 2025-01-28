import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { IListUsersService } from '@/users/application/use-cases/list-users/list-users.service.interface';
import { ICreateUserService } from '@/users/application/use-cases/create-user/create-user.service.interface';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('IListUsersService')
    private readonly listUsersService: IListUsersService,
    @Inject('ICreateUserService')
    private readonly createUserService: ICreateUserService,
  ) {}

  @Post('create-user')
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.execute(createUserDto);
  }

  @Get()
  public async listAllUsers() {
    return await this.listUsersService.execute();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
