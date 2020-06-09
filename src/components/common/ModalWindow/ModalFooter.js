import React from 'react';

const ModalFooter = ({ className, toggleInfo }) => {
    return (
        <div
            className={`common-modal-footer d-flex flex-nowrap justify-content-between align-items-center ${className ? className : ""}`}>
             <button className="button-delete-field__true btn" onClick={toggleInfo}>
                Закрыть
            </button>

        </div>
    );
};

export default ModalFooter;
