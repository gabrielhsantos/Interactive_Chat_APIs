import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { mapEnvToConfiguration } from '@modules/env/map-env-to-configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { api } = mapEnvToConfiguration();
  await app.listen(api.port);
}
bootstrap();
