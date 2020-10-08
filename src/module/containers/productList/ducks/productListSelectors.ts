/**
 * Selectors for Product lIst Page
 */
import { createSelector } from 'reselect';
import { ApplicationState } from '../../../app-ducks/types';
import { PorductListState } from './types';

export const fetchProductListData = (state: ApplicationState) => state.productListStateData;

const productListSelectors = {
    getProductListData: createSelector(
        [fetchProductListData],
        (data: PorductListState) => data
    )
};

export default productListSelectors;