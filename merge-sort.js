// take an unsorted array, split it
// sort the left half in ascending order
// sort the left half in ascending order
// merge halves in ascending order
// [5, 4, 2, 1,] becomes [1, 2, 4, 5]

function merge(leftArr, rightArr) {
  const tmp = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
      leftArr[0] <= rightArr[0] ? tmp.push(leftArr.shift()) : tmp.push(rightArr.shift())    
  } 
  return [...tmp, ...leftArr, ...rightArr]    
}

  function mergeSort(arr){
    // an array with length of 1 is necessarily sorted
    if (arr.length < 2) {
      return arr
    }
    // find the midpooint of the array, half it.
    const midpoint = Math.floor((arr.length)/2)
    const leftHalf = arr.slice(0, midpoint)
    const rightHalf = arr.slice(midpoint, arr.length)
    return merge(mergeSort(leftHalf), mergeSort(rightHalf))    
  }
const smallArr = [21, 13, 8, 5, 3, 2, 1, 1, 0]
console.log(`RESULT: `, mergeSort(smallArr))