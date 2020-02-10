import React from "react";
import {TextField} from "@material-ui/core"
import {Card} from "react-bootstrap"

export function Text(){
    return(
         <div>
         <Card style={{ display:'flex', justifyContent:'center' }}>
         <Card.Body>
         
         <form> 
         <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />
         <br/>
         </form> 
         </Card.Body>
         </Card>
         </div>
    )}

export function Signature(){
    return(
         <div>
         <Card style={{ display:'flex', justifyContent:'center' }}>
         <Card.Body>
    
         <form> 
         <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />
         <br/>
         </form> 
         </Card.Body>
         </Card>
         </div>
    )}
export function Rating(){
    return(
         <div>
         <Card style={{ display:'flex', justifyContent:'center' }}>
         <Card.Body  >

         <form> 
         <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />
         <br/>
         </form> 
         </Card.Body>
         </Card>
         </div>
    )}
export function File_Upload(){
    return(
         <div>
         <Card style={{ display:'flex', justifyContent:'center' }}>
         <Card.Body  >
         <form> 
         <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />
         <br/>
         </form> 
         </Card.Body>
         </Card>
         </div>
    )}
  
export function Email(){
    return(
         <div >
         <Card style={{ display:'flex', justifyContent:'center' }}>
         <Card.Body>
         <form> 
         <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
         <br/>
         <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />
         <br/>
         </form> 
         </Card.Body>
         </Card>
         </div>
         
    )}
       export function BarCode(){
        return(
             <div >
             <Card style={{ display:'flex', justifyContent:'center' }} align="right">
             <Card.Body  >
             <form> 
             <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />
             <br/>
             </form> 
             </Card.Body>
             </Card>
             </div>
            
        )}
       export function Date_Time(){
        return(
             <div >
             <Card style={{ display:'flex', justifyContent:'center' }}>
             <Card.Body  >
             <form> 
             <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="type" placeholder="DATE|TIME|DATE-TIME" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="format" placeholder="dd/mm/yy" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />
             </form> 
             </Card.Body>
             </Card>
             </div>
    
            )}

    export function Likart_Scale(){
        return(            
             <div >
             <Card style={{ display:'flex', justifyContent:'center' }}>
             <Card.Body  >
             <form> 
             <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="option1" placeholder="option1" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="option2" placeholder="option2" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth type="text" name="option3" placeholder="option3" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />
             </form> 
             </Card.Body>
             </Card>
             </div>)}

    export function Location(){
        return(           
             <div >
             <Card style={{ display:'flex', justifyContent:'center' }} align="right">
             <Card.Body  >
             <form > 
             <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="settings" placeholder="location_settings" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />
             </form> 
             </Card.Body>
             </Card>
             </div>)}

    export function MCQ(){
        return( 
             <div >
             <Card style={{ display:'flex', justifyContent:'center' }}>
             <Card.Body  >
             <form> 
             <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
             <br/>
             <TextField variant="standard" margin ="normal" fullWidth  type="text" name="option1" placeholder="option1" />
             <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="option2" placeholder="option2" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth type="text" name="option3" placeholder="option3" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="option4" placeholder="option4" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth type="text" name="option5" placeholder="option5" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth type="text" name="all_of_the_above" placeholder="all_of_the_above" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="none_of_the_above" placeholder="none_of_the_above" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth type="text" name="select_min_options" placeholder="select_min_options" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth type="text" name="select_max_options" placeholder="select_max_options" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />
     </form> 
     </Card.Body>
     </Card>
     </div>
        )}

    export function SCQ(){
        return(

     <div >
     <Card style={{ display:'flex', justifyContent:'center' }} align="right">
     <Card.Body  >
     <form > 
     <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="option" placeholder="option" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />
     </form> 
     </Card.Body>
     </Card>
     </div>)}

    export function Media(){
        return(            
     <div >
     <Card style={{ display:'flex', justifyContent:'center' }}>
     <Card.Body  >
     <form > 
     <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="type" placeholder="DATE|TIME|DATE-TIME" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />
     </form> 
     </Card.Body>
     </Card>
     </div>)}

    export function Number(){
        return(           
     <div >
     <Card style={{ display:'flex', justifyContent:'center' }}>
     <Card.Body  >
     <form > 
     <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?"/>
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="lower_limit" placeholder="lower_limit" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="upper_limit" placeholder="upper_limit" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />
     </form> 
     </Card.Body>
     </Card>
     </div>)}

    export function Scale(){
        return(
     <div >
     <Card style={{ display:'flex', justifyContent:'center' }}>
     <Card.Body>
     <form> 
     <TextField variant="standard" margin ="normal" fullWidth type="text" name="title" placeholder="Enter your question?" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="ref_tittle" placeholder="Enter reference for question" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="description" placeholder="Enter description for question" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="mandatory" placeholder="mandatory" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="min_value" placeholder="min_value" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="max_value" placeholder="max_value" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth  type="text" name="step_size" placeholder="step_size" />
     <br/>
     <TextField variant="standard" margin ="normal" fullWidth type="text" name="others" placeholder="Enter additional information" />

     </form> 
     </Card.Body>
     </Card>
     </div>)}

    
    



