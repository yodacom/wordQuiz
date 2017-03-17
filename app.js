let $ = require('jquery');
import {Person, PersonalityType} from './person';

/* eslint-env jquery */

// I want to pick 5 random words from the object array and display them.  then user will choose one or more of the five words to add to a list that is "most like me".  Then with a continue button go back to the array and display another set of 5 words. keep doing this till all the words of the array have been viewed.  Choosing words by clicking on them, highligting them, and then drag and drop them to the other list box (OR prefer to click on word and have it animate and move to the other list box.)
// when finished the NEXT button will be pressed to bring up the next set of randomly choosen words.
// After all the word groups have been seen and selections made, then, based on the words choosen, and other keys related to those words are calculated, a personality profile will be displayed with information about their personality.

let currentWords = [];
let bestWords = [];

// CLICK TO MOVE WORD FROM NON SELECTED TO SELECTED

function moveWord(elem) {
  let word = $(this).text();
  $(this).detach().appendTo('#answerListBox .bestWords');
  let index = currentWords.findIndex((w) => {
    return w.word == word;
  });
  bestWords.push(currentWords[index]);
  currentWords.splice(index, 1);

  console.log(currentWords);
  console.log(bestWords);
}

function removeWord() {
  let word = $(this).text();
  $(this).detach().appendTo('#chooseWordBox .wordlist');

  let index = bestWords.findIndex((w) => {
    return w.word == word;
  });
  currentWords.push(bestWords[index]);
  bestWords.splice(index, 1);

  console.log(currentWords);
  console.log(bestWords);
}

function displayWordGroup(keywords) {
  if (keywords.length == 0) {
    $('.wordlist').append('<h3> End of list Press the Analysis button to see your profile </h4>');
    $('#btnNext').off();
    $('#btnNext').click(analysis);
    $('#btnNext').text('Analysis');
  } else {
    currentWords = [];
    $('.wordlist').empty();

    for (let i = 0; i < 5; i++) {
        let rnd = Math.floor(Math.random() * keywords.length);
        let word = keywords[rnd];
        currentWords.push(word);
        keywords.splice(rnd, 1);
        $('.wordlist').append(`<span class='word'>${  word.word  }</span>`);
      }

    console.log(currentWords);
  }
}

$(() => {
  displayWordGroup(keywords);

  $('#btnNext').click((e) => {
    e.preventDefault();
    displayWordGroup(keywords);
  });

  $('#chooseWordBox').on('click', '.word', moveWord);
  $('#answerListBox').on('click', '.word', removeWord);

  $('#ref_btn').click(refreshPage);
});

// Analysis function
function analysis() {
  let count = function (ary, classifier) {
    return ary.reduce((counter, item) => {
        let p = (classifier || String)(item);
        counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
        return counter;
      }, {});
  };

  let countByCenter = count(bestWords, (item) => {
    return item.center;
  });
  personalityReport(countByCenter);
}



// GENERATE REPORT

// Personality Analysis

function personalityReport(countByCenter) {
    // hide quiz boxes to show report
  $('.contentBox').hide();
  $('.headerBox').hide();
  $('.contentBoxDescription').hide();
  $('.actions').hide();

// Center Analysis
  let highest = '';
  if(countByCenter.FE > countByCenter.IN){
    highest = 'FE';
  }else{
    highest = 'IN';
  }
  if(countByCenter.TH > countByCenter[highest]){
    highest = 'TH';
  }
  $('.personalityReport').append('<h3>' + highest + '</h3>');

  $('.reports').show();
}


function refreshPage() {
  location.reload();
}

// Primary Trait

function personalityReport2(countByPrimary) {
    // hide quiz boxes to show report
  $('.contentBox').hide();
  $('.headerBox').hide();
  $('.contentBoxDescription').hide();
  $('.actions').hide();
  
  // Primary Analysis

  if (countByPrimary.R > countByPrimary.B && countByPrimary.R > countByPrimary.G) {
    $('.personalityReport').append('<h3>' + R + '</h4>' + '<br/>' + More);
  } else if (countByPrimary.B > countByPrimary.R && countByPrimary.B > countByPrimary.G) {
      $('.personalityReport').append('<h3>' + B + '</h4>' + '<br/>' + More);
    } else if (countByPrimary.G > countByPrimary.R && countByPrimary.G > countByPrimary.R) {
      $('.personalityReport').append('<h3>' + G + '</h4>' + '<br/>' + More);
    }    else {
      $('.personalityReport').append('<h3>' + Ba + '</h4>' + '<br/>' + More);
    }
}

// Secondary Trait

function personalityReport3(countBySecondary) {
    // hide quiz boxes to show report
  $('.contentBox').hide();
  $('.headerBox').hide();
  $('.contentBoxDescription').hide();
  $('.actions').hide();
  
  // Secondary Analysis

  if (countBySecondary.R > countBySecondary.B && countBySecondary.R > countBySecondary.G) {
    $('.personalityReport').append('<h3>' + R + '</h4>' + '<br/>' + More);
  } else if (countBySecondary.B > countBySecondary.R && countBySecondary.B > countBySecondary.G) {
      $('.personalityReport').append('<h3>' + B + '</h4>' + '<br/>' + More);
    } else if (countBySecondary.G > countBySecondary.R && countBySecondary.G > countBySecondary.R) {
      $('.personalityReport').append('<h3>' + G + '</h4>' + '<br/>' + More);
    }    else {
      $('.personalityReport').append('<h3>' + Ba + '</h4>' + '<br/>' + More);
    }
}
