import { DataSource } from 'typeorm';
import { User } from './entities/users.mongodb.entity';

export const UserProviders = [
  {
    // 连接databaseProviders并操作USER表
    provide: 'USER_REPOSITORY',
    useFactory: async (appDataSource) =>
      await appDataSource.getRepository(User),
    inject: ['MONGO_DATA_SOURCE'],
  },
];
