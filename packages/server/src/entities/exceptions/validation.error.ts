import { ErrorObject } from 'ajv';

export class ValidationError extends Error {
    public static readonly Name = 'ValidationError';
    private errors: ErrorObject[];

    constructor(msg: string, errors?: ErrorObject[]) {
        super(msg);
        this.name = ValidationError.Name;
        this.errors = errors;
    }
}
