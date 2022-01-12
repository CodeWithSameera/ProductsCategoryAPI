import {AddCategoryParams, CategoryModel} from "@/domain/models/category";
export const ADD_CATEGORY_SERVICE = "ADD_CATEGORY_SERVICE"
export interface IAddCategoryService {
    addCategoryService: (data: AddCategoryParams) => Promise<CategoryModel>
}