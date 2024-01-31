type ResponseErrorType = 'BAD_REQUEST' | 'UNAUTHORIZED';

export type ResponseError = {
  status: ResponseErrorType,
  data: { message: string }
};

export type ResponseSuccess<Type> = {
  status: 'SUCCESSFUL' | 'CREATED',
  data: Type;
};

export type ServiceResponse<Type> = ResponseSuccess<Type> | ResponseError;