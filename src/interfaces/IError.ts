export interface IError extends Error {
    error(massage: string): void;
}

export interface ErrorInterface extends Error {
    error: object;
}
