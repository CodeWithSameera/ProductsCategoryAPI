import {AddCategoryParams, CategoryModel} from "@/domain/models/category";
export const ADD_CATEGORY_REPOSITORY = "ADD_CATEGORY_REPOSITORY"
export interface IAddCategoryRepository {
    addCategoryRepository: (data: AddCategoryParams) => Promise<CategoryModel>;
}