import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [UserService],
})
export class AppModule {}
