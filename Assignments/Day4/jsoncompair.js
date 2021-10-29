var object = { 'a': 1 };
var other = { 'a': 1 };
 
var r=_.isEqual(object, other);
// => true
console.log(r);
console.log("me");
 
object === other;
// => false