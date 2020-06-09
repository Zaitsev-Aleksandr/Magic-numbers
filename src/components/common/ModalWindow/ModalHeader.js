import React from 'react';
import Close from "../common/icon/Close";

const ModalHeader = ({title, toggleInfo}) => {
    return (
        <div className="common-modal-header  d-flex flex-nowrap justify-content-between">
            <div className="d-flex flex-nowrap align-items-center">
                <i className="fas fa-folder-open mr-3"></i><span className="modal-header-title">{title}</span>
            </div>
            <div className="button-close-modal d-flex flex-nowrap justify-content-center align-items-center">
                <Close toggleInfo={toggleInfo}/>
        </div>
        </div>
    );
};

export default ModalHeader;
