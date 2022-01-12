
export type CategoryModel = {
    id: string;
    name: string;
    parentCategory: string;
}


export type AddCategoryParams = Omit<CategoryModel, 'id'>
