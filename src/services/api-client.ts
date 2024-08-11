import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '72edfae9f3e74a8b9ef11e79a6c9db69'
    }
})