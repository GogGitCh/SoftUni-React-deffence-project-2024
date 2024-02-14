import * as request from "../lib/request";

const baseURL = "http://localhost:3030/users";

// export const register = (email, password) => {
//     const bri = request.post(`${baseURL}/register`, {email, password});
//     console.log(bri);
// };


export const register = async (email, password) => {
    try {
        const bri = await request.post(`${baseURL}/register`, { email, password });
        console.log(bri);
        return bri;
        
    } catch (error) {
        console.error(error);
        throw error;
    }
};