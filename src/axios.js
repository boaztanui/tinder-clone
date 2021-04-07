import axios from 'axios';

const instance = axios.create({
    baseURL: "https://thetinderclone-backend.herokuapp.com/"
})

export default instance;