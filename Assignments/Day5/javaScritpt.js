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
/*const array1 = [2, 5, 6, 9, 11];
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
let result=fun(array1);
console.log(result);
output:
2 5 11

IIFE.
const array1 = [2, 5, 6, 9, 11, 13];
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
})(array1);
console.log(fun.join(" "));
output:
2 5 11 13
*/
//Return all the palindromes in an array

//Return median of two sorted arrays of same size
//Remove duplicates from an array
//Rotate an array by k times
