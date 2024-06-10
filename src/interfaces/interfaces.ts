export interface ProductInfo {
    id:                 number;
    title:              string;
    productDescription: string;
    price:              number;
    discountPercentage: number;
    rating:             number;
    stock:              number;
    brand:              string;
    category:           string;
    thumbnail:          string;
}

export interface SingleProduct {
    title:              string;
    productDescription: string;
    price:              number;
    discountPercentage: number;
    rating:             number;
    stock:              number;
    brand:              string;
    category:           string;
}
