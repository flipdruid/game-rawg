import axios, { AxiosRequestConfig } from "axios";


export interface FetchResponse <T>{
    count: number;
    next: string | null;
    results: T[];
  }

const axiosInstance =  axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '72edfae9f3e74a8b9ef11e79a6c9db69'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res =>  res.data)
    }
}

export default APIClient;