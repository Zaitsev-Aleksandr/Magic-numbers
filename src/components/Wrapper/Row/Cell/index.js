import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import {upRowAmount} from "../../../../redux/actions";

const Cell = ({id, item, value, upRoWAmountAction, style, isActiveSumRow}) => {

    const upAmount = useCallback((e) => {
        const x = e.currentTarget.closest('.common-table-row').id;
        const  y =item.coordinate.y;
        upRoWAmountAction(x, y)
    }, [upRoWAmountAction, item]);

    return (
        <div
            style={isActiveSumRow ? style  : null}
            onClick={upAmount}
            className="common-table-row__elem"
            id={id}
            key={id}
        >
            {value}
        </div>)
};
const mapDispatchToProps = {
    upRoWAmountAction: upRowAmount,
};
const mapStateToProps = state => ({
    matrixArr: state.matrix.matrixArr
});
export default connect(mapStateToProps, mapDispatchToProps)(Cell)