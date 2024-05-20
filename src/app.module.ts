import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmModuleAsyncOptions } from './data/database-config/data-source';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PermissionModule } from './api/permission/pernission/pernission.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmModuleAsyncOptions),
    PermissionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
