/**
 * Register all API's
 */

import { config, Method } from '../configurations/api-config';
import { serviceRequest } from './serviceRequest';
/** Get Product list */
export async function getProductLists() {
    const options = {
        method: Method.GET,
        url: config.apis.productApi
    };

    return serviceRequest.request(options);
}
