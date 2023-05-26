import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { GetAllContactsUsecase } from 'src/usecases/contacts/getAllContacts.usecase';
import { GetContactsByNameUsecase } from 'src/usecases/contacts/getContactsByName.usecase';
import { GetContactsByNumberUsecase } from 'src/usecases/contacts/getContactsByNumber.usecase';
import { UpdateContactsNumberUsecase } from 'src/usecases/contacts/updateContactsNumber.usecase';
import { CreateContactsUsecase } from 'src/usecases/contacts/createContacts.usecase';
import { DeleteContactsUsecase } from 'src/usecases/contacts/deleteContacts.usecase';
import { uptime } from 'process';
import { AddContactsDto, UpdateContactsDto} from 'src/core/dtos/Contacts.dto';


@Controller('contacts')
export class ContactsController {
    constructor(
        private readonly getAllContactsUsecase : GetAllContactsUsecase,
        private readonly getContactsByNameUsecase : GetContactsByNameUsecase,
        private readonly getContactsByNumberUsecase : GetContactsByNumberUsecase,
        private readonly updateContactsNumberUsecase : UpdateContactsNumberUsecase,
        private readonly createContactsUsecase : CreateContactsUsecase,
        private readonly deleteContactsUsecase : DeleteContactsUsecase
    ){}

    @Get('contacts')
    async getContacts(){
        const contacts = await this.getAllContactsUsecase.execute();
        return contacts;
    }

    @Get('contact')
    async getContactsByName(@Query('name',ValidationPipe) name: string){
        const contact = await this.getContactsByNameUsecase.execute(name);
        return contact;
    }

    @Get('contact')
    async getContactsByNumber(@Query('phoneNumber',ValidationPipe) phoneNumber: string){
        const contact = await this.getContactsByNumberUsecase.execute(phoneNumber);
        return contact;
    }

    @Put('contact')
    async updateContacts(@Body() updateContactsDto:UpdateContactsDto){
        const {name, phoneNumber} = updateContactsDto;
        await this.updateContactsNumberUsecase.execute(name,phoneNumber);
        return 'success';
    }

    @Delete('contact:phoneNumber')
    async deleteContacts(@Param('phoneNumber') phoneNumber: string){
    await this.deleteContactsUsecase.execute(phoneNumber);
    return 'success';   
    }

    @Post('contact')
    async addContacs(@Body() addContactsDto:AddContactsDto){
        const {name,phoneNumber} = addContactsDto;
        await this.createContactsUsecase.execute(name,phoneNumber);
        return 'success';
    }
}
