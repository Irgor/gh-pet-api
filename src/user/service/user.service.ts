import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User } from '../dto/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findAll() {
    return await this.userModel.find();
  }

  async findOne(id: Types.UUID) {
    const user = await this.userModel.findById(id);
    return user;
  }

  async update(id: Types.UUID, updateUserDto: UpdateUserDto) {
    await this.userModel.findByIdAndUpdate(id, updateUserDto);
    return await this.userModel.findById(id);
  }

  async remove(id: Types.UUID) {
    return await this.userModel.findByIdAndDelete(id)
  }
}
