import axios from 'axios';

export default {
    getKeywords: async () => {
        return await axios.get('/api/keywords')
            .then(({ data: result }) => {
                return result.map((keyword) => {
                    return { name: keyword };
                });
            })
    },

    getProducts: async (keywords) => {
        return await axios.get('/api/products/search/findByKeywords', {
            params: {
                keywords: keywords
            }
        }).then(({ data: result }) => {
            return result;
        });
    }
}