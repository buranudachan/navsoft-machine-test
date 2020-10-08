/**
 * Api types
 */

export interface ApiResponseInterface {
    isLoading?: boolean;
    isSuccess?: boolean;
    isFail?: boolean;
}

export interface MockPathInterface {
    // tslint:disable-next-line no-any
    [kename: string]: any;
}