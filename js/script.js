
var cForm = document.querySelector('form');
var header = document.querySelector('#search-header');
function loadResults(){
//Create XMLHttpRequest
// Prepare the request
  var artist = document.querySelector('#s').value;

  header.innerHTML += '<h2><span id="page-header">Search results for '+ artist + '</span></h2>';
  var url= 'https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + artist + '&api_key=369799ed118f787a793b3301c86203b3&format=json';

  xhr.open('GET', url, true);

  //Send the request
  xhr.send(null);
  return false;


}
var xhr = new XMLHttpRequest();



//Query String


//when response has loaded
xhr.onload = function(){

  	//checking if server status was ok. Remove if working locally
  //if(xhr.status === 200){ // that is ok status


  // create object to stor JSON data

  var responseObject = JSON.parse(xhr.responseText);


  var results = document.querySelector('.result-container');

  var newContent = "";
  for(var i=0; i < responseObject.results.artistmatches.artist.length && i < 6; i++ ){
    newContent += '<article class="result-item">'
    newContent += '<img src="' + responseObject.results.artistmatches.artist[i].image[3]["#text"] + '"/>';
    newContent += '<div><h3>' +  responseObject.results.artistmatches.artist[i].name + '</h3></div>';
    newContent += '</article>';
    responseObject.results.artistmatches.artist[i]

  }
  //Save results in local storage
  localStorage.setItem('artist-results', newContent);
  //update DOM with results
  results.innerHTML = newContent;


};

//add event listener to submit button
if(cForm != null)
cForm.addEventListener('submit', loadResults, false);


var showMenu = document.querySelector('.menu-toggle');
//funcion to display nav on click
function showNav(){

  document.getElementById("nav").style.display = "block";
}
//add even on click event listener to show the menu
showMenu.addEventListener('click', showNav, false);


var hideMenu = document.querySelector('.menu-close');
//hide menu
function hideNav(){

  document.getElementById("nav").style.display = "none";
}
//add even on click event listener to hide the menu
hideMenu.addEventListener('click', hideNav, false);
