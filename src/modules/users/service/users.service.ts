import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from '../repository/users.repository';
import { UserType, UserType_For_DB } from '../schemas/users.schema';
import { ObjectId } from 'mongodb';
import { UserDto } from '../dto/userDto';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
  async findAllUsers() {
    return this.usersRepository.findAllUsers();
  }
  async createUser(user: UserDto): Promise<UserType> {
    const newUser: UserType_For_DB = {
      id: new ObjectId().toString(),
      _id: new ObjectId(),
      login: user.login,
      email: user.email,
      createdAt: new Date().toISOString(),
    };
    return this.usersRepository.createUser(newUser);
  }
  async deleteUserById(id: string): Promise<boolean> {
    return this.usersRepository.deleteUserById(id);
  }
  async findUserById(id: string): Promise<UserType> {
    return this.usersRepository.findUserById(id);
  }
}
