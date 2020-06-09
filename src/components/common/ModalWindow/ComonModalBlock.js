import React from 'react';

import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import ModalBody from "./ModalBody";

const CommonModalBlock = ({className, toggleInfo}) => {
    return (
        <div className={`common-modal-wrapper d-flex flex-column justify-content-center align-items-center  ${className}`}>
            <div className="common-modal-content d-flex flex-column justify-content-between">
               <ModalHeader title={"Description of soft"} toggleInfo={toggleInfo}/>
               <ModalBody />

                <ModalFooter  toggleInfo={toggleInfo}/>
            </div>
        </div>
    );
};

export default CommonModalBlock;
