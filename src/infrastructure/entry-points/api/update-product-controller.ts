import {Mapping, Get, Adapter, Post, Body} from "@tsclean/core";
import {IUpdateProductService, UPDATE_PRODUCT_SERVICE} from "@/domain/use-cases/update-product-service";
import {AddProductParams, ProductModel} from "@/domain/models/product";

@Mapping('api/v1/update-product')
export class UpdateProductController {

    constructor(
        @Adapter(UPDATE_PRODUCT_SERVICE) private readonly updateProductService: IUpdateProductService
    ) {
    }
    
    // Example function
    @Post()
    async updateProductController(@Body() data: IUpdateProductService.Params): Promise<ProductModel> {
        return await this.updateProductService.updateProductService(data.id,data);
    }
}
