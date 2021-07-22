export type ResponseType = Record<string, unknown>;
export type ErrorType = {error: string};

export const formatJSONResponse = <T>(statusCode: number, response: T) => {
  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: JSON.stringify(response)
  }
}
