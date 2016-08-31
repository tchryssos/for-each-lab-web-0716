// function iterativeLog((item, index, array){
//   array.forEach
//   console.log(`${index}:${item}`);
// })

// function doToElementsInArray(array, callback) {
//   array.forEach(callback)
// }

function iterativeLog(array){
  array.forEach((item, index, array)=>{
    console.log(`${index}: ${item}`);
  });
}

function iterate(callback){
  var array=["cool guy", "dad", "elephant", 40];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback){
  array.forEach(callback)
}
