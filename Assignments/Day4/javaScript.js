//Set up Http Request
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    var t = JSON.parse(this.response);
    //Code-Display required data.
    console.log(t);
    for (const key in t) {
      //question1 answer:
      console.log(JSON.stringify(t) === JSON.stringify(t));  
      
      //question2 answer:

        //console.log(t[key].flag);

        //question 3 answer:

       /* console.log(t[key].name);
        console.log(t[key].region);
        console.log(t[key].subregion);
        console.log(t[key].population);*/       
    }
  } 
  else {
    console.log("Data is not available");
  }
};
xhr.send();