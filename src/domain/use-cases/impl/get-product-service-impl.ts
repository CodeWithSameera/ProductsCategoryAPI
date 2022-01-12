import {Adapter, Service} from "@tsclean/core";
import {IGetProductService} from "@/domain/use-cases/get-product-service";
import {GET_PRODUCT_REPOSITORY, IGetProductRepository} from "@/domain/models/contracts/get-product-repository";
import {ProductModel} from "@/domain/models/product";

@Service()
export class GetProductServiceImpl implements IGetProductService {
    constructor(
        @Adapter(GET_PRODUCT_REPOSITORY) private readonly getProductRepository: IGetProductRepository
    ) {
    }

    async getProductService(category: string): Promise<ProductModel[]> {
        return await this.getProductRepository.getProductRepository(category);
    }
}