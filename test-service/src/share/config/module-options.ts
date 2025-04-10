import { ConfigModuleOptions } from '@nestjs/config';
import Config from './configuration';

const configModuleOptions: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: ['.env'],
  load: [Config],
};

export default configModuleOptions;
