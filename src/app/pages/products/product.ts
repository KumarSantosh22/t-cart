export interface Product{
    name: string;
    image: string;
    colors: string[];
    description: string;
    originalPrice: number;
    discountedPrice: number;
    discountPercentage: number;
    showDiscount: boolean;
}