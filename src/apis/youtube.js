import axios from 'axios';

const KEY = 'AIzaSyDUChZhtZQ8XiRaC3sLdPQi5TsACRCnx7E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
});