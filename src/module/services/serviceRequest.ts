/**
 * Calling REST API
 */

import Axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { merge } from 'lodash';
import { config } from '../configurations/api-config';
import mockedService from './mockedService';
const USE_MOCK = process.env.REACT_APP_USE_MOCK;

const appConfig = {
    baseURL: config.baseUrl,
    headers: config.headers
};

class ServiceRquest {
    public request = async (args: AxiosRequestConfig) => {
        const options: AxiosRequestConfig = {
            ...appConfig,
            ...args
        };

        return new Promise((resolve, reject) => {
            const mockOptions = merge({}, options);

            const controledAxios =
                USE_MOCK ?
                    mockedService(mockOptions) :
                    Axios(options);

            controledAxios.then(async (Response: AxiosResponse) => {
                resolve({ success: Response });
            }).catch(async (error: AxiosError) => {
                // tslint:disable no-console
                console.log('API error', error);

                const exceptionHandler = new Error();
                let result = {};

                result = [{
                    errorCode: 'errorCode',
                    header: 'errorHeader',
                    message: 'error message'
                }];

                exceptionHandler.message = JSON.stringify(result);

                reject(exceptionHandler);
            });
        });
    }
}

const XHRInstance = new ServiceRquest();

export { XHRInstance as serviceRequest };