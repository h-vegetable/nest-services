import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { CommonController } from './common.controller';
import ConfigModuleOption from './config/module-option';
import { ConfigModule } from '@nestjs/config';
import { databaseProviders } from './database.providers';

@Module({
  controllers: [CommonController],
  providers: [CommonService, ...databaseProviders],
  imports: [ConfigModule.forRoot(ConfigModuleOption)],
  exports: [ConfigModule, ...databaseProviders],
})
export class CommonModule {}
