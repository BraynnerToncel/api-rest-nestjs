import { EValidPermission } from './../../../data/constant/permission/permission.constant';
import { Permission } from './../../../data/entities/api/permission/permission.entity';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class PermissionService implements OnModuleInit {
  constructor(
    @InjectRepository(Permission)
    private permissionRepository: Repository<Permission>,
  ) {}

  async onModuleInit() {
    await this.seedPermissions();
  }

  private async seedPermissions() {
    const count = await this.permissionRepository.count();
    if (count === 0) {
      const permissions: DeepPartial<Permission>[] = [];
      for (const permission of Object.values(EValidPermission)) {
        permissions.push({ permissionName: permission });
      }
      await this.permissionRepository.save(permissions);
      console.log('Permissions have been seeded');
    }
  }

  async findAll(): Promise<Permission[]> {
    return this.permissionRepository.find();
  }
}
