import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { UserProviders } from './users.provider';
import { CommonModule } from 'src/common/common.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';

@Module({
  controllers: [UsersController, AuthController],
  providers: [UsersService, ...UserProviders, AuthService],
  imports: [CommonModule],
})
export class UsersModule {}
