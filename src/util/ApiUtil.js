import axios from 'axios';
import { REQUEST_LOGOUT } from '../actions/AuthAction';
const baseUrl = process.env.REACT_APP_API_URL;

export async function apiGet(endPoint) {
    const url = baseUrl + endPoint;
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