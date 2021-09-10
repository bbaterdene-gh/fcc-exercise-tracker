import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  createOne(username): Promise<UserDocument> {
    const newUser = new this.userModel({ username: username });
    return newUser.save();
  }

  findAll() {
    return this.userModel.find().exec();
  }
}
