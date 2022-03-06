import shopData from "../Data/shopData";

class ShopApi {
    constructor() {
    }

    getShopById(market) {
        return shopData.find( (market) => market.shopId == market);
    }

    getMallList() {
        return shopData.filter( (mall) => mall.shopId > 0 && mall.shopId < 7);
    }

    getBrandList() {
        return shopData.filter( (brand) => brand.shopId > 6 && brand.shopId < 13);
    }

}

export default ShopApi;