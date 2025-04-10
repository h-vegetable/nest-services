import { Module } from '@nestjs/common';
import { ShareService } from './share.service';
import { ShareController } from './share.controller';
import { ConfigModule } from '@nestjs/config';
import configModuleOptions from './config/module-options';
import { databaseProviders } from './database.providers';

@Module({
  controllers: [ShareController],
  providers: [ShareService, ...databaseProviders],
  imports: [ConfigModule.forRoot(configModuleOptions)],
  exports: [ConfigModule],
})
export class ShareModule {}
