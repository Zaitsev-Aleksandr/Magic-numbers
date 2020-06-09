import React from 'react';

const Info = ({title, className, onClick}) => <i className={`fas fa-info-circle ${className ? className: ""}`} title={title} onClick={onClick}/>

export default Info;
