import { MessagesService } from './messages.service';
import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
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
    async getMessage(@Param('id') id: string){
        const message= await this.messagesService.findOne(id);
        if(!message){
            throw new NotFoundException("message was not found!");
        }

        return message;

    }
}
