export interface GenericResponse<T=void>{
    data: T;
    message: string;
    status?:string;
    httpStatus?:string;
    statusCode?:string;
}