export default class AlgorithmError extends Error {
    public constructor(message?: string, options?: ErrorOptions){
        super(message, options);
    }
}