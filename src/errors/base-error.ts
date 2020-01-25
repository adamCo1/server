export abstract class BaseError extends Error {
    constructor(private error: Error | string) {
        super(error instanceof Error ? error.message : error);
    }
}
