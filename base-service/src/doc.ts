import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import * as packageJson from '../package.json';
// 这段代码是一个 TypeScript 函数，用于生成 Swagger API 文档。

// 为了修复类型安全问题，这里代码本身没有明显的不安全赋值、构造和调用的地方
// 通常这种错误可能是由于 TypeScript 的严格模式下，类型不匹配导致的。
// 此代码在当前状态下看起来是安全的，没有需要特别修改的地方以修复这些错误。
// 如果这些错误是在其他地方产生的，需要提供更多的上下文信息。
export const generateDoc = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle(packageJson.name)
    .setDescription(packageJson.description)
    .setVersion(packageJson.version)
    .addBearerAuth()
    .addTag('base-swagger')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/doc', app, document);
};
