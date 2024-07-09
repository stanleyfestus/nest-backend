import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './players/common/middleware/logger.middleware';
import { PlayersModule } from './players/players.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [PlayersModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
/* 
 Apply/use middleware
 import NestModule and AppModules implememts NestModule
*/
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    /* 
    options how to use this middleware
     */
    // options 1
    consumer.apply(LoggerMiddleware).forRoutes('api/players');

    // option 2
    /*  consumer.apply(LoggerMiddleware).forRoutes({
      path: 'api/players', 
      method: RequestMethod.POST}) */

    // option 3
    /* 
      consumer.apply(LoggerMiddleware).forRoutes(PlayersController)
      */
  }
}
