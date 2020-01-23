import React ,{Component} from 'react'
import axios from 'axios';
import { TextField } from '@material-ui/core';
import {Button} from "react-bootstrap"

class FileUpload   extends Component{


    UPLOAD_ENDPOINT = 'https://surveyglance.herokuapp.com/api/tache/facade/question/upload/excel?surveyId='+this.props.surveyId+'&userId='+this.props.userId
    constructor(props){
        super(props);
        this.state={
            file:null
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.uploadFile = this.uploadFile.bind(this)
    }


    async uploadFile(file){


        const formData = new FormData();

        formData.append('file',file)
        console.log(formData)

        return  await axios.post(this.UPLOAD_ENDPOINT, formData,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        );
      }

    async onSubmit(e){
        e.preventDefault() 
        let res = await this.uploadFile(this.state.file);
        console.log(res.data);
    }
    onChange(e) {
        this.setState({file:e.target.files[0]})
    }



    render() {
        return (
            <center>
          <form onSubmit={ this.onSubmit }>
            <p> Please upload the excel containing the questions</p>   
            <TextField variant="outlined" type="file" onChange={ this.onChange } /><br/>
            <Button variant="login_btn" type="submit">Upload File</Button>
          </form>
          </center>
       )
      }
}
export default FileUpload