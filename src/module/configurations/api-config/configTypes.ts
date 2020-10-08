/**
 * Config Interface
 */
export interface ConfigInterface {
    baseUrl: string;
    apis: {
        [key: string]: string;
    };
    headers: HeadersInterface;
}

interface HeadersInterface {
    'Content-Type': string;
}