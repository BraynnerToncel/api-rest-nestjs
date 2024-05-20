// import { Logger } from '@nestjs/common';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => ({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: ['src/data/entities/api/**/*.ts'],
    ssl: process.env.POSTGRES_SSL === 'true',
    extra: {
      ssl:
        process.env.POSTGRES_SSL === 'true'
          ? {
              rejectUnauthorzed: false,
            }
          : null,
    },
  }),
};
