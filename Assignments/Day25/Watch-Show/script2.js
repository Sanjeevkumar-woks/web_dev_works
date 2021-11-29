
const url="https://api.jikan.moe/v3/search/anime?q=cat";
fetch(url).then((response)=>response.json()).then(function(movies){ imgUrl(movies.results)});
function imgUrl(movies){
    movies.forEach(movie => {console.log(movie.image_url);
        
    });
}
