/**
 * Fetch config env wise
 */

import dev from './dev';
import prod from './prod';

let config = dev;
if (process.env.REACT_APP_ENV === 'prod') {
    config = prod;
} else {
    config = dev;
}

enum Method {
    GET = 'get',
    POST = 'post'
};

export { config, Method };