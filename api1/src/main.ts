import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { mapEnvToConfiguration } from '@modules/env/map-env-to-configuration';
import { config } from '@modules/document/doc-builder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  const { api } = mapEnvToConfiguration();
  await app.listen(api.port);
}
bootstrap();
