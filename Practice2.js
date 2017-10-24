const _=require("lodash")



let myArray = _.range(1, 350)
let incFunc = (myArray) => {
    let returnArray =[]
    
for (let i = 0; i < myArray.length; i++){
    returnArray[i] = myArray[i] +1
}
return returnArray
}
console.log (incFunc(myArray))