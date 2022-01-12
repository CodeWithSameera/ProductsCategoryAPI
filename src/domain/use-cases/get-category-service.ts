import {CategoryModel} from "@/domain/models/category";
export const GET_CATEGORY_SERVICE = "GET_CATEGORY_SERVICE";

export interface IGetCategoryService {
    getCategoryService: () => Promise<any[]>

}