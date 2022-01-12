import {Adapter, Service} from "@tsclean/core";
import {IGetCategoryService} from "@/domain/use-cases/get-category-service";
import {GET_CATEGORY_REPOSITORY, IGetCategoryRepository} from "@/domain/models/contracts/get-category-repository";
import {CategoryModel} from "@/domain/models/category";

@Service()
export class GetCategoryServiceImpl implements IGetCategoryService {
    constructor(
        @Adapter(GET_CATEGORY_REPOSITORY) private readonly getCategoryRepository: IGetCategoryRepository
    ) {
    }

     async getCategoryService(): Promise<any[]> {
        let categories = await this.getCategoryRepository.getCategoryRepository();
        let result = {}
        let key = 'Categories';
        result[key] = [];

            let upperLevel = categories.filter(value => value.parentCategory === "")

            upperLevel.forEach(value => {

                let subs = this.getSubs(categories.filter(value1 => value1.parentCategory === value.id),categories);
                let data = {
                    id : value.id,
                    name: value.name,
                    subcategories: subs
                }
                result[key].push(data);

            })
         return result[key];

    }
    getSubs(array : CategoryModel[], fullArray: CategoryModel[]): any{
        let arr = [];
        array.forEach(value => {
            let subs = this.getSubs(fullArray.filter(value1 => value1.parentCategory === value.id),fullArray);
            let data = {
                id : value.id,
                name: value.name,
                subcategories: subs
            }
            arr.push(data);
        })
        return arr;
    }
}