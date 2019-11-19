


var input =document.querySelector('input');
var button =document.querySelector('button');
var val =input.value


button.addEventListener('click', search);

function search(){
    val=input.value;
    var photo = document.querySelector('.photo')
    var omb=`http://www.omdbapi.com/?i=tt3896198&apikey=84059532&t=${val}`;
    var reg =new Request(omb);
    fetch(reg)
    .then((responce)=>{
        return responce.json();
    })
    .then((data)=>{
    document.querySelector('p').innerHTML = data.Title;
     photo.innerHTML =`<img src="${data.Poster}" alt=">`
})}
