import { ConfigModuleOptions } from '@nestjs/config';
import Config from './configration';

const configModuleOptions: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: ['.env'],
  load: [Config],
};

export default configModuleOptions;
