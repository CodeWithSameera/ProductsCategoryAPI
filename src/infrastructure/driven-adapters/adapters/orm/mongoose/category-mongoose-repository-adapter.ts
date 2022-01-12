import {AddCategoryParams, CategoryModel} from "@/domain/models/category";
import {CategoryModelSchema} from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/category";
import {IAddCategoryRepository} from "@/domain/models/contracts/add-category-repository";

export class CategoryMongooseRepositoryAdapter implements IAddCategoryRepository{

    map(data: any): any {
        const {_id, name, parentCategory} = data
        return Object.assign({}, {id: _id.toString(), name, parentCategory})
    }

    async addCategoryRepository(data: AddCategoryParams): Promise<CategoryModel> {
        return await CategoryModelSchema.create(data);
    }
    async getCategoryRepository(): Promise<CategoryModel[]> {
        return CategoryModelSchema.find();
    }
}
