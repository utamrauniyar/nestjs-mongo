import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPostEntity } from './models/user.model';

@Module({
  imports: [TypeOrmModule.forFeature([UserPostEntity])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
