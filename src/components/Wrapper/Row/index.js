import React, { useMemo } from 'react';

import useToggler from "../../../hooks/useToggler";
import Cell from "./Cell";

const calcPercentage = (amount, sum) => Math.floor((amount / Math.floor(sum) * 100));

const Row = ({ index, rowData }) => {
    const [isHovered, toggleHovered] = useToggler();

    const sum = useMemo(() => rowData.reduce((accum, item) => accum + item[0].amount, 0), [rowData]);

    const cells = (
        rowData.map(item => (
            <Cell
                isActiveSumRow={isHovered}
                id={item[0].id}
                key={item[0].id}
                value={isHovered ? `${calcPercentage(item[0].amount, sum)}%` : item[0].amount}
            />
        ))
    );

    return (
        <div className="common-table-row d-flex flex-nowrap" id={index} key={index}>
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

export default Row;