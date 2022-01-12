import {Mapping, Get, Adapter, Param, Body} from "@tsclean/core";
import {GET_PRODUCT_SERVICE, IGetProductService} from "@/domain/use-cases/get-product-service";
import any = jasmine.any;
import {Query} from "@tsclean/core/dist/decorators/route-params";

@Mapping('api/v1/get-product')
export class GetProductController {

    constructor(
        @Adapter(GET_PRODUCT_SERVICE) private readonly getProductService: IGetProductService
    ) {
    }

    @Get()
    async getProductController(@Query("category") category): Promise<any> {
        return await this.getProductService.getProductService(category);
    }
}
