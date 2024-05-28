// the below code returns the Fibonnaci sequence, up to the nth number
function fibs(n, arr){
  if (n < 0) {
   return `Error! ${n} isn't a positive integer.`
 }
 else if (n == arr.length) {
 return arr
}
 else {
 arr.push((arr[arr.length-1]+arr[arr.length-2]))
 fibs(n, arr)
 return arr
}}
const fibArr = [0, 1, 1]
console.log(fibs(8, fibArr))