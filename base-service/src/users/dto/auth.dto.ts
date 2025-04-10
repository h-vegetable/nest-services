import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RegisterDTO {
  @IsNotEmpty({ message: '请输入用户昵称' })
  @ApiProperty({ example: 'name' })
  readonly name: string;

  /**
   * 用户密码
   */
  @IsNotEmpty({ message: '请输入密码' })
  @ApiProperty({ example: '888888' })
  readonly password: string;

  /**
   * 二次输入密码
   */
  @IsNotEmpty({ message: '请再次输入密码' })
  @ApiProperty({ example: '888888' })
  readonly passwordRepeat: string;
}
export class LoginDTO {}
export class LoginResponseDTO {}
export class UserInfoDTO {
  @ApiProperty({ example: '然叔' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '123456' })
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: '15906475@qq.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'cookieboty' })
  @IsNotEmpty()
  avatar: string;

  @ApiProperty({ example: 'frontend' })
  @IsNotEmpty()
  job: string;

  @ApiProperty({ example: '前端开发工程师' })
  @IsNotEmpty()
  jobName: string;

  @ApiProperty({ example: 'cookieboty' })
  @IsNotEmpty()
  organization: string;

  @ApiProperty({ example: 'beijing' })
  @IsNotEmpty()
  location: string;

  @ApiProperty({ example: 'cookieboty' })
  @IsNotEmpty()
  personalWebsite: string;

  @ApiProperty({ example: '{}' })
  permissions?: object | [];

  salt?: string; // 密码盐, 加密密码时需要
}

export class RegisterSMSDTO {}

export class RegisterCodeDTO {}
