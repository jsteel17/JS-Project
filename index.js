// API 1: "http://www.omdbapi.com/?apikey=3a666101&s=fast"

const movieList = document.querySelector(".movie-list");

async function main() {
  const movie = await fetch("http://www.omdbapi.com/?apikey=3a666101&s=fast");
  const movieData = await movie.json();
  movieList.innerHTML = movieData.map((movie) => movieHTML(movie)).join("");
}

main();

function movieHTML(movie) {
  return `<div class="movie-card">
  <div class="movie-card__container">
    <div class="movie__img">
      <img src="${movie.Poster}" />
    </div>
    <h3>${movie.Title}</h3>
    <p>
      <b>${movie.Year}:</b> 0000
    </p>
    <p>
      <b>${movie.imdbID}:</b>
    </p>
  </div>
</div>`;
}
