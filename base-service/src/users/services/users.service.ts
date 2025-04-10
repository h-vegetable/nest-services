import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { MongoRepository } from 'typeorm';
import { User } from '../entities/users.mongodb.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userReponsitory: MongoRepository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    // return 'This action adds a new user';
    return this.userReponsitory.save({
      name: 'test',
      id: '111',
    });
  }

  findAll() {
    // return `This action returns all users`;
    return this.userReponsitory.findAndCount({});
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
