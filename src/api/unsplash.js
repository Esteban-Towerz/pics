import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 85364ea3b0da81b5553a34cad01ffe0064ccc0cc49aaebd9fc1085d9ef1e0d5d'
    }
})