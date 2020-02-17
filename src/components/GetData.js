import axios from 'axios';

//Created service for getting Data 
export  function dataGet(string) {
       return  axios.get(`https://surveyglance.herokuapp.com/api/tache/facade`+string)
           .then(res => res.data)
   }
export function dataPost(string,data) {
        return axios.post(`https://surveyglance.herokuapp.com/api/tache/facade`+string,data)
            .then(res => res.data)
    }   