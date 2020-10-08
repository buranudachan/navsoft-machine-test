/**
 * List of mock files
 */
import { productList } from './__mocks__';
import { MockPathInterface } from './ducks/types';

const mockedPath: MockPathInterface = {
    '/products': productList
};

export default mockedPath;