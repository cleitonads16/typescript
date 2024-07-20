type Square ={
    x:number,
    y:number,
    width:number,
    heigth:number
}

type UpdateSquare = (a: Square, b:Partial<Square>) => Square

const square: Square = {
    x: 10,
    y: 20,
    width: 100,
    heigth: 200
}

const square2: Partial<Square> = {x: 30}

const updateSquare: UpdateSquare = (square, square2) => {
    return Object.assign({},square, square2)
}

const square3 = updateSquare(square, {x: 50})
console.log(square)
console.log(square2)
console.log(square3)

//Pick
type Position = Pick<Square, "x" | "y">
const position: Position = {
    x: 20,
    y: 50
}

//Omit
type Size = Omit<Square, "x" | "y">
const size: Size ={
    width: 200,
    heigth: 300
}

//Exclude<T, U>
type SquareColor = "red" | "blue" | "green" | "black" | "white"
type SaturatedColor = Exclude<SquareColor, "black" | "white">
type SadColor = "black" | "white" | "grey" | "blue dark"
type SadSquareColor = Exclude<SquareColor,SadColor>
type HappySquareColor = Exclude<SquareColor,SadColor>

