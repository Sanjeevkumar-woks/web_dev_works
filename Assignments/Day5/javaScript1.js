//3.Do the below programs in arrow functions
//Print odd numbers in an array
let Arr=[1,2,3,4];
Arr.forEach(element => {
if((element%2)!==0){
    console.log(element);
}    
});
//output: 1 3

//Convert all the strings to title caps in a string array
var str="sanjeev";
let MyCapc=(str)=>{
var str1=str.split("");
var myCapsStr="";
for(var i in str1){
  myCapsStr=myCapsStr+(str1[i].toUpperCase());
}
console.log(myCapsStr);
};
MyCapc(str);
//output: SANJEEV


//console.log(result);
 //Sum of all numbers in an array
 let Arr=[1,2,3,4];
 var sum=0;
Arr.forEach((element) => {
 sum+=element;
});
 console.log(sum);    
// output: 10

//Return all the prime numbers in an array
const newArray = [1, 3, 2, 5, 10];
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};const myPrimeArray = newArray.filter(element => isPrime(element));
console.log(myPrimeArray);
//output: 3, 2, 5 

//Return all the palindromes in an array
const newArray = [121, 36, 2, 5, 10];
const isPalindromes = num => {
   for(var n=num,rem=0,final=0;n>0;n=parseInt(n/10)){
                rem=n%10;
                final=final*10+rem;
            }
        if(num==final){
                return(num);
            }
};


const myPalindromeArray = newArray.filter(element => isPalindromes(element));
console.log(myPalindromeArray);
//output: 121, 2, 5 
