import * as request from "../lib/request";

const baseURL = 'http://localhost:3030/data/profile';


export const create = async (portfolioData) => {
    const result = await request.post(baseURL, portfolioData);
    
}