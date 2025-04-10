import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? HttpStatus.OK
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const code =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.message
        : 'Internal server error';

    console.log(exception);

    response.status(status).json({
      code: code,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: message,
    });

    // 生产环境下可以在这里添加日志记录逻辑
    if (process.env.NODE_ENV === 'production') {
      console.error(exception);
    }
  }
}
