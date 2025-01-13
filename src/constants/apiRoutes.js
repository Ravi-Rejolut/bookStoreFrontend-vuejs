
const BASE_URL = "http://localhost:3001/api/v1";

export const API_ROUTES={
    LOGIN:`${BASE_URL}/auth/login`,
    SIGNUP:`${BASE_URL}/auth/signup`,
    ME:`${BASE_URL}/auth/me`,
    DASHBOARD:`${BASE_URL}/dashboard`,
    BOOKS:`${BASE_URL}/book/all`,
    GET_ALL_CATEGORIES:`${BASE_URL}/book/category`,
    GET_CATGORY_BY_ID:`${BASE_URL}/book/category`,
    GET_ALL_AUTHOR:`${BASE_URL}/book/author`,
}

