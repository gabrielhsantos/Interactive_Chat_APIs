import { Module } from '@nestjs/common';
import { ConfigModule } from '@modules/env/config.module';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';

@Module({
  imports: [ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
