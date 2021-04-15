import axios from 'axios';

export default class FlolService {
    constructor() {
        this.client = axios.create({
            baseURL: 'http://localhost:5000/',
            withCredentials: true,
            headers: {
                Authorization: '',
            },
        });
    }

    getEvent(eventId) {
        return this.client.get(`/event/${eventId}`).then((response) => response.data);
    }
}