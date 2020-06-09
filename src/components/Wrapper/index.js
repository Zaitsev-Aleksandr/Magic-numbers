import React from 'react';
import {connect} from 'react-redux'
import {takeMiddleColumnValue} from '../../resources/js/createMatrix'

import Row from "./Row";

const Wrapper = ({row, column, adjoining, matrixArr}) => {
    const table = matrixArr && (
        <>
            {matrixArr.map((elem, i) => (<Row index={i} rowData={elem}/>))}
            <div className="table-column-middle__block d-flex flex-nowrap">
                {
                    takeMiddleColumnValue(matrixArr, column, row)
                        .map((elem, i) => (
                            <div className="table-column-middle__item" key={i}>{Math.round(elem)}</div>
                        ))
                }
            </div>
        </>
    );

    return (
        <div className="wrapper d-flex justify-content-center align-items-sm-start">
            <div className={`common-table-field ${matrixArr ? "active" : ''}`}>{table}</div>
        </div>
    );
};


const mapStateToProps = state => ({
    row: state.matrix.row,
    column: state.matrix.column,
    adjoining: state.matrix.adjoining,
    matrixArr: state.matrix.matrixArr
});

export default connect(mapStateToProps)(Wrapper);
