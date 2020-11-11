export default class ServiceDTOne {
    domain_url: string;
    api_key: string;
    api_secret: string;
    constructor(domain_url: string, api_key: string, api_secret: string);
    getAllProduct: () => Promise<void>;
    getProductByType: (type: string) => Promise<any>;
    getProductByService_Id: (service_id: number) => Promise<any>;
    getProductByCountryISO: (isoCode: string) => Promise<any>;
    getProductById: (product_id: number) => Promise<any>;
    getProductByOperatorID: (operator_id: number) => Promise<void>;
    getBalances: () => Promise<void>;
    createTransaction: (data: object) => Promise<void>;
    getTransactionById: (transaction_id: number) => Promise<void>;
    getAllListofTransaction: () => Promise<void>;
    confirmTransaction: (transaction_id: number) => Promise<void>;
    cancelTransaction: (transaction_id: number) => Promise<void>;
}
