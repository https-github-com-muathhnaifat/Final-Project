'use strict';
var score =0;

alert('Hi! This is to check how much do you like movies, so that you can get a free ticket to the cinema');

function questions(){

    var q1 = prompt('"Never" is the word that appears the most often in Bond movies?');
    q1 = q1.toLowerCase();
    if (q1 == 'yes' || q1 == 'y') {
        alert('True, beside the word "The" ');
        score ++;
    }
    else if (q1 == 'no' || q1 == 'n') {
        alert('Flase, it does appear a lot beside the word "The"');
        
    }
    
    var q2 = prompt('Maleficent, was the name of the Queen witch at the Sleeping Beauty?');
    q2 = q2.toLowerCase();
    ``
    if (q2 == 'yes' || q2 == 'y') {
        alert('True');
        score ++;
    } else if (q2 == 'no' || q2 == 'n') {
        alert('False');
        
    }
    
    
    var q3 = prompt('Clint Eastwood\'s first movie was "Francis in the Navy" and it was made in 1945?');
    q3 = q3.toLowerCase();
    
    if (q3 == 'yes' || q3 == 'y') {
        alert('False, "Francis in the Navy" was made in 1955');
        
    } else if (q3 == 'no' || q3 == 'n') {
        alert('True, it was made in 1955');
        score ++;
    }
    
    var q4 = prompt('George Clooney was the star of the movie "The Sixth Sense"? ');
    q4 = q4.toLowerCase();
    
    if (q4 == 'yes' || q4 == 'y') {
        alert('No, it was Bruce Willis.');
        // console.log('Why? What did I do to you? :\'( ');
    } else if (q4 == 'no' || q4 == 'n') {
        alert('True, it was Bruce Willis.');
        score ++;
        // console.log('happy to hear that *blushing* ');
    }
    
    
    var q5 = prompt('Keanu Reeves was born in Italy?');
    q5 = q5.toLowerCase();
    
    if (q5 == 'yes' || q5 == 'y') {
        alert('No, he was born at Lebanon');
        // console.log('My webpage brightness will keep you away from q5ness :) ');
    } else if (q5 == 'no' || q5 == 'n') {
        alert('True, he was born at Lebanon');
        score ++;
        // consol.log('Keep it off I\'ll got to sleep and leave you with my webpage :D');
    }
}    

function gettingTicket(){
    if( score < 5){
        alert('well, seems you got ' + score + ' out of 5, so we are afraid you did not get the tickets');
    } else {
        alert('You got ' + score + ' out of 5, you have earned the tickets! yaaay the voucher is: 96XY512');
    }
}

questions();
gettingTicket();
