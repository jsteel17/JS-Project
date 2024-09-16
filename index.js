// API 1: "http://www.omdbapi.com/?apikey=3a666101&s=fast"

const movieListEl = document.querySelector(".movie-list");
let moviesData;

async function main() {
  const movies = await fetch("http://www.omdbapi.com/?apikey=3a666101&s=fast");
  moviesData = await movies.json();

  movieListEl.innerHTML = moviesData.Search.map((movie) =>
    movieHTML(movie)
  );
}

const filter = document.getElementById("filter");
filter.addEventListener("input", () => {
  const filteredData = moviesData.Search.filter((movie) => movie.Title.toLowerCase().includes(filter.value.toLowerCase()));
  
  movieListEl.innerHTML = filteredData.map((movie) => movieHTML(movie));
});


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
