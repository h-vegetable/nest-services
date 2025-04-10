import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateDoc } from './doc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  generateDoc(app);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((err) => {
  console.error(err);
});
