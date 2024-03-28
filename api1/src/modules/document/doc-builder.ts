import { DocumentBuilder } from '@nestjs/swagger';

export const config = new DocumentBuilder()
  .setTitle('Interactive Chat APIs')
  .setDescription('API Rest - NestJS')
  .setVersion('1.0')
  .build();
