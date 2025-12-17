import axios from 'axios';

const api = (token) => {

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    if (token){
        headers["Authorization"]  = `Token ${token}`
    }

    const instance =  axios.create({
        baseURL: 'http://127.0.0.1:8000',
        headers: headers
    });

    instance.interceptors.response.use(
        (response) => response,
        (error) => Promise.reject(error)
    )

    return instance 

}


export default api;