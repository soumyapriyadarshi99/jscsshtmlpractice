// import { moviearr } from "./movieslist.js";

const moviearr = [
  {
    movieId: "1",
    movieName: "Mission Mangal",
    image: "../assets/images/mission_mangal.jpg",
    heading: "Mission Mangal (U/A)-Hindi",
    language: "Hindi",
    genre: "Drama | 25/10/2019 | 2 hrs 30 mins",
    certification: "Hindi|U/A",
    actors: "Actors: Akshay Kumar & Vidya Balan",
    director: "Director: Jagan Shakti & Tanishk Bagchi",
    musicDirector: "Music Director: Amit Trivedi",
    synopsis:
      "Mission Mangal is a 2019 Indian Hindi-language drama film directed by Jagan Shakti and jointly produced by Cape of Good Films, Hope Productions",
    date: "25 Oct 2019",
    upcoming: 0,
    price: "1200",
    payment: "PAYTM",
    status: "PAID",
    convienceFee: "40",
  },

  {
    movieId: "2",
    movieName: "Taare Zameen Par",
    image: "../assets/images/taare_zameen_par.jpg",
    heading: "Taare Zameen Par (U/A)-Hindi",
    language: "Hindi",
    genre: "Drama | 21/12/2007 | 2 hrs 40 mins",
    certification: "Hindi|U/A",
    actors: "Actors: Darsheel Safary ,AamirKhan ,Tisca Chopra",
    director: "Director: Aamir Khan",
    musicDirector: "Music Director: Shankar Ehsaan Loy",
    synopsis:
      "Taare Zameen Par, also known as Like Stars on Earth in English, is a 2007 Indian Hindi-language psychological drama film produced and directed by Aamir Khan.",
    date: "21 Dec 2007",
    upcoming: 0,
    price: "800",
    payment: "DEBIT-CARD",
    status: "PAID",
    convienceFee: "50",
  },

  {
    movieId: "15",
    movieName: "Master",
    image: "../assets/images/master.jpg",
    heading: "Master (U/A)-Tamil",
    language: "Tamil",
    genre: "Action | 13/01/2021 | 2 hrs 50 mins",
    certification: "Tamil|U/A",
    actors: "Actors: Vijay ,Vijay Sethupathi & Malavika Mohanan,",
    director: "Director: Lokesh Kanagaraj",
    musicDirector: "Music Director: Anirudh Ravichander",
    synopsis:
      "Master is a 2021 Indian Tamil-language action drama film[6] written and directed by Lokesh Kanagaraj.",
    date: "13 jan 2021",
    upcoming: 0,
    price: "1200",
    payment: "CREDIT-CARD",
    status: "PAID",
    convienceFee: "40",
  },

  {
    movieId: "3",
    movieName: "Bigil",
    image: "../assets/images/bigil.jpg",
    heading: "Bigil (U/A)-Tamil",
    language: "Tamil",
    genre: "Action | 25/10/2019 | 2 hrs 10 mins",
    certification: "Tamil|U/A",
    actors: "Actors: Vijay, Nayanthara, Jackie Shroff",
    director: "Director: Atlee",
    musicDirector: "Music Director: A. R. Rahman",
    synopsis:
      "Bigil is a 2019 Indian Tamil-language sports action film written and directed by Atlee",
    date: "25 oct 2019",
    upcoming: 0,
    price: "800",
    payment: "DEBIT-CARD",
    status: "PAID",
    convienceFee: "40",
  },

  {
    movieId: "4",
    movieName: "Baahubali: The Beginning",
    image: "../assets/images/baahubali.jpg",
    heading: "Baahubali: The Beginning (U/A)-Telgu",
    language: "Telgu",
    genre: "Action | 10/06/2015 | 2 hrs 50 mins",
    certification: "Telgu|U/A",
    actors: "Actors: Prabhas, Rana Daggubati, Tamannaah & Anushka Shetty",
    director: "Director: S. S. Rajamouli",
    musicDirector: "Music Director: M. M. Keeravani",
    synopsis:
      "Baahubali: The Beginning is a 2015 Indian epic action film directed by S. S. Rajamouli, and produced by Shobu Yarlagadda and Prasad Devineni under Arka Media Works.",
    date: "10 July 2015",
    upcoming: 0,
    price: "1500",
    payment: "PAYTM",
    status: "PAID",
    convienceFee: "40",
  },

  {
    movieId: "5",
    movieName: "Pushpa: The Rise",
    image: "../assets/images/pushpa.jpg",
    heading: "Pushpa: The Rise (U/A)-Telgu",
    language: "Telgu",
    genre: "Action | 17/12/2021 | 2 hrs 10 mins",
    certification: "Telgu|U/A",
    actors: "Actors: Allu Arjun ,Fahadh Faasil & Rashmika Mandanna",
    director: "Director: Sukumar",
    musicDirector: "Music Director: Devi Sri Prasad",
    synopsis:
      "Pushpa: The Rise – Part 01 is a 2021 Indian Telugu-language action drama film[5] written and directed by Sukumar.",
    date: "17 December 2021",
    upcoming: 0,
    price: "1200",
    payment: "DEBIT-CARD",
    status: "PAID",
    convienceFee: "50",
  },

  {
    movieId: "6",
    movieName: "K.G.F: Chapter 1",
    image: "../assets/images/kgf.jpg",
    heading: "K.G.F: Chapter 1 (U/A)-Kannada",
    language: "Kannada",
    genre: "Action | 20/12/2018 | 2 hrs 30 mins",
    certification: "Kannada|(U/A)",
    actors: "Actors: Yash & Srinidhi Shetty",
    director: "Director: Prashanth Neel",
    musicDirector: "Music Director: Ravi Basrur",
    synopsis:
      "K.G.F: Chapter 1 is a 2018 Indian Kannada-language period action film[5] written and directed by Prashanth Neel, and produced by Vijay Kiragandur under the banner of Hombale Films.",
    date: "20 December 2018",
    upcoming: 0,
    price: "1000",
    payment: "CREDIT-CARD",
    status: "PAID",
    convienceFee: "40",
  },

  {
    movieId: "7",
    movieName: "Tarak",
    image: "../assets/images/tarak.jpg",
    heading: "Tarak (U/A)-Kannada",
    language: "Kannada",
    genre: "Drama | 29/09/2017 | 2 hrs 20 mins",
    certification: "Kannada|(U/A)",
    actors: "Actors: Darshan & Sruthi Hariharan",
    director: "Director: Prakash",
    musicDirector: "Music Director: Arjun Janya",
    synopsis:
      "Tarak is a 2017 Indian Kannada-language action drama film directed by Prakash and produced by Dushyanth.",
    date: "29 September 2017",
    upcoming: 0,
    price: "800",
    payment: "PAYTM",
    status: "PAID",
    convienceFee: "50",
  },

  {
    movieId: "8",
    movieName: "Bangalore Days",
    image: "../assets/images/banglore_days.jpg",
    heading: "Bangalore Days (U/A)-Malyalam",
    language: "Malyalam",
    genre: "Drama | 30/05/2014 | 2 hrs 30 mins",
    certification: "Malyalam |(U/A)",
    actors: "Actors: Nazriya Nazim, Nivin Pauly & Dulquer Salmaan",
    director: "Director: Anjali Menon",
    musicDirector: "Music Director: Gopi Sunder",
    synopsis:
      "Bangalore Days is a 2014 Indian Malayalam-language coming of age romantic comedy-drama film written and directed by Anjali Menon,[3] and co-produced by Anwar Rasheed and Sophia Paul under the banner Anwar Rasheed Entertainments and Weekend Blockbuste",
    date: "30 May 2014",
    upcoming: 0,
    price: "800",
    payment: "DEBIT-CARD",
    status: "PAID",
    convienceFee: "40",
  },

  {
    movieId: "9",
    movieName: "Ustad Hotel",
    image: "../assets/images/ustad_hotel.jpg",
    heading: "Ustad Hotel (U/A)-Malyalam",
    language: "Malyalam",
    genre: "Drama | 29/06/2012 | 2 hrs 30 mins",
    certification: "Malyalam |(U/A)",
    actors: "Actors: Dulquer Salmaan, Thilakan & Nithya Menen",
    director: "Director: Anwar Rasheed",
    musicDirector: "Music Director: Gopi Sunder",
    synopsis:
      "Ustad Hotel is a 2012 Indian Malayalam-language drama film directed by Anwar Rasheed, written by Anjali Menon and produced by Listin Stephen",
    date: "29 June 2012 ",
    upcoming: 0,
    price: "1200",
    payment: "CREDIT-CARD",
    status: "PAID",
    convienceFee: "40",
  },

  //UPCOMING MOVIES
  {
    movieId: "10",
    movieName: "Atrangi Re",
    image: "../assets/images/atrangi_re.jpg",
    heading: "Atrangi Re (U/A)-Hindi",
    language: "Hindi",
    genre: "Drama | 24/12/2022 | 2 hrs 20 mins",
    certification: "Hindi | (U/A)",
    actors: "Actors: Dhanush, Sara Ali Khan & Akshay Kumar",
    director: "Director: Aanand L. Rai",
    musicDirector: "Music Director: A. R. Rahman",
    synopsis:
      "Atrangi Re is a 2022 Indian Hindi-language romantic fantasy drama film[1] directed by Aanand L. Rai and written by Himanshu Sharma. Produced by T-Series Films, Colour Yellow Productions and Cape of Good Films",
    date: "24 December 2022",
    upcoming: 1,
    price: "100",
    payment: "PAYTM",
    status: "PAID",
    convienceFee: "50",
  },

  {
    movieId: "11",
    movieName: "kirik Party",
    image: "../assets/images/kirik_party.jpg",
    heading: "Kirik party (U/A)-Kannada",
    language: "Kannada",
    genre: "Drama | 30/12/2022 | 2 hrs 30 mins",
    certification: "Kannada | (U/A)",
    actors:
      "Actors: Rakshit Shetty,Rashmika Mandanna, Samyuktha Hegde, Achyuth Kumar",
    director: "Director: Rishab Shetty",
    musicDirector: "Music Director: B. Ajaneesh Loknath",
    synopsis:
      "Kirik Party is a 2022 Indian Kannada-language romantic comedy film directed by Rishab Shetty and produced by G. S. Guptha and Rakshit Shetty.",
    date: "30 Dec 2022",
    upcoming: 1,
    price: "900",
    payment: "DEBIT-CARD",
    status: "PAID",
    convienceFee: "40",
  },

  {
    movieId: "12",
    movieName: "Action",
    image: "../assets/images/action.jpg",
    heading: "Action (U/A)-Tamil",
    language: "Tamil",
    genre: "Drama | 15/11/2022 | 2 hrs 10 mins",
    certification: "Tamil | (U/A)",
    actors: "Actors: Vishal & Tamannaah",
    director: "	Sundar C.",
    musicDirector: "Music Director: Director: Hiphop Tamizha",
    synopsis:
      "Action is a 2022 Indian Tamil-language action film[1] written and directed by Sundar C. and produced by R. Ravindran under his banner Trident Arts.",
    date: "15 Nov 2022",
    upcoming: 1,
    price: "700",
    payment: "CREDIT-CARD",
    status: "PAID",
    convienceFee: "50",
  },

  {
    movieId: "13",
    movieName: "Bangarraju",
    image: "../assets/images/bangarraju.jpeg",
    heading: "Bangarraju (U/A)-Telgu ",
    language: "Telgu",
    genre: "Drama | 14/1/2022 | 2 hrs 30 mins",
    certification: "Telgu | (U/A)",
    actors: "Actors: Akkineni Nagarjuna, Ramya Krishna",
    director: "Director: Kalyan Krishna Kurasala",
    musicDirector: "Music Director: Anup Rubens",
    synopsis:
      "Bangarraju is a 2022 Indian Telugu-language supernatural drama film directed by Kalyan Krishna Kurasala who co-wrote the film with Satyanand. ",
    date: "14 January 2022",
    upcoming: 1,
    price: "600",
    payment: "DEBIT-CARD",
    status: "PAID",
    convienceFee: "40",
  },

  {
    movieId: "14",
    movieName: "Helen",
    image: "../assets/images/helen.jpg",
    heading: "Helen (U/A)-Malyalam",
    language: "Malyalam",
    genre: "Drama | 15/11/2022 | 2 hrs 30 mins",
    certification: "Malyalam | (U/A)",
    actors: "Actors: Shaan Rahman",
    director: "Director:	Mathukutty Xavier",
    musicDirector: "Music Director: Shaan Rahman",
    synopsis:
      "Helen is a 2022 Indian Malayalam-language survival thriller film directed by Mathukutty Xavier (in his directorial debut) and produced by Vineeth Sreenivasan under the coanies Habit of Life and Big Bang Entertainments.",
    date: "15 Nov 2022",
    upcoming: 1,
    price: "700",
    payment: "CREDIT-CARD",
    status: "PAID",
    convienceFee: "50",
  },

  {
    movieId: "16",
    movieName: "Radhe Shyam",
    image: "../assets/images/radhe_shyam.jpg",
    heading: "Radhe Shyam",
    language: "Hindi ",
    genre: "Drama | 11/03/2022 | 2 hrs 40 mins",
    certification: "Hindi | (U/A)",
    actors: "Actors: Prabhas & Pooja Hegde",
    director: "Director:	Radha Krishna Kumar",
    musicDirector: "Music Director: S. Thaman & Sanchit Balhara",
    synopsis:
      "Radhe Shyam is an upcoming Indian period romantic drama film written and directed by Radha Krishna Kumar, starring Prabhas and Pooja Hegde. It is shot simultaneously in Telugu and Hindi languages.[2][3] The film is produced by UV Creations, Gopi Krishna Movies and T-Series.",
    date: "11 Mar 2022",
    upcoming: 1,
    price: "600",
    payment: "DEBIT-CARD",
    status: "PAID",
    convienceFee: "40",
  },
];

const filter = [];

// **************************************banner sliding code*************************************

// var i = 0;
// var images = [
//   "./assets/images/kiladi.jpg",
//   "./assets/images/stsh.jpg",
//   "./assets/images/tenet.jpg",
//   "./assets/images/badhaaido.jpg",
//   "./assets/images/giftcard.jpg",
//   "./assets/images/goodluck.jpg",
//   "./assets/images/moonfall.jpg",
// ];
// var time = 3000;
// function changeImg() {
//   document.slide.src = images[i];
//   if (i < images.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }
//   setTimeout("changeImg()", time);
// }

// ******************************to pass the function in HTML page*******************************
window.onload = () => {
  getMovies(filter);
  changeImg();
};

// ***************************************filter the movies ******************************************
const filterMovies = (language) => {
  const languageIndex = filter.indexOf(language);
  if (languageIndex !== -1) {
    filter.splice(languageIndex, 1);
  } else {
    filter.push(language);
  }
  upcomingMov(filter);
  getMovies(filter);
};

// ***********************************************Upcoming movies>***********************************************

const upcomingMov = (filter) => {
  let s2 = "";
  for (let movie1 of moviearr) {
    console.log(movie1);
    if (
      (filter.indexOf(movie1.language) !== -1 || filter.length === 0) &&
      movie1.upcoming === 1
    ) {
      s2 += `<div class='categcard'>
<div class ='categcard-image'><img src =${movie1.image}  alt=${movie1.movieName} /></div>
<div class='categcard-text'>
<h4 class='categcard-movie-name'>${movie1.movieName}</h4>
<p class='categcard-movie-lang'>${movie1.certification}</p>
</div>
<div class='categcard-stats'>
<div class='stat border'>
<p>${movie1.date}</p>
</div>
</div>
</div>`;
    }
  }
  document.getElementById("movie1").innerHTML = s2;
};

// *******************************************getmovie function to call the dinamic HTML**********************
const getMovies = (filter) => {
  let s1 = "";
  for (let movie of moviearr) {
    console.log(filter, movie.language);
    if (
      (filter.indexOf(movie.language) !== -1 || filter.length === 0) &&
      movie.upcoming === 0
    ) {
      s1 += `<div class='categcard'>;
<div class ='categcard-image'><img src =${movie.image} alt=${movie.movieName} /></div>
<div class='categcard-text'>
<h4 class='categcard-movie-name'>${movie.movieName}</h4>
<p class='categcard-movie-lang'>${movie.certification}</p>
</div>
<div class='categcard-stats'>
<div class='stat border'>
<a href="movieInfoPage.html?mid=${movie.movieId}">BOOK</a>
</div>
</div>
</div>`;
    }
  }

  document.getElementById("movie1").innerHTML = s1;
};
