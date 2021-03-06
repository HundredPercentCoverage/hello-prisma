import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, PostModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
