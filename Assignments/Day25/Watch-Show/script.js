var url="https://api.jikan.moe/v3/search/anime?q=cat";
var display_div=document.getElementById("display");
var heading=document.getElementById("heading");
function search(){

  var endKey=document.getElementById("search").value;
  heading.innerText=endKey.toUpperCase();
  url="https://api.jikan.moe/v3/search/anime?q="+endKey;
  fetch(url).then((response)=>response.json()).then(function(movies){ renderAllMovies(movies.results)});
}

function recommended(){

heading.innerText="Recommended Movies";
let session=document.createElement("div");
session.setAttribute("id","session");
fetch(url).then((response)=>response.json()).then(function(movies){ renderAllMovies(movies.results)});

}

function display_movies(movie){
 const card=document.createElement("div");
 card.setAttribute("class","card col-sm-2");
 card.setAttribute("id","card")
 card.innerHTML=`
 <img src=${movie.image_url} class="card-img-top" alt="movieimg">
 <div class="card-body">
   <h5 class="card-title">${movie.title}</h5>
   <p class="card-text"><span>Rated:${movie.rated}</span><br><span>Likes: #${movie.members}</span><br><span>Score:${movie.score}</span></p>
   <a href="${movie.url}" class="btn btn-primary ml-2 watch">Watch</a>
 </div>
 <div id="like">
 <button id="like-btn" class="btn btn-dark btn-sm"><i class="far fa-thumbs-up"></i>Like</button>
 </div>
 
 `;
display_div.append(card);
}
function renderAllMovies(movies){
  display_div.innerHTML="";
  movies.forEach( movie=> display_movies(movie));
}




