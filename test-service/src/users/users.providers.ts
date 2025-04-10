import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from './entities/user.mongodb.entity';

export const userProviders: Provider[] = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['MONGO_DATA_SOURCE'],
  },
];
