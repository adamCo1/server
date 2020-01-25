import {Connection} from 'mongoose';

export interface IMongodbService {
    getMongoDbConnection(): Connection;
}
