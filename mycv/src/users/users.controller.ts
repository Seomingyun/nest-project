import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Query,
  Delete,
  NotFoundException,
  UseInterceptors, // 나가는 응답을 가로채서 조작
  ClassSerializerInterceptor, // 나가는 응답을 가로채서 조작
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
// import { serializeInterceptor } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';

@Controller('auth')
@Serialize(UserDto) // 커스텀 데코레이터 -> 모든 응답에 password는 포함하지 않음
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    // 검증이 필요 -> dto를 생성하고 그 안에 pipe를 설정해야 함

    this.usersService.create(body.email, body.password);
  }

  // @UseInterceptors(ClassSerializerInterceptor)
  // @UseInterceptors(new serializeInterceptor(UserDto)) // 너무 길음
  // @Serialize(UserDto) // 커스텀 데코레이터
  @Get('/:id')
  async findUser(@Param('id') id: string) {
    // 요청을 통해서 들어오는 모든 param은 string임
    // 만약, service에서 다른 type을 원한다면 바꿔주어야 함
    console.log('hander is running');
    const user = await this.usersService.findOne(parseInt(id));

    if (!user) {
      throw new NotFoundException('user not found');
    }

    return user;
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(parseInt(id), body);
  }
}
