import productsData from "../Data/productsData";
import Category from "../Data/categories";

class ProductsApi {
    constructor() {
    }

    getProductsByCategory(category) {
        return productsData.filter((product) => product.category === category);
    }

    getProductsById(id) {
        return productsData.find((product)=> product.id === id);
    }

    getBestProducts() {
        return productsData.filter((product)=> product.Category === Category.JEWELLERY);
    }

    getRecentProducts() {
        const copyProductsData = productsData;
        copyProductsData.sort((before, after) => before.id < after.id ? 1 : -1);
        return copyProductsData;
    }
}

export default ProductsApi;
