import axios from 'axios';

const api = process.env.REACT_APP_API;
const axiosService = axios.create({
  // .. where we make our configurations
  //baseURL: 'https://h0yz7ehtx8.execute-api.ap-southeast-2.amazonaws.com/dev/'
  // baseURL: "http://localhost:8000/nft/",
  // baseURL: 'https://apinft-live.treedefi.com/nft/',
  baseURL: api,
});

// Where you would set stuff like your 'Authorization' header, etc ...
// axiosService.defaults.headers.post['Authorization'] = localStorage.getItem('jwt_id_token');
// Also add/ configure interceptors && all the other cool stuff

// instance.interceptors.request...

export default axiosService;
