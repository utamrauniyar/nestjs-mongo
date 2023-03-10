import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { from, Observable } from 'rxjs';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserPostEntity } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserPostEntity)
    private readonly userPostRepository: Repository<UserPostEntity>,
  ) {}

  createPost(userPost: CreateUserDto): Observable<CreateUserDto> {
    return from(this.userPostRepository.save(userPost));
  }

  findAllUsers(): Observable<CreateUserDto[]> {
    return from(this.userPostRepository.find());
  }

  updatePost(
    userId: number,
    userPost: CreateUserDto,
  ): Observable<UpdateResult> {
    return from(this.userPostRepository.update(userId, userPost));
  }

  deletePost(userId: number): Observable<DeleteResult> {
    return from(this.userPostRepository.delete(userId));
  }
}
