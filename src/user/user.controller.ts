import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { ConfigNum } from 'src/const/const.enum';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {} // this.userService
  @Get()
  getUser(): any {
    console.log(this.configService.get('HOST_DB'));
    console.log(this.configService.get('DB'));
    return this.userService.findAll();
  }

  @Post()
  addUser(): any {
    const user = { username: 'test', password: 123456 } as User;
    return this.userService.create(user);
  }

  @Get('profile')
  getUserProfile() {
    return this.userService.findProfile(3);
  }
}
