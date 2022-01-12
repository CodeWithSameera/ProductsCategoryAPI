import {AddProductParams, ProductModel} from "@/domain/models/product";
import {ProductModelSchema} from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/product";
import {IAddProductRepository} from "@/domain/models/contracts/add-product-repository";

export class ProductMongooseRepositoryAdapter implements IAddProductRepository{
    map(data: any): any {
        const {_id,  id,name, price,description,category} = data
        return Object.assign({}, {id: _id.toString(), name, price,description,category})
    }
    async addProductRepository(data: AddProductParams): Promise<ProductModel> {
        return await ProductModelSchema.create(data);
    }
    async getProductRepository(category:string): Promise<any[]> {
        return ProductModelSchema.find({ category: { "$in" : [category]}  });
    }
    async updateProductRepository(id: string,data: AddProductParams): Promise<ProductModel> {
        const filter = { id: id};
       return ProductModelSchema.findOneAndUpdate(filter,data);
    }
}
