import { Provider } from '@nestjs/common';
import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import * as path from 'path';

// export const DATABASE_CONNECTION = '';
const databaseType: DataSourceOptions['type'] = 'mongodb';
export const databaseProviders: Provider[] = [
  {
    provide: 'MONGO_DATA_SOURCE',
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const config = {
        type: databaseType,
        url: configService.get<string>('dabase.url'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.name'),
        entities: [path.join(__dirname, `../../**/*.mongodb.entity{.ts,.js}`)],
        logging: configService.get<boolean>('database.logging'),
        synchronize: configService.get<boolean>('database.synchronize'),
        useUnifiedTopology: true, // 修复过时引擎警告
        authSource: 'admin', // 明确认证数据库
        directConnection: true, // 优化本地连接
      };
      const ds = new DataSource(config);
      await ds.initialize();
      return ds;
    },
  },
];
