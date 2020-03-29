import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UserFeatureProvider } from './schemas/users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      UserFeatureProvider
    ])
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule { }