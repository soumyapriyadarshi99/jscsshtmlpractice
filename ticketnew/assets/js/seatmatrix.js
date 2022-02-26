const container = document.querySelector(".seatcontainer");
// const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const movieDetail = JSON.parse(localStorage.getItem("selectedMovieDetails"));

container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;
  // console.log(selectedSeatsCount);
  count.innerText = selectedSeatsCount;
  localStorage.setItem("totalSeat", selectedSeatsCount);
  localStorage.setItem("theatrename", movieDetail.theatre);
  // console.log(movieDetail.theatre);
  let movieName = localStorage.getItem("heading");
  // console.log(movieName);
  localStorage.setItem("movieName", movieName);
}

document.getElementById("moviename").innerHTML =
  localStorage.getItem("heading");

document.getElementById("theatrename").innerHTML = movieDetail.theatre;
document.getElementById("showtimedesc").innerHTML = movieDetail.timing;
