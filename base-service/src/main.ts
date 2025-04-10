import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateDoc } from './doc';
import { ResponseInterceptor } from './common/interceptors/response-interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  generateDoc(app);

  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
