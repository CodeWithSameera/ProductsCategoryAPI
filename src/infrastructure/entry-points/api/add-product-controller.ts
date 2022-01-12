import {Mapping, Get, Post, Body, Adapter} from "@tsclean/core";
import {AddProductParams, ProductModel} from "@/domain/models/product";
import {ADD_PRODUCT_SERVICE, IAddProductService} from "@/domain/use-cases/add-product-service";

@Mapping('api/v1/add-product')
export class AddProductController {

    constructor(
        @Adapter(ADD_PRODUCT_SERVICE) private readonly addProductService: IAddProductService
    ) {
    }

    @Post()
    async addProductController(@Body() data: AddProductParams): Promise<ProductModel> {
        return await this.addProductService.addProductService(data);
    }
}
