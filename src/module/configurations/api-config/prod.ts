/**
 * Prod config
 */

import { ConfigInterface } from './configTypes';

const prod: ConfigInterface = {
    baseUrl: '',
    apis: {
        countryApi: '/countries',
        loginApi: '/login'
    },
    headers: {
        'Content-Type': 'application.json'
    }
};

export default prod;