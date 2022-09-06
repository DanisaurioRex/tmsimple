export class ValidationError extends Error {
    public static readonly Name = "ValidationError";
    private errors: any[]

    constructor(msg: string, errors?: any[]) {
        super(msg);
        this.name = ValidationError.Name;
        this.errors = errors;
    }
}