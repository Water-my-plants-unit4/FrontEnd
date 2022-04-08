import axios from 'axios';

export const axiosWithAuth = () => {
const token = localStorage.getItem('token')

return axios.create({
    baseURL: 'https://git.heroku.com/water-my-plant-pt34.git',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`
    }
})
}

export default axiosWithAuth;