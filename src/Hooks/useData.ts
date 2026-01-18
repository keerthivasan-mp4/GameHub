
import { useEffect, useState } from "react"
import apiClient from "../component/services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";


interface FetchResponse<T>{ 
    count : number;
    results : T[];
}


const UseData =<T> (endpoint: string, requestConfig?: AxiosRequestConfig, deps?:any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(false)


    useEffect(() => {
        const Controller = new AbortController();
        setLoading(true);

        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: Controller.signal, ...requestConfig })
            .then((res) => {
                setData(res.data.results);
                setLoading(false)
            })

            .catch((err) => {
                if (err instanceof CanceledError) return;

                setError(err.message)
                setLoading(false);
            });
        return () => Controller.abort();
    }, deps?[...deps]:[]);

    return { data, error, isLoading }
}

export default UseData ;