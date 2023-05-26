import { IsNotEmpty, IsString } from "class-validator";

export class AddContactsDto{
    @IsNotEmpty()
    @IsString()
    readonly name: string;
    readonly phoneNumber: string;
}

export class UpdateContactsDto{
    @IsNotEmpty()
    @IsString()
    readonly name : string;
    readonly phoneNumber: string;
}