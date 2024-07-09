import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { Connection, dbConnection } from 'src/common/constants/connection';

@Module({
  controllers: [AdminController],
  providers: [
    AdminService,
  {
    provide: 'CONNECTION',
    useValue: dbConnection
  }]
})
export class AdminModule {}
