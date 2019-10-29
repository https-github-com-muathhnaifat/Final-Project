'use strict';

// var movies = JSON.parse(Movie);
// var pathname = window.location.pathname;
// var address = pathname.split('/');
// var currentAddress = address[address.length - 1];
// Image.allImages = [];



function Movie(age, type, rate) {
  this.age = age;
  this.rate = rate;
  this.type = type;
  // this.url = url;
}


// function Image(filepath) {
//   this.filepath = filepath;
//   Image.allImages.push(this);
// }

// function allNewImages() {
//   new Image ('img6.jpg');
//   new Image ('img7.jpg');
//   new Image ('img8.jpg');
//   new Image ('img9.jpg');
//   new Image ('img10.jpg');
//   new Image ('img11.jpg');
//   new Image ('img14.jpg');
// }
// allNewImages();

// function generateRandomImg() {
//   var index = Math.floor(Math.random() * (Image.allImages.length));
//   var randomImg = Image.allImages[index];
//   return randomImg;
// }

// var chosenImg = generateRandomImg();

// function renderImage() {
//   var displayImage = document.getElementById('random-image');
//   displayImage.setAttribute('src', 'img/' + chosenImg.filepath);
// }

// call all functions depending on which page you're on


var movies = [];
movies.push(new Movie(18, 'action', 'high'));
movies.push(new Movie(18, 'action', 'high'));
movies.push(new Movie(18, 'action', 'high'));
movies.push(new Movie(18, 'action', 'high'));

movies.push(new Movie(18, 'drama', 'high'));
movies.push(new Movie(18, 'drama', 'high'));
movies.push(new Movie(18, 'drama', 'high'));
movies.push(new Movie(18, 'drama', 'high'));

movies.push(new Movie(18, 'Romance', 'high'));
movies.push(new Movie(18, 'Romance', 'high'));
movies.push(new Movie(18, 'Romance', 'high'));
movies.push(new Movie(18, 'Romance', 'high'));

movies.push(new Movie(18, 'Comedy', 'high'));
movies.push(new Movie(18, 'Comedy', 'high'));
movies.push(new Movie(18, 'Comedy', 'high'));
movies.push(new Movie(18, 'Comedy', 'high'));


function findMovie(age, type, rate) {
  var result = [];
  for (var i = 0; i < movies.length; i++) {
    var currentMovie = movies[i];
    if (age >= currentMovie.age && currentMovie.type === type && currentMovie.rate === rate) {


      result.push(currentMovie);
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
  console.log(searchResults);
}

var form = document.getElementById('find-movie');
form.addEventListener('submit', formData);






