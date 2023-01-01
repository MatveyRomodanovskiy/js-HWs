function getHtmlUl(array){
    let string = '<ul class="list_class">';
    let subStr= '<li class="item_class"><div ';
    for (let index = 0; index < array.length; index++) {
        const strClass = array[index] === 0 ? 'class = "white"' : 'class = "black"';
        string = string +  subStr + strClass +"></div></li>";
    }
    return  string + "</ul>";
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
