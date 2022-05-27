import { MessagesService } from './messages.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';


@Controller('messages')
export class MessagesController {

    messagesService :MessagesService;
    constructor(){
        //this should be done using Dependency Injection
        this.messagesService= new MessagesService();
    }

    @Get('')
    listAllMessages(){
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body:CreateMessageDto){
            return this.messagesService.create(body.content);
    }
    @Get('/:id')
    getMessage(@Param('id') id: string){
        return this.messagesService.findOne(id);

    }
}
