import { ApiProperty } from "@nestjs/swagger";

export class RegisterResponsePresentation {

    @ApiProperty({
        example: 'Te has registrado exitosamente.'
    })
    message: string

    @ApiProperty()
    accessToken: string

    @ApiProperty()
    userName: string

    @ApiProperty()
    country: string

    @ApiProperty()
    email: string

}
