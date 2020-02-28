import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';
import { TorrentsModule } from './torrents/torrent.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://caiocarnelos:123abc123@lp0-fqnap.mongodb.net/test?retryWrites=true&w=majority`),
    //                      mongodb+srv://<username>:<password>@lp0-fqnap.mongodb.net/test?retryWrites=true&w=majority
    //                      'mongodb+srv://adsonrocha:123456@cluster0-5efft.mongodb.net/test?retryWrites=true&w=majority'),
    //                      'mongodb+srv://<username>:<password>@lp0-fqnap.mongodb.net/test?retryWrites=true&w=majority'
    CoreModule, 
    CatsModule, 
    TorrentsModule, 
    AuthModule, 
    UsersModule
  ],
  controllers: [
        AppController
      ],
  providers: [AppService],
})
export class AppModule {}