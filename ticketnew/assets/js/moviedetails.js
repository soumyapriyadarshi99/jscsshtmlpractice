import { moviearr } from "./movieslist.js";
import { cinema } from "./cinema.js";

/**************  @description :Calling function  ***************/

window.onload = (event) => {
  const urlParams = new URLSearchParams(window.location.search);
  const movieName = urlParams.get("mid");
  renderBreadCrumb(movieName);
  renderMovieDays(movieName);
  renderMovieCity(movieName);
  renderMovieTheatre(movieName);
  renderMovieBanner(movieName);
  passingMovieName(movieName);
};

/** @description: Function for displaying movie Banner which is at the top i.e the blur img and poster  */

const renderMovieBanner = (mtype) => {
  let s1 = getMovieDetails(moviearr, mtype);
  let movieBannerStr = `<div class="background-blur-image">
       <img src='${s1.image}' alt="Background-image for movie" />
   </div>
   <div class="poster-image">
      <img src="${s1.image}" alt="Poster-image for movie" />
          <div class="movie-info-textbox" > 
              <div>
                 <h3 class='movie-info-textbox-h3'>${s1.heading}</h3>
              </div>
              <div>
                  <h4 class='movie-info-textbox-h4'>${s1.certification}</h4>
                  <p class='movie-info-textbox-p'>${s1.genre}</p>
              </div>
              <div class="content-of-poster-image">
                  <span class='movie-info-textbox-p'>${s1.actors}</span>
                  <span class='movie-info-textbox-p'>${s1.director}</span>
                  <span class='movie-info-textbox-p'>${s1.musicDirector}</span>
              </div>
              <div>
                  <h4 class='movie-info-textbox-h4'>SYNOPSIS</h4>
                  <p class='movie-info-textbox-p'>${s1.synopsis}</p>
              </div>
          </div>
    </div>`;
  document.querySelector(".movie-detail-banner").innerHTML = movieBannerStr;
};

/** @description: Function for displaying movie title which is at the below of movie banner  */

const renderBreadCrumb = (mtype) => {
  let s1 = getMovieDetails(moviearr, mtype);
  let movieBannerStr = `
  <div>
     <ul class="address-menu">
       <li>
         <a href='index.html'>Movies Tickets</a>
       </li><span>&rarr;</span>
        <li>
          <span>Bangalore</span>
          <span>&rarr;</span>
        </li>
        <li>
          Movies
        </li>
          <span>&rarr;</span>
        <li>
          ${s1.heading}
        </li>
     </ul>
  </div>`;
  document.querySelector(".bread-crumb").innerHTML = movieBannerStr;
};

/** @description: Function for displaying movie days and date   */

const renderMovieDays = (mtype) => {
  let s1 = getMovieDetails(moviearr, mtype);
  let movieBannerStr = `<div class="section">
                          <div class="sub-section">
                            <div class="week">
                              <ul class="day-in-week">
                              <li class="seq-of-days">
                              <a href="" onclick=""><span class="day">Today</span>
                              <span class="date">07</span></a>
                              </li>
                            </div>
                          </div>
                        </div>`;
  document.querySelector(".movie-Days").innerHTML = movieBannerStr;
};
/** @description: Function for displaying movie theatre names and also the timing  */

const renderMovieTheatre = (movieId) => {
  let movieBannerStr = "",
    movie = "";
  let selectedMovieDetails = {
    mId: movieId,
  };
  for (let curr of cinema) {
    movieBannerStr = `<div class="theatername"> 
              <hr class="horizontal-line">
                    <div class="theater-block">
                         <div class="theater-details">
                            <h5 class='theatername-h5'>${curr.cinemaName}</h5>
                            <p>${curr.address}</p>
                          </div>
                          <div class="timing">           
                            <ul>  
                             <li><a href="javascript:void(0)" data-timing=${curr.showTimings[0]} data-theatre=${curr.cinemaName}>${curr.showTimings[0]}</a></li>
                             <li><a href="javascript:void(0)" data-timing=${curr.showTimings[1]} data-theatre=${curr.cinemaName}>${curr.showTimings[1]}</a></li>
                             </ul>
                          </div>
                           </div>
                     </div>
                <hr class='horizontal-line'>`;
    movie += movieBannerStr;
  }
  document.querySelector(".movie-Theatre").innerHTML = movie;
  document.querySelector(".movie-Theatre").addEventListener("click", (e) => {
    const { timing, theatre } = e.target.dataset;
    selectedMovieDetails = {
      ...selectedMovieDetails,
      timing,
      theatre,
    };

    const cinemaDetailtime = JSON.stringify(selectedMovieDetails);
    localStorage.setItem("selectedMovieDetails", cinemaDetailtime);
    window.location.href = "seatmatrix.html";
  });
};

/**@description: This method is used to display city name which is below the theatre part **/

const renderMovieCity = (mtype) => {
  let movieBannerStr = `<div class="city-info-line">You are in Bangalore. If you want to change chooseyourcity<div>`;
  document.querySelector(".movie-City").innerHTML = movieBannerStr;
};

/**@description: This function calls/fetches the data from array i.e from movielist.js  **/

const getMovieDetails = (movieListArray, movieId) => {
  return movieListArray.find((movieDetail) => {
    return movieDetail.movieId === movieId;
  });
};

/**@description: This function is for local storage used to pass value to next page i.e seatmatrix **/

const passingMovieName = (mtype) => {
  let s1 = getMovieDetails(moviearr, mtype);

  let headingofmovie = s1.heading;
  localStorage.setItem("heading", headingofmovie);

  let nameofmovie = s1.movieName;
  localStorage.setItem("name", nameofmovie);
};
