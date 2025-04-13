import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  findOne(username: string) {
    return this.userRepository.findOne({ where: { username: username } });
  }

  create(user: User) {
    return this.userRepository.save(user);
  }

  update(id: number, user: Partial<User>) {
    return this.userRepository.update(id, user);
  }
  delete(id: number) {
    return this.userRepository.delete(id);
  }

  findProfile(id: number) {
    return this.userRepository.findOne({
      where: { id: id },
      relations: { profile: true },
    });
  }
}
