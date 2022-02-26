import {moviearr} from "./movieslist.js";



const output = document.querySelector('.output');
const search = document.querySelector('.filter-movie');




const loadList=()=> {
    const temp = '<ul class="moviearr-items">';
    event.preventDefault();

    moviearr.forEach(item=> {
        temp+='<li class="moviearr-item">' +item.movieName+ '</li>';
        
    });
    console.log(temp);
    temp += '</ul>';
    output.innerHTML = temp;

}


const filter=(e)=>{
    let temp='';
    const result = moviearr.filter(moviearr=> moviearr.movieName.toLowerCase().includes(e.target.value.toLowerCase()));
   
    if(result.length>0){
       
         temp = "<ul class='moviearr-items'>";
        result.forEach((item) => {
            temp += "<li class='moviearr-item'>" + "<a href=" + "movieInfoPage.html?mid=" + item.movieId + "> " +item.movieName+ "</a>"
            "</li>";
            
        });
        console.log(temp);
        temp += '</ul>';
        
    }else{
        temp = '<div class="no-item">Could not find Movies</div>';
    }
    output.innerHTML = temp;
}
search.addEventListener('input',filter);

const highlight=(param)=> {
  
    // Select the whole paragraph
    let ob = new Mark(document.querySelector(".output"));

    // First unmark the highlighted word or letter
    ob.unmark();

    // Highlight letter or word
    ob.mark(
        document.getElementById("searched").value,
        { className: 'a' + param }
    );
}



    
