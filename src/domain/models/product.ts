export type ProductModel = {
    id: string;
    name: string;
    price: number;
    description: string;
    category: [string];
}

export type AddProductParams = Omit<ProductModel, 'id'>
