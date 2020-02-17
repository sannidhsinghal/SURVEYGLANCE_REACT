import React from 'react'

const InMCQ = ({ title,itemType, placeholder,required, handleChange}) =>(
    <div>
        <input
        type="checkbox"
        title={title}
        itemType={itemType}
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
        />

        </div>
);
export default InMCQ
