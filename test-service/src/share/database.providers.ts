import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const databaseType: DataSourceOptions['type'] = 'mongodb';

export const databaseProviders = [
  {
    provide: 'MONGO_DATA_SOURCE',
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const config = {
        type: databaseType,
        url: configService.get<string>('DATABASE_URL'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [`${__dirname}/../**/*.${databaseType}.entity{.ts,.js}`],
        logging: configService.get<boolean>('DATABASE_LOGGING'),
        synchronize: configService.get<boolean>('DATABASE_SYNCHRONIZE'),
      };
      const ds = new DataSource(config);
      await ds.initialize();
      return ds;
    },
  },
];
