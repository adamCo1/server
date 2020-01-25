import {IsNotEmpty, IsObject, IsString} from 'class-validator';

export class ModelDataDto<T> {

    @IsNotEmpty()
    @IsObject()
    model: T ;

    @IsString()
    collectionName?: string;
}
