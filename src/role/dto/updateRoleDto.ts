import { IsNotEmpty, IsOptional } from 'class-validator';

export class RoleUpdateDto {

    @IsOptional()
    @IsNotEmpty({
        message: 'Debe proporcionar el nombre'
    })
    name: string;

    @IsOptional()
    @IsNotEmpty({
        message: 'Debe proporcionar la descripción'
    })
    description: string;

}
