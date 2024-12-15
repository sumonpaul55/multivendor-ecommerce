export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TResponse<T> = {
  status: string;
  message: string;
  success: boolean;
  data?: T;
  error?: TError;
};
