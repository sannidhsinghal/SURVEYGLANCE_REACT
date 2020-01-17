import React,{Component} from 'react'
import axios from 'axios'
import MUIDataTable from 'mui-datatables'

class UserData extends Component {
    constructor(){
        super()
        this.state={
            data: []
        }
    }

    componentDidMount(){
        axios.get(`https://surveyglance.herokuapp.com/api/tache/facade/user/admin/getRespondents`)
        .then(result => {
            console.log(result)
            this.setState(
                {data: result.data});
                console.log(this.state.data);
             } )
        
    }
    render(){
        const columns = ["FULLNAME", "LOCATION", "CURRENTLOCATION", "USERSTATUS"]
        const data=[]
        this.state.data.map(res=>{
            const object=[]
           object.push(res.fullName,res.location,res.currentLocation,res.userStatus)
            data.push(object)
        })
        const options = {
             filterType: 'dropdown',
       
        };
        return(
            <div>
                <MUIDataTable
                title={"Current Location"}
                columns={columns}
                data={data}
                options={options}
                />
                </div>
        )
    }
}
export default UserData