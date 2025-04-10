import {
  Inject,
  NotFoundException,
  ConflictException,
  NotAcceptableException,
} from '@nestjs/common';
import { RegisterDTO } from '../dto/auth.dto';
import { MongoRepository } from 'typeorm';
import { User } from '../entities/users.mongodb.entity';

export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: MongoRepository<User>,
  ) {}

  async registerByName(registerDTO: RegisterDTO): Promise<any> {
    await this.checkRegisterForm(registerDTO);

    const { name, password } = registerDTO;
    const newUser = new User();
    newUser.name = name;
    newUser.password = password;
    const data = await this.userRepository.save(newUser);
    return data;
  }

  async checkRegisterForm(registerDTO: RegisterDTO) {
    const { name, password, passwordRepeat } = registerDTO;
    if (password !== passwordRepeat) {
      throw new NotAcceptableException('密码不一致');
    }
    const hasUser = await this.userRepository.findOneBy({ name });
    if (hasUser) {
      throw new ConflictException('用户昵称重复，请更换');
    }
  }
}
