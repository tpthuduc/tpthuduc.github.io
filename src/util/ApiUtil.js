import axios from 'axios';

// var baseUrl = 'http://localhost:4000/api'
var baseUrl = process.env.REACT_APP_API_URL

export async function loadDefaultApi(endPoint) {
    return await loadApi(baseUrl + endPoint);
}

export async function loadApi(url) {
    return axios.get(url)
        .then(res => res.data)
        .catch(error => {
            error.status = (error.response && error.response.status) || 500;
            throw error;
        });
}