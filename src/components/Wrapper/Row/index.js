import React, {useMemo, useCallback} from 'react';
import {connect} from 'react-redux'
import useToggler from "../../../hooks/useToggler";
import Cell from "./Cell";
import Delete from "../../common/icon/Delete";
import {deleteRow} from "../../../redux/actions";

const calcPercentage = (amount, sum) => Math.floor((amount / Math.floor(sum) * 100));

const Row = ({index, rowData, deleteRowAction }) => {

    const [isHovered, toggleHovered] = useToggler();
    const deleteTableRow = useCallback(() => {deleteRowAction(index)}, [deleteRowAction, index]);
    const sum = useMemo(() => rowData.reduce((accum, item) => accum + item.amount, 0), [rowData]);

    const cells = (
        rowData.map(item => (
            <Cell
                item={item}
                isActiveSumRow={isHovered}
                id={item.id}
                key={item.id}
                value={isHovered ? `${calcPercentage(item.amount, sum)}%` : item.amount}
                style={{backgroundImage:` linear-gradient(0deg, rgba(255,0,0,0.2) ${calcPercentage(item.amount, sum)}%, white ${calcPercentage(item.amount, sum)}%)`}}
            />
        ))
    );

    return (
        <div className="common-table-row d-flex flex-nowrap" id={index} key={index}>
            <Delete onClick={deleteTableRow}/>
            {cells}
            <div
                className="table-row-sum__value"
                onMouseEnter={toggleHovered}
                onMouseLeave={toggleHovered}
            >
                {sum}
            </div>
        </div>
    );
};
const mapDispatchToProps = {
    deleteRowAction: deleteRow
};
const mapStateToProps = state => ({
    matrixArr: state.matrix.matrixArr
});
export default connect(mapStateToProps, mapDispatchToProps)(Row);