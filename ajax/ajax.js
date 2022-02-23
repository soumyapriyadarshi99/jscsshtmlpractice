console.log("Ajax Learning");
let fetchbtn = document.getElementById("fetchbtn");
fetchbtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("you have clicked fetch button");
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "soumya.txt", true);

  xhr.onprogress = function () {
    console.log("On progress");
  };

  xhr.onload = function () {
    if (this.status === 200) console.log(this.responseText);
    else console.log("something went wrong!");
  };
  xhr.send();
}
