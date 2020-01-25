import {IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class ExerciseModelDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    sets: number;

    @IsNumber()
    repetitions: number;
}
