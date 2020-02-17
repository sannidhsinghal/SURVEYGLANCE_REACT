import React from 'react'

const InTextarea =({title, itemType, placeholder, required, handleChange}) =>(

<div>
    <label style={{display:"flex", justifyContent:"center",paddingBottom:"5px"}}>{title}</label><br/>
    <div style={{display:"flex", justifyContent:"center", marginBottom:"10px"}}>
    <input
        type="text"
        // value={title}
        itemType={itemType}
        required={required}
        style={{ height: "80px"}}
        placeholder={placeholder}
        onChange={handleChange}
        />
        </div>
</div>
);
export default InTextarea