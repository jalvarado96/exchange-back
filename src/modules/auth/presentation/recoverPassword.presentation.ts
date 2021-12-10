import { ApiProperty } from "@nestjs/swagger";

export class RecoverPasswordResponse {

    @ApiProperty({
        description: 'Esta es la respuesta a la recuperación del password',
        example: 'Hemos enviado un mail con las intrucciones de recuperación de contraseña'
    })
    message: string

}