export interface IBigJsonService {

    stringify(data: object): Promise<string>;
    parse(stream: string): Promise<object>;
}
