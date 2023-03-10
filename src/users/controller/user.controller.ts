import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  /**
   *
   * @param userPost create a new user details
   * @returns
   */
  @Post()
  create(@Body() userPost: CreateUserDto): Observable<CreateUserDto> {
    return this.userService.createPost(userPost);
  }

  /**
   *
   * @returns all user details
   */
  @Get()
  findAll(): Observable<CreateUserDto[]> {
    return this.userService.findAllUsers();
  }

  /**
   *
   * @param userId udate the value on the basis of "userId"
   * @param userPost which value want to be change
   * @returns updated user details
   */
  @Put(':userId')
  update(
    @Param('userId') userId: number,
    @Body() userPost: CreateUserDto,
  ): Observable<UpdateResult> {
    return this.userService.updatePost(userId, userPost);
  }

  /**
   *
   * @param userId delete on basis of "userId"
   * @returns
   */
  @Delete(':userId')
  delete(@Param('userId') userId: number): Observable<DeleteResult> {
    return this.userService.deletePost(userId);
  }
}
