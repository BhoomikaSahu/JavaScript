const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

let mainContainerEl = document.querySelector(".container");
console.log(mainContainerEl);
getMovies(APIURL);

async function getMovies(url) {
  const res = await fetch(url);
  const resData = await res.json();
  showMovies(resData.results);
}

function showMovies(
  movies //array of movies
) {
  // mainContainerEl.innerHTML = "";

  movies.forEach((movie) => {
    const { poster_path, title, vote_average } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("card-body");
    movieEl.innerHTML = `
              <div class="card-image">
                <img
                src="${IMGPATH + poster_path}"
                  alt="${title}"
                />
              </div>
              <div class="card-title">
                <h3>${title}</h3>
                <span>${vote_average}</span>
              </div>`;
    mainContainerEl.appendChild(movieEl);
  });
}

7554056859
