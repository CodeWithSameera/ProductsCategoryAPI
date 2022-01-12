import {Adapter, Service} from "@tsclean/core";
import {IAddProductService} from "@/domain/use-cases/add-product-service";
import {ADD_PRODUCT_REPOSITORY, IAddProductRepository} from "@/domain/models/contracts/add-product-repository";
import {AddProductParams, ProductModel} from "@/domain/models/product";

@Service()
export class AddProductServiceImpl implements IAddProductService {
    constructor(
        @Adapter(ADD_PRODUCT_REPOSITORY) private readonly addProductRepository: IAddProductRepository
    ) {
    }

    async addProductService(data: AddProductParams): Promise<ProductModel> {
        return await this.addProductRepository.addProductRepository(data);
    }
}