
var cForm = document.querySelector('form');
var header = document.querySelector('#search-header');
function loadResults(){
//Create XMLHttpRequest
// Prepare the request
var artist = document.querySelector('#s').value;

header.innerHTML += '<h2><span id="page-header">Search results for '+ artist + '</span></h2>';
var url= 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + artist + '&api_key=369799ed118f787a793b3301c86203b3&format=json';

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


var results = document.querySelectorAll('#search-results article');
//if it exists
if(results.length > 0){


for(var i=0; i < results.length; i++ ){

var allImages = results[i].getElementsByTagName('img');
for(var j=0; j < allImages.length; j++){
//if has attribue src, update the value
if(allImages[j].hasAttribute('src')){
allImages[j].setAttribute('src', responseObject.results.artistmatches.artist[i].image[3]["#text"]);
}	
}

//update values
results[i].getElementsByTagName('h3')[0].innerHTML = responseObject.results.artistmatches.artist[i].name;


}

}

};

//add event listener to submit button
if(cForm != null)
cForm.addEventListener('submit', loadResults, false);