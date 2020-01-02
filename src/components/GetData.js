import axios from 'axios';

//Created service for getting Data 
export function data(string) {
       return axios.get(`https://jsonplaceholder.typicode.com/`+string)
           .then(res => res.data)
   }