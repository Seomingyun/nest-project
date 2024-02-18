import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service'; // injectable class import
import { MessagesRepository } from './messages.repository'; // injectable class import

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository], // things that can be used as dependencies for other classes
})
export class MessagesModule {}
