import { IsNotEmpty, IsString } from "class-validator";

export class AddContactsDto{
    @IsNotEmpty()
    @IsString()
    readonly phoneNumber: string;
    readonly name: string;
    
}

export class UpdateContactsDto{
    @IsNotEmpty()
    @IsString()
    readonly phoneNumber: string;
    readonly name : string;
    
}