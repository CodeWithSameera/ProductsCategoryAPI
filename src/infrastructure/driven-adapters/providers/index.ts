import {CategoryMongooseRepositoryAdapter} from "@/infrastructure/driven-adapters/adapters/orm/mongoose/category-mongoose-repository-adapter";

import {AddCategoryServiceImpl} from "@/domain/use-cases/impl/add-category-service-impl";
import {ADD_CATEGORY_SERVICE} from "@/domain/use-cases/add-category-service";
import {ProductMongooseRepositoryAdapter} from "@/infrastructure/driven-adapters/adapters/orm/mongoose/product-mongoose-repository-adapter";
import {ADD_PRODUCT_REPOSITORY} from "@/domain/models/contracts/add-product-repository";
import {AddProductServiceImpl} from "@/domain/use-cases/impl/add-product-service-impl";
import {ADD_PRODUCT_SERVICE} from "@/domain/use-cases/add-product-service";
import {ADD_CATEGORY_REPOSITORY} from "@/domain/models/contracts/add-category-repository";
import {GET_CATEGORY_SERVICE} from "@/domain/use-cases/get-category-service";
import {GetCategoryServiceImpl} from "@/domain/use-cases/impl/get-category-service-impl";
import {GET_PRODUCT_SERVICE} from "@/domain/use-cases/get-product-service";
import {GetProductServiceImpl} from "@/domain/use-cases/impl/get-product-service-impl";
import {GET_CATEGORY_REPOSITORY} from "@/domain/models/contracts/get-category-repository";
import {GET_PRODUCT_REPOSITORY} from "@/domain/models/contracts/get-product-repository";
import {UPDATE_PRODUCT_REPOSITORY} from "@/domain/models/contracts/update-product-repository";
import {UPDATE_PRODUCT_SERVICE} from "@/domain/use-cases/update-product-service";
import {UpdateProductServiceImpl} from "@/domain/use-cases/impl/update-product-service-impl";

export const adapters = [
    {
        provide: ADD_CATEGORY_REPOSITORY,
        useClass: CategoryMongooseRepositoryAdapter,
    },
    {
        provide: ADD_PRODUCT_REPOSITORY,
        useClass: ProductMongooseRepositoryAdapter,
    },
    {
        provide: GET_CATEGORY_REPOSITORY,
        useClass: CategoryMongooseRepositoryAdapter,
    },
    {
        provide: GET_PRODUCT_REPOSITORY,
        useClass: ProductMongooseRepositoryAdapter,
    },
    {
        provide: UPDATE_PRODUCT_REPOSITORY,
        useClass: ProductMongooseRepositoryAdapter,
    }
]

export const services = [
    {

        provide: ADD_CATEGORY_SERVICE,
        useClass: AddCategoryServiceImpl,
    },
    {

        provide: ADD_PRODUCT_SERVICE,
        useClass: AddProductServiceImpl,
    },
    {

        provide: GET_CATEGORY_SERVICE,
        useClass: GetCategoryServiceImpl,
    },
    {

        provide: GET_PRODUCT_SERVICE,
        useClass: GetProductServiceImpl,
    },
    {

        provide: UPDATE_PRODUCT_SERVICE,
        useClass: UpdateProductServiceImpl,
    }
]