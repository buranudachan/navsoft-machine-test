/**
 * Get mock response of API's
 */
import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';
import { isUndefined } from 'lodash';
import mockedPath from './mockResponseMapper';

const mockedService = (args: AxiosRequestConfig): AxiosPromise => {

    return new Promise((resolve, reject) => {
        if (!isUndefined(args.url) && !isUndefined(mockedPath[args.url])) {
            const response: AxiosResponse = {
                data: mockedPath[args.url],
                status: 200,
                statusText: 'Successfully fetched mocked response',
                headers: args.headers,
                config: args
            };

            resolve(response);
        } else {
            const error = new Error();
            error.message = 'URL path does not match with mocked path';

            reject(error);
        }
    });
};

export default mockedService;