import React, {useEffect, useState} from 'react';
import * as Style from '../styles/GalleryStyle'
import getResponse from "../server/api";

const Gallery = () => {
    const {data} = getResponse();
    return(
        <>
            <Style.GallerySection>
                <article>
                    {data.map((image,index)=>{
                        return (<img src={image._id} />)
                    })}
                    <img  />
                </article>
            </Style.GallerySection>
        </>
    )
}

export default Gallery;