import { moviearr } from "../js/movieslist.js";

// movieDetail is object which contain theatre name 
const movieDetail = JSON.parse(localStorage.getItem("selectedMovieDetails"));
//retrived number of seats from booking page
const totalseats = localStorage.getItem("totalSeat");
const moviename = localStorage.getItem("name");

//displayData function will show all dyanamic data and calculation

const displayData = (mname) => {
  
  let moviedetails = moviearr.find((obj) => obj.movieName == mname);
  let date = new Date();
  let movieshowdetials = `
                  <div>
                        <span class="tittle">Date</span>
                        <span class="value">${date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()}</span>
                    </div>
                    <div>
                        <span class="tittle">Theatre </span>
                        <span class="value">${movieDetail.theatre}</span>
                    </div>
                    <div>
                        <span class="tittle">Screen </span>
                        <span class="value">PREMIUM </span>
                    </div>
                    <div>
                        <span class="tittle">Seat </span>
                        <span class="value">PREMIUM </span>
                  </div>`;

  let maininnercontainer = `
                    <h2 class="heading2">${moviedetails.movieName} </h2>
                    <h5 class="heading">${moviedetails.certification} </h5>`;

  //ticketPrice will shoe the price of single ticket and show multplication with number of seats

  let ticketPrice = `
                      <span>${totalseats} Ticket(s)</span>
                      <span>Rs.${moviedetails.price}*${totalseats} </span>`;

  //convience fee retrive the convenience fee from database according to movie

  let convienceFee = `
                      <span>Convenience Fee</span>
                      <span>Rs.${moviedetails.convienceFee}</span>`;

  //igst will calculate the igst value according to the price of ticket

  let igst = `
                      <span id="igst">IGST 18%</span>
                      <span id="igst-value">Rs.${
                        // parseFloat(moviedetails.price) * 0.18
                        calgst()
                      } </span>`;

  //totalPrice will calculate the totalprice according to seats

  let totalPrice = `
                      <span id="total-price-tag">Total</span>
                      <span id="total-price">Rs.${
                         parseFloat(moviedetails.price) * parseFloat(totalseats) +
                         parseFloat(moviedetails.convienceFee) +
                         calgst()
                        }</span>`;


  document.querySelector(".movieshowdetials").innerHTML= movieshowdetials;
  document.querySelector(".main-inner-container").innerHTML =maininnercontainer;
  document.querySelector("#firstrow").innerHTML = ticketPrice;
  document.querySelector("#Convenience").innerHTML = convienceFee;
  document.querySelector("#igst-container").innerHTML = igst;
  document.querySelector("#total-price-container").innerHTML = totalPrice;
   
  function calgst(){
    return parseFloat(moviedetails.price)*0.18;
  }

};
displayData(moviename);

