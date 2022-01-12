import { CategoryModel } from '@/domain/models/category';
import { model, Schema } from "mongoose";

const schema = new Schema<CategoryModel>({
    id: {type: String},
    name: {type: String},
    parentCategory: {type: String}
});

export const CategoryModelSchema = model<CategoryModel>('categories', schema);
