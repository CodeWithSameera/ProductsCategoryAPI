import {Adapter, Service} from "@tsclean/core";
import {IUpdateProductService} from "@/domain/use-cases/update-product-service";
import {IUpdateProductRepository, UPDATE_PRODUCT_REPOSITORY} from "@/domain/models/contracts/update-product-repository";
import {ProductModel} from "@/domain/models/product";

@Service()
export class UpdateProductServiceImpl implements IUpdateProductService {
    constructor(
        @Adapter(UPDATE_PRODUCT_REPOSITORY) private readonly updateProductRepository: IUpdateProductRepository
    ) {
    }
    async updateProductService(id: string,data: IUpdateProductService.Params): Promise<ProductModel> {
        return await this.updateProductRepository.updateProductRepository(data.id,data)
    }
}