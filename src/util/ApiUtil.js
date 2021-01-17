import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL; //  https://abc.xyz/
const apiUrl = process.env.REACT_APP_API_URL; // https://abc.xyz/api/v2/

export async function get(url) {
    const result = {};

    try {
        const response = await axios.get(url);
        result.data = response.data;
        result.statusCode = response.status || 500;
        result.isSuccess = true;
    } catch (err) {
        result.statusCode = (err.response && err.response.status) || 500;
        result.message = err.message || "";
        result.isSuccess = false;
    };
    return result;
}

/**
 * Get data, add default base url
 * @param {} endPoint 
 */
export async function baseGet(endPoint) {
    const url = baseUrl + endPoint;
    return await get(url);
}

/**
 * get data, added default api url
 * @param {*} endPoint 
 */
export async function apiGet(endPoint) {
    const url = apiUrl + endPoint;
    return await get(url);
}