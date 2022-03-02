import productsData from "../Data/productsData";
import Category from "../Data/categories";

class ProductsApi {
    constructor() {
    }

    getProductsByCategory(category) {
        return productsData.filter((product) => product.category === category);
    }

    getProductsById(id) {
        return productsData.find((product)=> product.id == id);
    }

    getBestProducts() {
        return productsData.filter((product)=> product.category === Category.JEWELLERY);
    }

    getSaleProducts() {
        return productsData.filter( (product)=> product.id > 48 && product.id < 55);
    }

    getMallList() {
        return productsData.filter( (mall) => mall.id > 199 && mall.id < 251);
    }

    getBrandList() {
        return productsData.filter( (brand) => brand.id > 99 && brand.id < 151);
    }

    getRecentProducts() {
        const copyProductsData = productsData;
        copyProductsData.sort((before, after) => before.id < after.id ? 1 : -1);
        return copyProductsData;
    }
}

export default ProductsApi;
