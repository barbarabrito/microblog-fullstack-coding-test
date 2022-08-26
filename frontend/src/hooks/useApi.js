import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000",
})

export const useApi = () => ({
    
    createPost: async (text) => {
        const response = await(api.post('/post/send', {text}))
        return response.data;
    },
    getAllPosts: async () => {
        const response = await(api.get('post//get/all'))
        return response.data;
    },
    removePost: async (id) => {
        const response = await(api.delete(`post/${id}`))
        return response.data;
    }
});