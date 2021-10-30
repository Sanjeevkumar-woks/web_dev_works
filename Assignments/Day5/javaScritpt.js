//1.	Do the below programs in anonymous function & IIFE

//1.	Print odd numbers in an array
 //  i. Anonymous Function.
/*const array1 = [2, 5, 6, 9, 11];
let fun=function(array){
const arry2=[];
for (const element of array) {
        if(element%2){
            arry2.push(element);
        }
    }
    return arry2;
};
let result=fun(array1);
console.log(result.join(" "));

Output: 
5 9 11
   
   ii. IIFE
const array1 = [2, 5, 6, 9, 11];
let result=(function(array){const arry2=[];
for (const element of array) {
        if(element%2){
            arry2.push(element);
        }
    }
    return arry2;
})(array1);
console.log(result.join(" "));

Output: 
5 9 11
*/

//2.	Convert all the strings to title caps in a string array
//i. Anonymous Function.
/*var str="sanjeev";
let MyCapc=function(str){
var str1=str.split("");
var myCapsStr="";
for(var i in str1){
  myCapsStr=myCapsStr+(str1[i].toUpperCase());
}
console.log(myCapsStr);
};
MyCapc(str);
output: SANJEEV
*/
/*ii. IIFE
var str="sanjeev";
(function(str){
var str1=str.split("");
var myCapsStr="";
for(var i in str1){
  myCapsStr=myCapsStr+(str1[i].toUpperCase());
}
console.log(myCapsStr);
})(str);
output: SANJEEV
*/

//3.	Sum of all numbers in an array
// i. Anonymous Function.
/*const array1 = [2, 5, 6, 9, 11];
let fun=function(array){
        var sum=0;
            for (const element of array) {
                sum+=element;
                }
        return sum;
    };
let result=fun(array1);
console.log(result);
output:
 33

ii. IIFE

const array1 = [2, 5, 6, 9, 11];
let fun=(function(array){
                var sum=0;
        for (const element of array) {
                    sum+=element;
        }
        return sum;
})(array1);
console.log(fun);
output:
33
*/



//d. Return all the prime numbers in an array
 //i. Anonymous Function.
/*const array = [2, 5, 6, 9, 11];
let fun=function(array){
    var array1=[];
for (const element of array) {
    for (var i=2;i<element;i++){
        if(element%i==0){
            break;
        }
    }
    if(i==element){
        array1.push(i);
        }
    }    
};
let result=fun(array);
console.log(result);
output:
2 5 11

IIFE.
const array = [2, 5, 6, 9, 11, 13];
let fun=(function(array){
    var array1=[];
for (const element of array) {
    for (var i=2;i<element;i++){
        if(element%i===0){
            break;
        }
    }
    if(i==element){
        array1.push(i);
    }
}
    return array1;
})(array);
console.log(fun.join(" "));
output:
2 5 11 13
*/
//Return all the palindromes in an array
//i. Anonymous Function.
/*let palindrome= function(arr){
    for(const num of arr){
       
        for(var n=num,rem=0,final=0;n>0;n=parseInt(n/10)){
                rem=n%10;
                final=final*10+rem;
            }
        if(num==final){
                console.log(num);
            }
    }
    }
    let arr=[121,545,786];
    palindrome(arr);
    Output:
    121
    545
//ii. IIFE
let arr1=[121,545,786];
( function(arr1){
for(const num of arr1){
   
    for(var n=num,rem=0,final=0;n>0;n=parseInt(n/10)){
            rem=n%10;
            final=final*10+rem;
        }
    if(num==final){
            console.log(num);
        }
}
})(arr1);
Output:
    121
    545
    */


    //Return median of two sorted arrays of same size

//Remove duplicates from an array
/*
const unique=(value,index,self)=> self.indexOf(value)===index;
let mixedArray=[1,2,3,3,4,7,2,6];
let myUniqueArray=mixedArray.filter(unique);
console.log(myUniqueArray);
//output: [1,2,3,4,6,7]
*/
//Rotate an array by k times
/*
function rotateArray(A, K) {
    if (!A.length) return A;
    let index = -1;
    while (++index < K) {
        A.unshift(A.pop());
    }
    return A;
}
 let res=rotateArray([3, 8, 9, 7, 6], 3);
 console.log(res);
 //output:[ 9, 7, 6, 3, 8 ]
 */