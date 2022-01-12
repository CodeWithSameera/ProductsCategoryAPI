import {Mapping, Get, Adapter} from "@tsclean/core";
import {GET_CATEGORY_SERVICE, IGetCategoryService} from "@/domain/use-cases/get-category-service";

@Mapping('api/v1/get-category')
export class GetCategoryController {

    constructor(
        @Adapter(GET_CATEGORY_SERVICE) private readonly getCategoryService: IGetCategoryService

    ) {
    }

    @Get( )
    async getCategoryController(): Promise<any> {
        return await this.getCategoryService.getCategoryService();
    }
}
