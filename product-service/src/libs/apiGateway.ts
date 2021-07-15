export const formatJSONResponse = (response: Record<string, unknown>) => {
  return {
    statusCode: 200,
    body: JSON.stringify(response)
  }
}

export const formatJSONError = (statusCode: number, error: string) => {
  return {
    statusCode,
    body: JSON.stringify({error})
  }
}
