import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  UserModel,
  Users,
  UsersDocument,
} from '../../users/schemas/users.schema';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectModel(Users.name) private readonly usersModel: Model<UsersDocument>,
  ) {}
  async findUserByLogin(login: string): Promise<UserModel> {
    return this.usersModel.findOne({ login });
  }
  async findUserByEmail(email: string): Promise<UserModel> {
    return this.usersModel.findOne({ email });
  }
}
