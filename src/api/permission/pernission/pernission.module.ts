import { Permission } from './../../../data/entities/api/permission/permission.entity';
import { Module } from '@nestjs/common';
import { PermissionService } from './pernission.service';
import { PermissionController } from './pernission.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Permission])],
  controllers: [PermissionController],
  providers: [PermissionService],
})
export class PermissionModule {}
