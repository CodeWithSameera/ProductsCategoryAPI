import {CategoryModel} from "@/domain/models/category";
export const GET_CATEGORY_REPOSITORY = "GET_CATEGORY_REPOSITORY";

export interface IGetCategoryRepository {
    getCategoryRepository: () => Promise<CategoryModel[]>
}