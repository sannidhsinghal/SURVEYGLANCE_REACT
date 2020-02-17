import React from 'react'

const InTextarea =({title, itemType, placeholder, required, handleChange}) =>(

<div>
    <textarea
        type="text"
        title={title}
        itemType={itemType}
        required={required}
        style={{ height: "80px"}}
        placeholder={placeholder}
        onChange={handleChange}
        />
</div>
);
export default InTextarea