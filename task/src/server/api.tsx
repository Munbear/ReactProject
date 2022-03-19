import React, {useState, useEffect} from 'react'
import axios, {AxiosResponse} from 'axios'
import { Data } from '../types/index'

interface Response {
    data: Data[];
    loading: boolean;
    error?: Error;
}

const getResponse = ():Response => {
    const [data, setData] = useState<Data[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] =useState<Error>();

    useEffect( () => {
        setLoading(true);
        const getData = async () => {
            try{
                const responce: AxiosResponse<any> = await axios.get('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a7804447-abeb-473e-be8b-8025c4f624f6/test.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220319T171039Z&X-Amz-Expires=86400&X-Amz-Signature=723459d15497f56442be72d270420a525a968837b9cf866419654560b9f585a3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test.json%22&x-id=GetObject');
                setData(responce.data)
                setLoading(false);
            } catch(e) {
                setLoading(false);
            }
        };
        getData();
    }, []);
    return {data, loading, error};
};

export default getResponse;

