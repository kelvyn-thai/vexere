export const findByIdAndUpdate = (array, object) => {
    let index : any =  array.findIndex( element => element['_id']) === object['_id'];
    let newArray = array.slice();
    newArray[index] = object;
    return newArray;
}