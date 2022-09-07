export class ValidationError extends Error {
    public static readonly Name = 'ValidationError';
    public errorMessages: string[];

    constructor(msg: string, errorMessages?: string[]) {
        super(msg + errorMessages);
        this.name = ValidationError.Name;
        this.errorMessages = errorMessages;
    }
}
