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
    it('should check it returns proper response in case id exists in data', (done) => {
        const mock: APIGatewayProxyEvent = mockWithId("CM0081");
        const result = main(mock);
        expect(result).toBeDefined();
        result.then(data => {
            expect(data.statusCode).toBe(200);
            expect(JSON.parse(data.body).Product_ID).toBe("CM0081");
            done();
        });
    });
    it('should check it returns proper response in case id does not exist in data', (done) => {
        const mock: APIGatewayProxyEvent = mockWithId("someNotExistingID");
        const result = main(mock);
        expect(result).toBeDefined();
        result.then(data => {
            expect(data.statusCode).toBe(404);
            expect(JSON.parse(data.body).error).toBeDefined();
            done();
        });
    });
});
