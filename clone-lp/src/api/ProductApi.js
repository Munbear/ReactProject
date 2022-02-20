import allData from '../Data/allData';
import Category from '../Data/categories';

class ProductApi {
  constructor() {}

  getProductsByCategory(category) {
    return allData.filter((product) => product.category === category);
  }

  getProductById(id) {
    return allData.find((product) => product.productsN == id);
  }

  getBestProducts() {
    return allData.filter((product) => product.category === Category.JEWELLERY);
  }

  getRecentProducts() {
    const copyAllData = allData;
    copyAllData.sort((before, after) =>
      before.productsN < after.productsN ? 1 : -1
    );
    return copyAllData;
  }
}

export default ProductApi;
