import axios from 'axios';
export default () => {
    return axios.create({
      // baseURL: 'https://www.thesportsdb.com/api/v1/json/'
      baseURL: 'http://localhost:8080/api/v1/json/'
    })
}