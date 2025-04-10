import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginDTO {
  // 手机号
  @IsNotEmpty({ message: '请输入手机号' })
  @ApiProperty({ example: '13800000000' })
  readonly phoneNumber: string;

  @ApiPropertyOptional({ description: '登录名' })
  readonly username: string;

  @IsNotEmpty({ message: '请输入密码' })
  @ApiProperty({ example: '123456' })
  readonly password: string;
}
