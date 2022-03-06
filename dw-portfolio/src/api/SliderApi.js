import sliderImgData from "../Data/sliderImgData";

class SliderApi{
    constructor() {
    }

    getMainSliderImg() {
        return sliderImgData.filter( (slide) => slide.id > 0 && slide.id < 6);
    }


}

export default SliderApi;