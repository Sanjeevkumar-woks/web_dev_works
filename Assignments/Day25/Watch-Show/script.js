var url="https://api.jikan.moe/v3/search/anime?q=cat";
var display_div=document.getElementById("display");
var heading=document.getElementById("heading");
function search(){

  var endKey=document.getElementById("search").value;
  document.getElementById("search").value="";
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
   <h6 class="card-title">${movie.title}</h6>
   <p class="card-text"><span>Rated:${movie.rated}</span><br><span>Likes: <span id="likes">${movie.members}</span></span><br><span>Score:${movie.score}</span></p>
 <a href="${movie.url}"> <button id="watch" class="btn btn-primary btn-sm">Watch</button></a>
 </div>
 <div id="like">
 <button id="like-btn" class="btn btn-dark btn-sm" onClick="likes()"><i class="far fa-thumbs-up"></i>Like</button>
 </div>
 
 `;
display_div.append(card);
}
function renderAllMovies(movies){
  display_div.innerHTML="";
  movies.forEach( movie=> display_movies(movie));
}

function likes(){
  const like=document.getElementById("likes");
  let likenum=parseInt(like.innerText);
  like.innerText=likenum+1;
}

