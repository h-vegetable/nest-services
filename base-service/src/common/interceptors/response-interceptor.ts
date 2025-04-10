import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        // 统一响应格式
        const response = {
          code: '0',
          message: 'success',
          data: this.removeSensitiveFields(data),
        };
        return response;
      }),
    );
  }

  private removeSensitiveFields(data: any): any {
    if (!data) return data;

    // 处理数组情况
    if (Array.isArray(data)) {
      return data.map((item) => this.removeSensitiveFields(item));
    }

    // 处理对象情况
    if (typeof data === 'object') {
      const { password, salt, ...rest } = data;
      return rest;
    }

    return data;
  }
}
