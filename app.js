'use strict';
var container = document.getElementById('main-body');


function Movie(name,age,type,rate,url) {
  this.name = name;
  this.age = age;
  this.rate = rate;
  this.type = type;
  this.url = url;
  
}

var movies = [];
movies.push(new Movie('The Dark Knight',18, 'action', 'high', 'https://www.youtube.com/watch?v=_dz1b36GLU4'));
movies.push(new Movie('Inception',18, 'action', 'high'));
movies.push(new Movie('The Matrix',18, 'action', 'high'));
movies.push(new Movie('Leon : The Professional',18, 'action', 'high'));

movies.push(new Movie('The Shawshank Redemption',18, 'drama', 'high'));
movies.push(new Movie('12 Angry Men',18, 'drama', 'high'));
movies.push(new Movie('Fight Club',18, 'drama', 'high'));
movies.push(new Movie('The Godfather',18, 'drama', 'high'));

movies.push(new Movie('PK',18, 'comedy', 'high'));
movies.push(new Movie('The Hangover',18, 'comedy', 'high'));
movies.push(new Movie('ted',18, 'comedy', 'high'));
movies.push(new Movie('22 jump street',18, 'comedy', 'high'));


movies.push(new Movie('Gladiator',18, 'action', 'mid'));
movies.push(new Movie('Uri: The surgical strike',18, 'action', 'mid'));
movies.push(new Movie('Heat',18, 'action', 'mid'));
movies.push(new Movie('logan',18, 'action', 'mid'));

movies.push(new Movie('saving private ryan',18, 'drama', 'mid'));
movies.push(new Movie('joker',18, 'drama', 'mid'));
movies.push(new Movie('the green mile',18, 'drama', 'mid'));
movies.push(new Movie('se7en',18, 'drama', 'mid'));

movies.push(new Movie('3 idiots ',18, 'comedy', 'mid'));
movies.push(new Movie('green book',18, 'comedy', 'mid'));
movies.push(new Movie('pride',18, 'comedy', 'mid'));
movies.push(new Movie('Booksmart',18, 'comedy', 'mid'));



movies.push(new Movie('Baby Driver',18, 'action', 'low'));
movies.push(new Movie("Inceptiwar for the planet of the apes on ",18, 'action', 'low'));
movies.push(new Movie('zootopia',18, 'action', 'low'));
movies.push(new Movie('blade',18, 'action', 'low'));

movies.push(new Movie('wonder',18, 'drama', 'low'));
movies.push(new Movie('molly’s game',18, 'drama', 'low'));
movies.push(new Movie('black book',18, 'drama', 'low'));
movies.push(new Movie('gifted ',18, 'drama', 'low'));

movies.push(new Movie('dumb and dumber ',18, 'comedy', 'low'));
movies.push(new Movie('tropic thunder ',18, 'comedy', 'low'));
movies.push(new Movie('pardon ',18, 'comedy', 'low'));
movies.push(new Movie('the pink panther',18, 'comedy', 'low'));





movies.push(new Movie('x-men',0, 'action', 'high'));
movies.push(new Movie('avengers',0, 'action', 'high'));
movies.push(new Movie('spider man',0, 'action', 'high'));
movies.push(new Movie('transformers',0, 'action', 'high'));

movies.push(new Movie('ratatouille',0, 'drama', 'high'));
movies.push(new Movie('finding nemo',0, 'drama', 'high'));
movies.push(new Movie('the lion king',0, 'drama', 'high'));
movies.push(new Movie('monster',0, 'drama', 'high'));

movies.push(new Movie('bean',0, 'comedy', 'high'));
movies.push(new Movie('Zoolander',0, 'comedy', 'high'));
movies.push(new Movie('school of rock',0, 'comedy', 'high'));
movies.push(new Movie('ace ventura',0, 'comedy', 'high'));



movies.push(new Movie('Godzilla ',0, 'action', 'mid'));
movies.push(new Movie('super man ',0, 'action', 'mid'));
movies.push(new Movie('king kong ',0, 'action', 'mid'));
movies.push(new Movie('black panther ',0, 'action', 'mid'));

movies.push(new Movie('ice age ',0, 'drama', 'mid'));
movies.push(new Movie('frozen ',0, 'drama', 'mid'));
movies.push(new Movie('tarazn ',0, 'drama', 'mid'));
movies.push(new Movie('tintin ',0, 'drama', 'mid'));

movies.push(new Movie('due date ',0, 'comedy', 'mid'));
movies.push(new Movie('elf ',0, 'comedy', 'mid'));
movies.push(new Movie('home alone ',0, 'comedy', 'mid'));
movies.push(new Movie('the mask ',0, 'comedy', 'mid'));



movies.push(new Movie('face / off ',0, 'action', 'low'));
movies.push(new Movie("speed  ",0, 'action', 'low'));
movies.push(new Movie('maze runner ',0, 'action', 'low'));
movies.push(new Movie('the last samurai ',0, 'action', 'low'));

movies.push(new Movie('wreck-it ralph ',0, 'drama', 'low'));
movies.push(new Movie('toy story',0, 'drama', 'low'));
movies.push(new Movie('rio ',0, 'drama', 'low'));
movies.push(new Movie('cars ',0, 'drama', 'low'));

movies.push(new Movie('liar  ',0, 'comedy', 'low'));
movies.push(new Movie('the other guys ',0, 'comedy', 'low'));
movies.push(new Movie('night at the museum  ',0, 'comedy', 'low'));
movies.push(new Movie('johnny English ',0, 'comedy', 'low'));

var result = [];
function findMovie(age, type, rate) {
  for (var i = 0; i < movies.length; i++) {
    var currentMovie = movies[i];
    if (currentMovie.type === type && currentMovie.rate === rate) {
      if(age === currentMovie.age ){
      
      result.push(currentMovie);
      }
    }
      
  }
  return result;
}

/* INPUTS FROM FORM */
function formData(event) {
  event.preventDefault();


  var age = parseInt(event.target.age.value);
  var rate = event.target.rate.value;
  var type = event.target.type.value;
  console.log(age, rate, type);
  var searchResults = findMovie(age, type, rate);
  console.log(searchResults);

  var movieResults = document.createElement('h1');
  container.appendChild(movieResults);
  for(var i = 0; i < searchResults.length ; i++){
    
    movieResults.textContent = searchResults;

}


}
// function renderResult(){
//   var movieResults = document.createElement('h1');
//   container.appendChild(movieResults);
//   for(var i = 0; i < result.length ; i++){
//     addingElement(result);
//   }
// }

var form = document.getElementById('find-movie');
form.addEventListener('submit', formData);





