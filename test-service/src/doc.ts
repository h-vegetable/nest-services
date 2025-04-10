import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const generateDoc = (app) => {
  const config = new DocumentBuilder()
    .setTitle('Test Service')
    .setDescription('Test Service API description')
    .setVersion('1.0')
    .addTag('test')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/doc', app, document);
};
