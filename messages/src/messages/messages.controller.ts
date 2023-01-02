import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from "./dtos/create-message.dto";
import { MessagesService } from "./messages.service";

@Controller("/messages")
export class MessagesController {
  messageService: MessagesService;

  constructor() {
    // DON'T DO THIS ON REAL APP, INSTEAD USE DEPENDENCY INJECTION
    this.messageService = new MessagesService();
  }

  @Get()
  listMessages() {
    return this.messageService.findAll();
  };

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content);
  }

  @Get("/:id")
  async getMessage(@Param("id") id: string) {
    const message = await this.messageService.findOne(id);
    if (!message) {
      throw new NotFoundException("message not found");
    }
    return message;
  }
}
