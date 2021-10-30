/*
// 1 Movie class
The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:
title, which is a String representing the title of the movie studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these value
b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
ANS:*/
class Movie{
  constructor(titel,studio,rating="PG"){
    this.title=titel;
    this.studio=studio;
    this.rating=rating;
  }
  getPG(arr){
    return arr.filter(x=> x.rating=="PG");
  }
}
let obj= new Movie("abc","def","PG­13");
//console.log(obj.getPG());
var temp=[new Movie("ABC","DEF","PG"),new Movie("123","456","PG3")];
console.log(obj.getPG(temp));
/*
// Circle Classs
CIRCLE-CLASS
ANS:
class Circle{
  constructor(radius){
    this.radius=radius;
  }
  constructor(radius,color){
    this.radius=radius;
    this.color=color
  }
  getRadius(){
    return this.radius;
  }
  setRadius(radius){
    this.radius=radius;
  }
  getColor(){
    return this.color;
  }

  setColor(color){
    this.color=color;
  }
  toString(){
    return `radius: ${this.radius} colour: ${this.color}`
  }
  area(){
    return 3.142*this.radius*this.radius;
  }
  circumferance(){
    return 2*3.142*this.radius;
  }
  
}

let myCircle=new Circle(10,'green');
console.log(myCircle.getRadius());
myCircle.setRadius(20);
console.log(myCircle.getRadius());
console.log(myCircle.getColor());
myCircle.setColor("blue");
console.log(myCircle.getColor());
console.log(myCircle.toString());
console.log(myCircle.area());
console.log(myCircle.circumferance());
output:
10
20
green
blue
radius: 20 colour: blue
1256.8
125.67999999999999

//class to hold person data

class Person {
    constructor(first, last, age, gender, interests){
    this.name = {
       first : first,
       last : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
      console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
     console.log('Hi! I\'m ' + this.name.first + '.');
    };
    }
}

var obj=new Person("sanjeevkumar","Managutti",26,"Male","coading");
obj.bio();
obj.greeting();

//write a class to calculate uber price.
class Uber{
  constructor(customerID,mobileNo,carType,distance){
    this.customerID=customerID;
    this.mobileNo=mobileNo;
    this.carType=carType;
    this.distance=distance;
  }
  getBill(customerID,mobileNo,carType,distance){
    let carTypeCharge=0;
    let charge=0;
    switch (carType) {
      case 'SEDAN':
          carTypeCharge=300;
        break;
      case 'SUV':
          carTypeCharge=200;
        break;
        case 'MINIVAN':
          carTypeCharge=500;
        break;
      case 'MUV':
          carTypeCharge=100;
        break;
      default:
        carTypeCharge=400;
    }
     charge = (carTypeCharge+(distance*15));
  return `CustomerID: ${this.customerID}
           MobileNo: ${this.mobileNo}
           billAmount: ${charge}
  
  `}
 
}

let customer=new Uber("Mr143","8123465874",'MUV',5);
console.log(customer.getBill("Mr143","8123465874",'MUV',5));

*/
