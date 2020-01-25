import axios from 'axios';


export  async function uploadFile(file,surveyId,userId){  
    const formData = new FormData();
    formData.append('file',file)
    console.log(formData)

    return  await axios.post('https://surveyglance.herokuapp.com/api/tache/facade/question/upload/excel?surveyId='+surveyId+'&userId='+userId,
     formData,{
            headers: {
                'content-type': 'multipart/form-data'
            }
          }
        );
    }


export async function uploadImage(file){

        const formData = new FormData();
        formData.append('file',file)
        console.log(formData)
        return  await axios.post('https://surveyglance.herokuapp.com/api/tache/facade/response/upload/image', 
        formData,{
            headers: {
                'content-type': 'multipart/form-data'
            }
          }
        );
      }

    // async onSubmit(e){
    //     e.preventDefault() 
    //     let res = await this.uploadFile(this.state.file);
    //     console.log(res.data);
    // }
    // onChange(e) {
    //     this.setState({file:e.target.files[0]})
    // }
