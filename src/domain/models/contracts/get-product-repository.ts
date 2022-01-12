import {ProductModel} from "@/domain/models/product";
export const GET_PRODUCT_REPOSITORY = "GET_PRODUCT_REPOSITORY";

export interface IGetProductRepository {
    getProductRepository: (category:string) => Promise<ProductModel[]>
}