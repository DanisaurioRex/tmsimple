import { CustomError } from 'ts-custom-error'

export class ValidationError extends Error {
    private errors: any[]

    constructor(msg: string, errors?: any[]) {
        super(msg);
        this.name = "ValidationError";
        this.errors = errors;
    }
}