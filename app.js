/* eslint-env jquery */

// I want to pick 5 random words from the object array and display them.  then user will choose one or more of the five words to add to a list that is "most like me".  Then with a continue button go back to the array and display another set of 5 words. keep doing this till all the words of the array have been viewed.  Choosing words by clicking on them, highligting them, and then drag and drop them to the other list box (OR prefer to click on word and have it animate and move to the other list box.)
// when finished the NEXT button will be pressed to bring up the next set of randomly choosen words.
// After all the word groups have been seen and selections made, then, based on the words choosen, and other keys related to those words are calculated, a personality profile will be displayed with information about their personality.

$( function() {
  $( "#draggable" ).draggable();
  $( "#droppable" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "Dropped!" );
    }
  });
} );


// the keywords array.
import keywordsArray from ./keywordsArray.js
const keywords = (./keywordsArray.js);

// function randomNoRepeats(keywords) {
//   var copy = keywords.slice(0);
//   return function() {
//     if (copy.length < 1) { copy = array.slice(0); }
//     var index = Math.floor(Math.random() * copy.length);
//     var item = copy[index];
//     copy.splice(index, 1);
//     return item;
//   };
// }
//
// var chooser = randomNoRepeats(['Foo', 'Bar', 'Gah']);
// choose`r(); // => "Bar"
// chooser(); // => "Foo"
// chooser(); // => "Gah"
// chooser(); // => "Foo" -- only repeats once all items are exhausted.


function diplayWordGroup(keywords){
  var rnd=Math.random()*5;
  rnd=Math.ceil(rnd);
  var word1 = rnd.keywordsArray.id.num;
  var word2;
  var word3;
  var word4;
  var word5;
}

if(rnd==n){q1=questionBank[questionNumber][1];q2=questionBank[questionNumber][2];q3=questionBank[questionNumber][3];}
if(rnd==2){q2=questionBank[questionNumber][1];q3=questionBank[questionNumber][2];q1=questionBank[questionNumber][3];}
if(rnd==3){q3=questionBank[questionNumber][1];q1=questionBank[questionNumber][2];q2=questionBank[questionNumber][3];}

$(stage).append('<div class="questionText">'+questionBank[questionNumber][0]+'</div><div id="1" class="option">'+q1+'</div><div id="2" class="option">'+q2+'</div><div id="3" class="option">'+q3+'</div>');
