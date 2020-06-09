import React from 'react';

const Close = ({className, toggleInfo})  => <i className={`fas fa-times ${className ? className :""}` } onClick={toggleInfo}/>

export default Close;
