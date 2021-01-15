import jwt_decode from 'jwt-decode';

export const jwtDecode=(token) => {
    let decoded;
    if(token) {
        try {
            decoded = jwt_decode(token);
        } catch(error) {}
    }
    return decoded;
}