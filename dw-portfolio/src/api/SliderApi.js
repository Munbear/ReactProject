import sliderImgData from "../Data/sliderImgData";

class SliderApi{
    constructor() {
    }

    getMainSliderImg() {
        return sliderImgData.filter( (slide) => slide.shopId == 1);
    }

    getFindSliderById(shopId) {
        return sliderImgData.filter( (slide) => slide.shopId == shopId);
    }


}

export default SliderApi;