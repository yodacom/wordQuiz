/* eslint-env jquery */

// I want to pick 5 random words from the object array and display them.  then user will choose one or more of the five words to add to a list that is "most like me".  Then with a continue button go back to the array and display another set of 5 words. keep doing this till all the words of the array have been viewed.  Choosing words by clicking on them, highligting them, and then drag and drop them to the other list box (OR prefer to click on word and have it animate and move to the other list box.)
// when finished the NEXT button will be pressed to bring up the next set of randomly choosen words.
// After all the word groups have been seen and selections made, then, based on the words choosen, and other keys related to those words are calculated, a personality profile will be displayed with information about their personality.

var currentWords = [];
var bestWords = [];

$( function() {

  displayWordGroup(keywords);

  $('#btnNext').click(function(){
    displayWordGroup(keywords);
  });

  $( "#draggable" ).draggable();
  $( "#droppable" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "Dropped!" );
    }
  });
});

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

function displayWordGroup(keywords){

  if(keywords.length == 0){
    //end of list
  } else {

    currentWords = [];
    $('.wordlist').empty();

    for (var i = 0; i < 5; i++) {
      var rnd = Math.floor(Math.random() * keywords.length);
      var word = keywords[rnd];
      currentWords.push(word);
      keywords.splice(rnd, 1);
      $('.wordlist').append("<li class='word' id='draggable'>" + word.word + '</li>');
    }

    console.log(currentWords);

  }

}
