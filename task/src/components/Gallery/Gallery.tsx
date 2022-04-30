import React, {useEffect, useState} from 'react';
import {GallerySection} from './GalleryStyle';
import testData from '../test';

interface Image {
    list: {
        _id:string;
    };
    key : number;
}



const Gallery = () => {
    const [data, setData] = useState<string[]>([]);


    // const getData = async () => {
    //     try{
    //         const res = await axios.get('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a7804447-abeb-473e-be8b-8025c4f624f6/test.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220320T110424Z&X-Amz-Expires=86400&X-Amz-Signature=97855773783b3c5d29520aa6918f2117ad8ababf9184d4df6a01785ba00be060&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test.json%22&x-id=GetObject');
    //         console.log(res.data)
    //     } catch (error) {
    //         return  error
    //     }
    // }
    // useEffect( () => {
    //     const getData = async () => {
    //         try{
    //             const res = await axios.get('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a7804447-abeb-473e-be8b-8025c4f624f6/test.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220320T120403Z&X-Amz-Expires=86400&X-Amz-Signature=83d8d8ae118b33d92667eb6992cf67ef00e9b39207e7d228fd9b6771a3a728b1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test.json%22&x-id=GetObject');
    //             setData(res.data);
    //         } catch (e) {
    //             console.log(e)
    //         }
    //     }
    // })

    return(
        <>
            <GallerySection>
                {testData.map( (img, index) => {
                    return(
                        <article>
                            <img src={img._id}/>
                        </article>
                    )
                })}
                <article>
                    <img/>
                </article>
            </GallerySection>
        </>
    )
}

export default Gallery;