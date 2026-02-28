import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { ClubsModule } from './clubs/clubs.module';

@Module({
  imports: [PrismaModule, ClubsModule],
  controllers: [AppController],
})
export class AppModule {}
