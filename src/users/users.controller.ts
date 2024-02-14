import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async addUser(
    @Body('firstName') userFirstName: string,
    @Body('lastName') userLastName: string,
  ) {
    const generatedId = await this.usersService.insertUser(
      userFirstName,
      userLastName,
    );
    return { message: 'User added successfully', id: generatedId };
  }

  @Get()
  async getAllUsers() {
    const users = await this.usersService.getUsers();
    return { message: 'All users retrieved successfully', users };
  }

  @Get(':id')
  getUser(@Param('id') userId: string) {
    return this.usersService.getSingleUser(userId);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') userId: string,
    @Body('firstName') userFirstName: string,
    @Body('lastName') userLastName: string,
  ) {
    const updatedUser = await this.usersService.updateUser(
      userId,
      userFirstName,
      userLastName,
    );
    return { message: 'User updated successfully', updatedUser };
  }

  @Delete(':id')
  async removeUser(@Param('id') userId: string) {
    await this.usersService.deleteUser(userId);
    return { message: 'User deleted successfully' };
  }
}
