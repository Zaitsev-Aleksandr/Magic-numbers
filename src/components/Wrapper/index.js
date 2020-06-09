import React, {useCallback,useState} from 'react';
import {connect} from 'react-redux'
import {takeMiddleColumnValue} from '../../resources/js/createMatrix'
import {addRow} from "../../redux/actions/index";

import Row from "./Row";
import Plus from "../common/icon/Plus";

const Wrapper = ({column, adjoining, matrixArr, addRow}) => {
    const [adjoiningElemArr, changeElem] = useState([])

    const addTableRow = useCallback(() => addRow(matrixArr, column), [addRow, matrixArr, column]);

    const table = matrixArr && (
        <>
            {matrixArr.map((elem, i) => (<Row index={i} key={i} rowData={elem}/>))}
            <div className="table-column-middle__block d-flex flex-nowrap">
                {
                    takeMiddleColumnValue(matrixArr, column)
                        .map((elem, i) => (
                            <div className="table-column-middle__item" key={i}>{Math.round(elem)}</div>
                        ))
                }
            </div>
        </>
    );

    return (
        <div className="wrapper d-flex justify-content-center align-items-sm-start">
            <div className={`btn-add-row my-btn badge-dark ${matrixArr ? "active" : ''}`} onClick={addTableRow}>
                <Plus/> ADD ROW
            </div>
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

const mapDispatchToProps = {
    addRow
};

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
