/* find max number in array */

let arr = [4,8,2,11,6,7,10];
let i = 0;
let maxNumber = arr[0];
function findMax() {
  for (i = 0; i < arr.length + 1; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  }
  console.log("Maximun number",maxNumber);
}

findMax();

/* Calculate sum of all elements in array using arrow functiobn */

let sum = 0;
const findSumAllEle=()=> {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("Sum of all elements",sum);
}

findSumAllEle();



/* count the odd number in array using anonymous function */

let countOdd=0;

const oddNumbers =function (){
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            countOdd++;
        }
    }
    console.log("Count of odd numbers",countOdd);
}

oddNumbers();



