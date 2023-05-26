import { IsNotEmpty, IsString } from "class-validator";

export class addContactsDto{
    @IsNotEmpty()
    @IsString()
    readonly name: string;
    readonly phoneNumber: string;
}

export class updateContactsDto{
    @IsNotEmpty()
    @IsString()
    readonly name : string;
    readonly phoneNumber: string;
}