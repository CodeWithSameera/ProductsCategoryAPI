import {Mapping, Get, Adapter, Post, Body} from "@tsclean/core";
import {ADD_CATEGORY_SERVICE, IAddCategoryService} from "@/domain/use-cases/add-category-service";
import {AddCategoryParams, CategoryModel} from "@/domain/models/category";

@Mapping('api/v1/add-category')
export class AddCategoryController {

    constructor(
        @Adapter(ADD_CATEGORY_SERVICE) private readonly addCategoryService: IAddCategoryService
    ) {
    }

    @Get()
    async getWelcome(): Promise<any> {
        return 'Welcome to the world of clean architecture'
    }

    @Post()
    async addCategoryController(@Body() data: AddCategoryParams): Promise<CategoryModel> {
        return await this.addCategoryService.addCategoryService(data);
    }
}
