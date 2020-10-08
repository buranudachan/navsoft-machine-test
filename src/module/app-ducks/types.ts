/**
 * Global Interface
 */

import { RouterState } from 'connected-react-router';
import { PorductListState } from '../containers/productList/ducks/types';

// Application State
export interface ApplicationState {
    //
    application: any;
    router: RouterState;
    productListStateData: PorductListState;
}
