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
            matrixArr[i] = [...matrixArr[i], [{
                id: (i + "" + ii),
                amount: randomValue(),
                coordinate:{
                    x:i,
                    y:ii
                }
            }
            ]]
        }
    }
    return matrixArr
};

export  const  takeMiddleColumnValue=(arr, column, row)=>{
    let countArr=[];
    for (let i = 0; i < column; i++){
        countArr.push((arr.reduce((accum, item) => accum + item[i][0].amount, 0)/row))
   }
    return countArr
}