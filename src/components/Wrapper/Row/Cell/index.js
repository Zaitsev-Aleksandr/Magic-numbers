import React from 'react';

const Cell = ({id, value}) => (
    <div
        className="common-table-row__elem"
        id={id}
        key={id}
    >
        {value}
    </div>
);

export default Cell;