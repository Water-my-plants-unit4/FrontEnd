import axios from 'axios';

export const axiosWithAuth = () => {
const token = localStorage.getItem('token')

return axios.create({
    baseURL: 'https://water-my-plant-pt34.herokuapp.com/',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`
    }
})
}

export default axiosWithAuth;