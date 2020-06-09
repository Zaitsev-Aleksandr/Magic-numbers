export const randomValue = () => {
    let value = parseInt(Math.random() * 1000)
    while (("" + value).length < 3) {
        value = parseInt(Math.random() * 1000)
    }
    return value
};

export const createField = (x, y) => {
    let matrixArr = [];
    for (let i = 0; i < x; i++) {
        matrixArr = [...matrixArr, []];
        for (let ii = 0; ii < y; ii++) {
            matrixArr[i] = [...matrixArr[i], {
                id: (i + "" + ii),
                amount: randomValue(),
                coordinate: {
                    x: i,
                    y: ii
                }
            }
            ]
        }
    }
    return matrixArr
};
export const addField = (arr, y) => {
    const i = (arr[arr.length - 1][0].coordinate.x) + 1;
    let newRow = [];
    for (let ii = 0; ii < y; ii++) {
        newRow.push({
            id: (i + "" + ii),
            amount: randomValue(),
            coordinate: {
                x: i,
                y: ii
            }
        });
    }

    return newRow
};

export const takeMiddleColumnValue = (arr, column) => {
    let countArr = [];
    for (let i = 0; i < column; i++) {
        countArr.push((arr.reduce((accum, item) => accum + item[i].amount, 0) / arr.length))
    }
    return countArr
};
export const addAdjoiningElemArr = (adjoining, x,y) => {
    let newArr = [];
    for ( let i = 0; i < adjoining; i++){

    }
    return newArr
};