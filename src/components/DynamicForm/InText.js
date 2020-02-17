import React from 'react'

const InText = ({ title, itemType, placeholder, required, handleChange}) => (
<div>
    <input
    type="text"
    title={title}
    itemType={itemType}
    required={required}
    placeholder={placeholder}
    onChange={handleChange}
    />
</div>
);

export default InText;