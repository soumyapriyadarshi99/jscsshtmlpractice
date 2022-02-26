 function togglemenu(){
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');

    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

const adminmovie = [ 
    { 'moviename':'PUSPA', 'price':'RS.1200', 'payment':'CREDIT-CARD', 'status':'PAID'},
    { 'moviename':'BAHUBALI', 'price':'RS.700', 'payment':'DEBIT-CARD', 'status':'PAID'},
    { 'moviename':'KGF', 'price':'RS.800', 'payment':'CREDIT-CARD', 'status':'PAID'},
    { 'moviename':'TAARE ZAMEEN PAR', 'price':'RS.900', 'payment':'DEBIT-CARD', 'status':'PAID'},
    { 'moviename':'MISSION MANGAL', 'price':'RS.1300', 'payment':'CREDIT-CARD', 'status':'PAID'},
    { 'moviename':'USTAD HOTEL', 'price':'RS.400', 'payment':'PAYTM', 'status':'PAID'},
    { 'moviename':'MASTER', 'price':'RS.700', 'payment':'CREDIT-CARD', 'status':'PAID'},
    { 'moviename':'BIGIL', 'price':'RS.500', 'payment':'PAYTM', 'status':'PAID'},
    { 'moviename':'PUSHPA', 'price':'RS.1200', 'payment':'CREDIT-CARD', 'status':'PAID'},
    { 'moviename':'BAHUBALI', 'price':'RS.1200', 'payment':'PAYTM', 'status':'PAID'},
    { 'moviename':'BIGIL', 'price':'RS.700', 'payment':'CREDIT-CARD', 'status':'PAID'},
]

buildTable(adminmovie)
function buildTable(data) {
  const table = document.getElementById('movietable')
 for (let i=0; i<data.length; i++){
     const row= `<tr>
     <td>${data[i].moviename}</td>
     <td>${data[i].price}</td>
     <td>${data[i].payment}</td>
     <td>${data[i].status}</td>
    
    </tr>`
    
    
    table.innerHTML+= row
 }

};
