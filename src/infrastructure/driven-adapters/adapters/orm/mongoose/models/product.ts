import { ProductModel } from '@/domain/models/product';
import { model, Schema } from "mongoose";

const schema = new Schema<ProductModel>({
    id: {type: String},
    name: {type: String},
    price: {type: Number},
    description: {type: String},
    category: {type: [String]}
});

export const ProductModelSchema = model<ProductModel>('products', schema);
