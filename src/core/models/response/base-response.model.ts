export interface BaseResponse<T = any> { // T tipi ile generic yapabiliriz
  data: T; // data bir alan olarak tanımlanır
  message: string | null;
  status: ResponseStatus;
}

export enum ResponseStatus {
  Ok,
  Error,
  Forbidden,
  Unauthorized,
  Invalid,
  NotFound,
}
