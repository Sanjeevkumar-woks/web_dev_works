//Set up Http Request
var xhr = new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    var t = JSON.parse(this.response);
    console.log(t);
    //1. region=="Asia"
    let r1=t.filter((t)=>{return t.region=="Asia";})
    console.log(r1);
    //2. population<2L
    let r2=t.filter((t)=>{return t.population<200000;})
    console.log(r2);
    //3. name capital flag
    t.forEach(element => {
        console.log(element.name,element.capital,element.flag);    
    });
    //4. population
    let r3=t.reduce((accumulator, currentValue, currentIndex, t)=>{return currentValue.population;})
    console.log(r3);
    //5. currencies USD
    let r4=t.filter((t)=>{return t.currencies[0].code=="USD";})
    console.log(r4);
    
  } 
  else {
    console.log("Data is not available");
  }
};
xhr.send();