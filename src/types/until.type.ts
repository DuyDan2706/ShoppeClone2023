export interface successReponse<Data> {
  message: string
  data: Data
}

export interface ErrorReponse<Data> {
  message: string
  data?: Data
}
