//Set up Http Request
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/comments");
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    var t = JSON.parse(this.response);
    console.log(t);
    /*
    for(let i=0;i<t.length;i++){
        console.log(t[i].id);
    }
    */
    /*
    for (const key in t) {
        console.log(t[key].name);
    }
    */
     /*
    for (const iterator of t) {
        console.log(iterator.body);
    }
    */
    /*
    t.forEach(element => {
        console.log(element.email);    
    });
    */
  } 
  else {
    console.log("Data is not available");
  }
};
xhr.send();