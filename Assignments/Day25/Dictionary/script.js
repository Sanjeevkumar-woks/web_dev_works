//search function
function search(){
   let url="https://api.dictionaryapi.dev/api/v2/entries/en/"
    let word= document.getElementById("word").value;
    url=url+word;
    fetch(url).then((result1)=>result1.json())
              .then((result2)=> {
                result(result2)})
              .catch((err)=>{
                let display=document.getElementById("result");
    display.innerHTML=`
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Enter valid word!</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`;
 })
}

//Displaying the result
function result(meaning){
    let display=document.getElementById("result");
    let synonyms1=meaning[0].meanings[0].definitions[0].synonyms;
    let synonyms2=meaning[0].meanings[0].definitions[1].synonyms;

    //dynamically adding the result
    display.innerHTML=`
    <h1 id="spelling">${meaning[0].word}</h1>
    <p>/${meaning[0].phonetic}/</p>
    
<ol>
    <li><h6>Defination: <h5>${meaning[0].meanings[0].definitions[0].definition}</h5></h6>
    <p id="example">"${meaning[0].meanings[0].definitions[0].example}"</p>
    <p>Synonyms:${synonyms1[0]}, ${synonyms1[1]}, ${synonyms1[2]}, ${synonyms1[3]}</p></li>

    <li><h6>Defination: <h5>${meaning[0].meanings[0].definitions[1].definition}</h5></h6>
    <p id="example">"${meaning[0].meanings[0].definitions[1].example}"</p> 
    <p>Synonyms:${synonyms2[0]}, ${synonyms2[1]}, ${synonyms2[2]}, ${synonyms2[3]}</p></li>

</ol>
<div id="audio">
   <p>Pronounce:</p>
    <audio controls>
    <source src=${meaning[0].phonetics[0].audio}
    Your browser does not support the audio element.
    </audio>
    </div>
    `
}

//Enter key press eventListner
var input = document.getElementById("word");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("button-addon2").click();
  }
});
