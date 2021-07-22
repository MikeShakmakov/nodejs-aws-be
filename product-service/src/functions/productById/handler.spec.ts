import { APIGatewayProxyEvent } from 'aws-lambda';
import { main } from './handler';

const mockWithId = (id: string): APIGatewayProxyEvent => ({
    body: null,
    headers: null,
    multiValueHeaders: null,
    httpMethod: null,
    isBase64Encoded: null,
    path: null,
    pathParameters: {id},
    queryStringParameters: null,
    multiValueQueryStringParameters: null,
    stageVariables: null,
    requestContext: null,
    resource: null,
})

describe('productById lambda: ', () => {
    it('should check it returns proper response in case id exists in data', async () => {
        const mock: APIGatewayProxyEvent = mockWithId("CM0081");
        const result = await main(mock);
        expect(result).toBeDefined();
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body).Product_ID).toBe("CM0081");
    });
    it('should check it returns proper response in case id does not exist in data', async () => {
        const mock: APIGatewayProxyEvent = mockWithId("someNotExistingID");
        const result = await main(mock);
        expect(result).toBeDefined();
        expect(result.statusCode).toBe(404);
        expect(JSON.parse(result.body).error).toBeDefined();
    });
});
