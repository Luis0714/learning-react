import Category from "./Category";

export default interface Product {
    id: number;
    title: string;
    images: string[];
    description: string;
    price: number;
    slug: string;
    category: Category;
}

