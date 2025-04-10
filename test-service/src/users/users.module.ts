import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ShareModule } from 'src/share/share.module';
import { userProviders } from './users.providers';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...userProviders],
  imports: [ShareModule],
})
export class UsersModule {}
