import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ShareModule } from './share/share.module';

@Module({
  imports: [UsersModule, ShareModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
