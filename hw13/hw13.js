// function getHtmlUl(array) {
   
//     return `<ul class="list_class">${getListItems(array)}</ul>`;
// }
function getListItems(array) {
    const res = [];
    // for(let i = 0; i < array.length; i++) {
    //     res[i] = `
    //             <li class="item_class">
    //                 <div class="${array[i] === 0 ? "white" : "black"}">
    //                  </div>
    //              </li>`
    // }
   
    for (let index = 0; index < array.length; index++) {
        res[index] = `<li class="item_class"><div class="${array[index] === 0 ? "white" : "black"}"</div></li>`
    }
    return res.join('');
}


function getHtmlUl(array){
    // return `<ul class="list_class">${getListItems(array)}</ul>`;
    return `<ul class="list_class">${getListItems(array)}</ul>`;
}
function transpMatrix(matrix){
    const newMatrix = [];
    for (let i = 0; i < matrix[i].length; i++) {
        newMatrix.push([]);
        for (let j = 0; j < matrix.length; j++) {
            newMatrix[i][j]= matrix[j][i];
        }
    }
    return newMatrix;
}
const ar1 = [0,1,0,0];
let newString = getHtmlUl(ar1);
console.log(newString);
const matr = [];
matr[0] = [1, 2];  
matr[1] = [3, 4];
matr[2] = [4, 5];
const newMatrix = [];
const matrRes = transpMatrix(matr);
console.log(matrRes);
