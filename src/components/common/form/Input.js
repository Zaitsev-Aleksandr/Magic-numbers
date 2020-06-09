import React from 'react';

const Input = ({id , type, onChange,}) => {
    return (
        <input className="form-item-common-style mr-3"
               id={id}
               maxLength="3"
               type={type}
               onChange={onChange}/>
    );
};

export default Input;
