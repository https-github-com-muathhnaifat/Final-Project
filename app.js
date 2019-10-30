'use strict';
var form = document.getElementById('find-movie');
var mainContainer = document.getElementsByTagName('main')[0];
var bodyContainer = document.getElementsByClassName("main-body")[0];



function Movie(name,age,type,rate,url) {
  this.name = name;
  this.age = age;
  this.rate = rate;
  this.type = type;
  this.url = url;
  
}

var movies = [];
movies.push(new Movie('The Dark Knight',18, 'action', 'high', 'img/1.jpg'));
movies.push(new Movie('Inception',18, 'action', 'high', 'img/2.jpg'));
movies.push(new Movie('The Matrix',18, 'action', 'high' , 'img/3.jpg'));
movies.push(new Movie('Leon : The Professional',18, 'action', 'high', 'img/4.jpg'));

movies.push(new Movie('The Shawshank Redemption',18, 'drama', 'high', 'img/5.jpg'));
movies.push(new Movie('12 Angry Men',18, 'drama', 'high', 'img/6.jpg'));
movies.push(new Movie('Fight Club',18, 'drama', 'high', 'img/7.jpg'));
movies.push(new Movie('The Godfather',18, 'drama', 'high', 'img/8.jpg'));

movies.push(new Movie('PK',18, 'comedy', 'high', 'img/9.jpg'));
movies.push(new Movie('The Hangover',18, 'comedy', 'high', 'img/10.jpg'));
movies.push(new Movie('ted',18, 'comedy', 'high', 'img/11.jpg'));
movies.push(new Movie('22 jump street',18, 'comedy', 'high', 'img/12.jpg'));


movies.push(new Movie('Gladiator',18, 'action', 'mid', 'img/13.jpg'));
movies.push(new Movie('Uri: The surgical strike',18, 'action', 'mid', 'img/14.jpg'));
movies.push(new Movie('Heat',18, 'action', 'mid', 'img/15.jpg'));
movies.push(new Movie('logan',18, 'action', 'mid', 'img/16.jpg'));

movies.push(new Movie('saving private ryan',18, 'drama', 'mid', 'img/17.jpg'));
movies.push(new Movie('joker',18, 'drama', 'mid', 'img/18.jpg'));
movies.push(new Movie('the green mile',18, 'drama', 'mid', 'img/19.jpg'));
movies.push(new Movie('se7en',18, 'drama', 'mid', 'img/20.jpg'));

movies.push(new Movie('3 idiots',18, 'comedy', 'mid', 'img/21.jpg'));
movies.push(new Movie('green book',18, 'comedy', 'mid', 'img/22.jpg'));
movies.push(new Movie('pride',18, 'comedy', 'mid', 'img/23.jpg'));
movies.push(new Movie('Booksmart',18, 'comedy', 'mid', 'img/24.jpg'));



movies.push(new Movie('Baby Driver',18, 'action', 'low', 'img/25.jpg'));
movies.push(new Movie("war for the planet of the apes on ",18, 'action', 'low', 'img/26.jpg'));
movies.push(new Movie('zootopia',18, 'action', 'low', 'img/27.jpg'));
movies.push(new Movie('blade',18, 'action', 'low', 'img/28.jpg'));

movies.push(new Movie('wonder',18, 'drama', 'low', 'img/29.jpg'));
movies.push(new Movie('molly’s game',18, 'drama', 'low', 'img/30.jpg'));
movies.push(new Movie('black book',18, 'drama', 'low', 'img/31.jpg'));
movies.push(new Movie('gifted',18, 'drama', 'low', 'img/32.jpg'));

movies.push(new Movie('dumb and dumber ',18, 'comedy', 'low', 'img/33.jpg'));
movies.push(new Movie('tropic thunder ',18, 'comedy', 'low', 'img/34.jpg'));
movies.push(new Movie('pardon ',18, 'comedy', 'low', 'img/35.jpg'));
movies.push(new Movie('the pink panther',18, 'comedy', 'low', 'img/36.jpg'));




movies.push(new Movie('x-men',0, 'action', 'high', 'img/37.jpg'));
movies.push(new Movie('avengers',0, 'action', 'high', 'img/38.jpg'));
movies.push(new Movie('spider man',0, 'action', 'high', 'img/39.jpg'));
movies.push(new Movie('transformers',0, 'action', 'high', 'img/40.jpg'));

movies.push(new Movie('ratatouille',0, 'drama', 'high', 'img/41.jpg'));
movies.push(new Movie('finding nemo',0, 'drama', 'high', 'img/42.jpg'));
movies.push(new Movie('the lion king',0, 'drama', 'high', 'img/43.jpg'));
movies.push(new Movie('Bridge to Terabithia',0, 'drama', 'high', 'img/44.jpg'));

movies.push(new Movie('Mr.bean',0, 'comedy', 'high', 'img/45.jpg'));
movies.push(new Movie('Zoolander',0, 'comedy', 'high', 'img/46.jpg'));
movies.push(new Movie('school of rock',0, 'comedy', 'high', 'img/47.jpg'));
movies.push(new Movie('ace ventura',0, 'comedy', 'high', 'img/48.jpg'));



movies.push(new Movie('Godzilla ',0, 'action', 'mid', 'img/49.jpg'));
movies.push(new Movie('The Men in Black ',0, 'action', 'mid', 'img/50.jpg'));
movies.push(new Movie('king kong ',0, 'action', 'mid', 'img/51.jpg'));
movies.push(new Movie('black panther ',0, 'action', 'mid', 'img/52.jpg'));

movies.push(new Movie('ice age ',0, 'drama', 'mid', 'img/53.jpg'));
movies.push(new Movie('frozen ',0, 'drama', 'mid', 'img/54.jpg'));
movies.push(new Movie('Brave  ',0, 'drama', 'mid', 'img/55.jpg'));
movies.push(new Movie('The Adventures of Tintin ',0, 'drama', 'mid', 'img/56.jpg'));

movies.push(new Movie('due date ',0, 'comedy', 'mid', 'img/57.jpg'));
movies.push(new Movie('elf ',0, 'comedy', 'mid', 'img/58.jpg'));
movies.push(new Movie('home alone ',0, 'comedy', 'mid', 'img/59.jpg'));
movies.push(new Movie('the mask ',0, 'comedy', 'mid', 'img/60.jpg'));



movies.push(new Movie('face / off ',0, 'action', 'low', 'img/61.jpg'));
movies.push(new Movie('speed',0, 'action', 'low', 'img/62.jpg'));
movies.push(new Movie('maze runner',0, 'action', 'low', 'img/63.jpg'));
movies.push(new Movie('the last samurai',0, 'action', 'low', 'img/64.jpg'));

movies.push(new Movie('wreck-it ralph ',0, 'drama', 'low', 'img/65.jpg'));
movies.push(new Movie('toy story',0, 'drama', 'low', 'img/66.jpg'));
movies.push(new Movie('rio ',0, 'drama', 'low', 'img/67.jpg'));
movies.push(new Movie('cars ',0, 'drama', 'low', 'img/68.jpg'));

movies.push(new Movie('liar Liar',0, 'comedy', 'low', 'img/69.jpg'));
movies.push(new Movie('the other guys ',0, 'comedy', 'low', 'img/70.jpg'));
movies.push(new Movie('night at the museum',0, 'comedy', 'low', 'img/71.jpg'));
movies.push(new Movie('johnny English ',0, 'comedy', 'low', 'img/72.jpg'));

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
// receives form data from find-movie.html
function formData(event) {
  event.preventDefault();


  var age = parseInt(event.target.age.value);
  var rate = event.target.rate.value;
  var type = event.target.type.value;
  console.log(age, rate, type);
  var searchResults = findMovie(age, type, rate);
  //console.log(searchResults);
mainContainer.removeChild(bodyContainer);
addMovies(searchResults)
}

function addMovies(movies) {
  console.log("movies",movies);
  var div = document.createElement('div');
  div.setAttribute('class', 'main-body');

  mainContainer.appendChild(div);
  for (var i = 0; i< movies.length; i++){
    var h2 = document.createElement('h2');
    div.appendChild(h2);

    h2.textContent = movies[i].name;

    var img = document.createElement('img');
    div.appendChild(img);
    
    img.setAttribute('src',movies[i].url);
    img.setAttribute('id', 'video-style');
    

    // video.setAttribute('autostart',true)
    //document.getElementById("video-style").controls = "true";
  }
}

form.addEventListener('submit', formData);
