import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  // HttpException,
  Inject,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConfigService } from '@nestjs/config';
import { MongoRepository } from 'typeorm';
import { User } from './entities/user.mongodb.entity';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    // 注入环境变量
    private readonly configService: ConfigService,
    // 注入user仓库
    @Inject('USER_REPOSITORY')
    private readonly userRepository: MongoRepository<User>,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    // throw new HttpException('用户已存在', 400);

    // console.log('环境变量', this.configService.get('database.host'));
    console.log('数据库', process.env.DATABASE_HOST);

    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Post('/createAdmin')
  createAdmin() {
    return this.usersService.createAdmin();
  }
}
