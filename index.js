// API 1: "http://www.omdbapi.com/?apikey=3a666101&s=fast"

const movieListEl = document.querySelector(".movie-list");

async function main() {
  const movies = await fetch("http://www.omdbapi.com/?apikey=3a666101&s=fast");
  const moviesData = await movies.json();
  console.log(moviesData);
  movieListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).join("");
  
}

renderMovies ()

main();

function movieHTML(movie) {
  return `<div class="movie-card">
  <div class="movie-card__container">
    <div class="movie__img">
      <img src="${movie.Poster}" />
    </div>
    <h3>${movie.Title}</h3>
    <p>
      <b>${movie.Year}</b>
    </p>
    <p>
      <b>${movie.imdbID}</b>
    </p>
  </div>
</div>`;
}
