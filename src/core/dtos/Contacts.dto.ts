import { IsNotEmpty, IsString } from "class-validator";

export class AddContactsDto{
    @IsNotEmpty()
    readonly phoneNumber: number;
    @IsString()
    readonly name: string;
    
}

export class UpdateContactsDto{
    @IsNotEmpty()
    readonly phoneNumber: number;
    @IsString()
    readonly name : string;
    
}