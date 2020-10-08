/**
 * Dev config
 */

import { ConfigInterface } from './configTypes';

const dev: ConfigInterface = {
    baseUrl: 'https://api.printful.com',
    apis: {
        productApi: '/products'
    },
    headers: {
        'Content-Type': 'application.json'
    }
};

export default dev;