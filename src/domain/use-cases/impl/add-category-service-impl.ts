import {Adapter, Service} from "@tsclean/core";
import {IAddCategoryService} from "@/domain/use-cases/add-category-service";
import {ADD_CATEGORY_REPOSITORY, IAddCategoryRepository} from "@/domain/models/contracts/add-category-repository";
import {AddCategoryParams, CategoryModel} from "@/domain/models/category";

@Service()
export class AddCategoryServiceImpl implements IAddCategoryService {
    constructor(
        @Adapter(ADD_CATEGORY_REPOSITORY) private readonly addCategoryRepository: IAddCategoryRepository
    ) {
    }

    async addCategoryService(data: AddCategoryParams): Promise<CategoryModel> {
        return await this.addCategoryRepository.addCategoryRepository(data);
    }
}