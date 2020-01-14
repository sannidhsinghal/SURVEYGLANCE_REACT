import React,{Component} from 'react'
import {dataGet} from './GetData'
import Card from 'react-bootstrap/Card'
import Figure from 'react-bootstrap/Figure'
import Popover from 'react-bootstrap/Popover'





class ResponseDetails extends Component{
    constructor(){
        super();
        this.state={
            response:[],
            view:""
        }
}


componentDidMount(){
    dataGet('/response/details/'+this.props.location.state.data[0].responseId)
    .then(res =>{
        this.setState({
            response:res,
        })
    })
  console.log(this.state.response)
}


zoomImage(params){
  console.log("Zoom image")
  return(
    // <Popover>
    // <Popover.Content>
    <Figure>
    <Figure.Image
      src={params}
    />
    ></Figure>
    // </Popover.Content>    
    // </Popover>
  )
}

renderSwitch(params){
   switch(params.question.itemType.code){
       case 'Media':
               console.log(params)
               return(
                   <Figure onClick={this.zoomImage(params.responseItem)}>
                   <Figure.Image 
                     width={171}
                     height={180}
                     //alt="171x180"
                     src={params.responseItem}
                   />
                 </Figure>
               )
           
       case 'Text':
        console.log(params)
           return(
               <div>
                {params.responseItem}   
               </div>
           )    
   }
}





render(){

    const view=""
    return(
    <div style={{marginTop:"60px"}}>
    <Card>
    <Card.Header>This is the header</Card.Header>    
    <Card.Body>
     <ul>          
    {this.state.response.map(res=>{
        console.log(res.question.itemType.code)
        return(
            <li style={{marginLeft:"80px"}} key={res.responseItem}>    
        <b>{"Q."}{" "}{" "}{JSON.parse(res.question.item).title}</b><br/>
            {this.renderSwitch(res)}
            </li>
        )
    })}
    </ul>
    </Card.Body> 
    </Card>    
    </div>
    )
   }
}
export default ResponseDetails
 