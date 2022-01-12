import {AddCategoryController} from "@/infrastructure/entry-points/api/add-category-controller";
import {AddProductController} from "@/infrastructure/entry-points/api/add-product-controller";
import {GetCategoryController} from "@/infrastructure/entry-points/api/get-category-controller";
import {GetProductController} from "@/infrastructure/entry-points/api/get-product-controller";
import {UpdateProductController} from "@/infrastructure/entry-points/api/update-product-controller";

export const controllers = [
    AddCategoryController,
    AddProductController,
    GetCategoryController,
    GetProductController,
    UpdateProductController
];