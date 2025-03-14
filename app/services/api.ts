import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

export const api = {
    getProducts: async (limit = 10) => {
        try {
            const response = await axios.get(`${BASE_URL}/products?limit=${limit}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },

    getProductsByCategory: async (category: string, limit = 10) => {
        try {
            const response = await axios.get(`${BASE_URL}/products/category/${category}?limit=${limit}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching products by category:', error);
            throw error;
        }
    },

    getCategories: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/products/categories`);
            return response.data;
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw error;
        }
    },

    searchProducts: async (query: string) => {
        try {
            const response = await axios.get(`${BASE_URL}/products/search?q=${query}`);
            return response.data;
        } catch (error) {
            console.error('Error searching products:', error);
            throw error;
        }
    }
}; 