import {ProductModel} from "@/domain/models/product";

export const UPDATE_PRODUCT_SERVICE = "UPDATE_PRODUCT_SERVICE";
export interface IUpdateProductService {
    updateProductService: (id: string,data: IUpdateProductService.Params) => Promise<ProductModel>;
}
export namespace IUpdateProductService {
    export type Params = {
        id: string;
        name: string;
        price: number;
        description: string;
        category: [string];
    }
    export type Results = {
        id: string;
        name: string;
        price: number;
        description: string;
        category: [string];
    }
}