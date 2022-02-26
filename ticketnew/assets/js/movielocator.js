//*We have created  an object and stored the latitude and longitude values of respective cities stored*//
const data=[{"name":"Delhi","lat":"28.704060","lng":"77.102493"}, {"name":"Punjab","lat":"31.147129","lng":"75.341217"},
     {"name":"Hyderabad","lat":"17.385044","lng":"78.486671"   }, {"name":"Mumbai","lat":"19.075983","lng":"72.877655"},
     {"name":"Bangalore","lat":"12.971599","lng":"77.594566"},{"name":"Chennai","lat":"13.082680","lng":"80.270721"},
    {"name":"kalkota","lat":"22.572645","lng":"88.363892"},{"name":"Madurai","lat":"9.925201","lng":"78.119774"},
    {"name":"Goregaon","lat":"19.155001","lng":"72.849998"},{"name":"Pindwara","lat":"24.794500","lng":"73.055000"},
    {"name":"Raipur","lat":"21.250000","lng":"81.629997"},{"name":"Jalpaiguri","lat":"26.540457","lng":"88.719391"},
    {"name":"Chalakudy","lat":"10.311879","lng":"76.331978"},{"name":"Hodal","lat":"27.897551","lng":"77.384117"},
    {"name":"Gurdaspur","lat":"32.041943","lng":"75.405334"},{"name":"Bhubaneswar","lat":"20.296059","lng":"85.824539"}]
  //*Formula for compare the distance between user current location and other cities location*//
    const distance=(lat1, lon1, lat2, lon2, unit)=> {
        const radlat1 = Math.PI * lat1/180
        const radlat2 = Math.PI * lat2/180
        const theta = lon1-lon2
        const radtheta = Math.PI * theta/180
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist)
        dist = dist * 180/Math.PI
        dist = dist * 60 * 1.1515
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
       return dist;
    }
    //*Display the cities name*//
let list=document.getElementById("myUL");
for(let i=0;i<data.length;i++){
    list.innerHTML+='<li><a href="#">'+data[i].name+'</a></li>';
}
//*We use the geolocation for getting the user current location lattitude and longitude values*//
     const getLocation=()=> {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
          alert("The Browser Does not Support Geolocation");
        }
      }

      const showPosition=(position)=> {
        let ulat=(position.coords.latitude);
        let ulng=(position.coords.longitude);
        //*Creation of array for storing the distance between user location and other cities*//
        const arr=[];
        for(let i=0;i<data.length;i++){
            arr[i]=distance(ulat,ulng,data[i].lat,data[i].lng,"k")
        }
        //*Getting the index value of the smallest distance*//
        let index=(arr.indexOf(Math.min(...arr)))
         document.getElementById("currentlocation").innerHTML=(data[index].name);
         document.getElementById("locbutton").innerHTML="["+(data[index].name)+" "+"]";
}
//*Selected city name will be displayed on the navigtion bar*//
const listItems=document.querySelectorAll("#myUL li a");
for(i=0;i<listItems.length;i++){
  listItems[i].addEventListener("click", activate);
}
function activate(){
    document.getElementById("locbutton").innerHTML="["+this.innerHTML+" "+" "+"]";
    document.querySelector(".popup").style.display = "none";
}
//*If user denied the his current loction,then alert window will appear*//
      const showError=(error)=> {
        if(error.PERMISSION_DENIED){
            alert("The User have denied the request for Geolocation.");
        }
      }
      getLocation();   
      //*Seach fiter*//
      const myFunction=()=> {
        let input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
    //*Popup window*//
      document.getElementById("locbutton").addEventListener("click",function()
      {
          document.querySelector(".popup").style.display = "flex";
      })
      document.querySelector(".close").addEventListener("click",function()
      {
          document.querySelector(".popup").style.display = "none";
      })
