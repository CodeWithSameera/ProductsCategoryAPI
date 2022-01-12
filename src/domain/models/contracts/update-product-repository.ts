import {AddProductParams, ProductModel} from "@/domain/models/product";
import {IUpdateProductService} from "@/domain/use-cases/update-product-service";

export const UPDATE_PRODUCT_REPOSITORY = "UPDATE_PRODUCT_REPOSITORY";

export interface IUpdateProductRepository {
    updateProductRepository: (id: string,data:IUpdateProductService.Params) => Promise<ProductModel>;
}