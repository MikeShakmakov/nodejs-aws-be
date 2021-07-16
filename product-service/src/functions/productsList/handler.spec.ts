import { APIGatewayProxyEvent } from 'aws-lambda';
import { main } from './handler';

describe('productById lambda: ', () => {
    const mock: APIGatewayProxyEvent = {
        body: null,
        headers: null,
        multiValueHeaders: null,
        httpMethod: null,
        isBase64Encoded: null,
        path: null,
        pathParameters: null,
        queryStringParameters: null,
        multiValueQueryStringParameters: null,
        stageVariables: null,
        requestContext: null,
        resource: null,
    };

    it('should check it returns proper response', (done) => {
        const result = main(mock);
        expect(result).toBeDefined();
        result.then(data => {
            expect(data.statusCode).toBe(200);
            expect(JSON.parse(data.body).products.length).toBeDefined();
            done();
        });
    });
});
