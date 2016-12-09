/* eslint-env jquery */

// I want to pick 5 random words from the object array and display them.  then user will choose one or more of the five words to add to a list that is "most like me".  Then with a continue button go back to the array and display another set of 5 words. keep doing this till all the words of the array have been viewed.  Choosing words by clicking on them, highligting them, and then drag and drop them to the other list box (OR prefer to click on word and have it animate and move to the other list box.)
// when finished the NEXT button will be pressed to bring up the next set of randomly choosen words.
// After all the word groups have been seen and selections made, then, based on the words choosen, and other keys related to those words are calculated, a personality profile will be displayed with information about their personality.

var currentWords = [];
var bestWords = [];

$( function() {

  displayWordGroup(keywords);

  $('#btnNext').click(function(e){
    e.preventDefault();
    displayWordGroup(keywords);
  });

  $('#chooseWordBox').on('click', '.word', moveWord);
  $('#answerListBox').on('click', '.word', removeWord);
  $('#btnNext Analysis').on('click', 'analysis');

});

// CLICK TO MOVE WORD FROM NON SELECTED TO SELECTED

function moveWord(elem){
    var word = $(this).text();
    $(this).detach().appendTo('#answerListBox .bestWords');
    var index = currentWords.findIndex(function(w){
      return w.word == word;
    });
    bestWords.push(currentWords[index]);
    currentWords.splice(index, 1);

    console.log(currentWords);
    console.log(bestWords);

}

function removeWord(){
    var word = $(this).text();
    $(this).detach().appendTo('#chooseWordBox .wordlist');

    var index = bestWords.findIndex(function(w){
        return w.word == word;
    });
    currentWords.push(bestWords[index]);
    bestWords.splice(index, 1);

    console.log(currentWords);
    console.log(bestWords);
}

function displayWordGroup(keywords){

  if(keywords.length == 0){
    $('.wordlist').append("<h3> End of list Press the Analysis button to see your profile </h4>");
    $('#btnNext').off();
    $('#btnNext').click(analysis);
    $('#btnNext').text('Analysis');
  } else {

    currentWords = [];
    $('.wordlist').empty();

    for (var i = 0; i < 5; i++) {
      var rnd = Math.floor(Math.random() * keywords.length);
      var word = keywords[rnd];
      currentWords.push(word);
      keywords.splice(rnd, 1);
      $('.wordlist').append("<span class='word'>" + word.word + '</span>');
    }

    console.log(currentWords);

  }
}

// for now I just want to bring up the sum of the each of the "center" properties of the chosen words.  There are three centers: "In" "FE" "TH" we will count occurances of each in the bestWords array and the highest count will be output.


// THIRD ATTEMPT
function analysis(){
  count = function(ary, classifier) {
      return ary.reduce(function(counter, item) {
          var p = (classifier || String)(item);
          counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
          return counter;
      }, {})
  }


  countByCenter = count(bestWords, function(item) { return item.center });
  personalityReport(countByCenter);
}
// GENERATE REPORT

  function personalityReport(countByCenter){
    $(".contentBox").hide();
    $('.headerBox').hide();
    $('.contentBoxDescription').hide();
    if (countByCenter.FE > countByCenter.IN &&  countByCenter.FE > countByCenter.TH){
     $('.personalityReport').append("<h3>" + Fe + "</h4>");
  } else if (countByCenter.IN > countByCenter.FE && countByCenter.IN > countByCenter.TH) {
      $('.personalityReport').append("<h3>" + In + "</h4>");
  } else if (countByCenter.TH > countByCenter.IN && countByCenter.TH > countByCenter.FE){
    $('.personalityReport').append("<h3>" + Th + "</h4>");
  }
    else {
      $('.personalityReport').append("<h3>" + Ba + "</h4>");
    }
  }
