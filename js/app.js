import { Person, PersonalityType } from './person';

const $ = require('jquery');


/* eslint-env jquery */

// I want to pick 5 random words from the object array and display them.  then user will choose one or more of the five words to add to a list that is "most like me".  Then with a continue button go back to the array and display another set of 5 words. keep doing this till all the words of the array have been viewed.  Choosing words by clicking on them, highligting them, and then drag and drop them to the other list box (OR prefer to click on word and have it animate and move to the other list box.)
// when finished the NEXT button will be pressed to bring up the next set of randomly choosen words.
// After all the word groups have been seen and selections made, then, based on the words choosen, and other keys related to those words are calculated, a personality profile will be displayed with information about their personality.

let currentWords = [];
const bestWords = [];

// CLICK TO MOVE WORD FROM NON SELECTED TO SELECTED

function moveWord(elem) {
  const word = $(this).text();
  $(this).detach().appendTo('#answerListBox .bestWords');
  const index = currentWords.findIndex((w) => w.word == word);
  bestWords.push(currentWords[index]);
  currentWords.splice(index, 1);

  console.log(currentWords);
  console.log(bestWords);
}

function removeWord() {
  const word = $(this).text();
  $(this).detach().appendTo('#chooseWordBox .wordlist');

  const index = bestWords.findIndex((w) => w.word == word);
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
      const rnd = Math.floor(Math.random() * keywords.length);
      const word = keywords[rnd];
      currentWords.push(word);
      keywords.splice(rnd, 1);
      $('.wordlist').append(`<span class='word'>${word.word }</span>`);
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
  const count = function (ary, classifier) {
    return ary.reduce((counter, item) => {
      const p = (classifier || String)(item);
      counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
      return counter;
    }, {});
  };

  const countByCenter = count(bestWords, (item) => item.center);

  const countByPrimary = count(bestWords, (item) => item.primary);

  const Secondary = (bestWords, (item) => item.secondary);

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
  let highestCenter = '';
  if (countByCenter.FE > countByCenter.IN) {
    highestCenter = 'FE';
  } else{
    highestCenter = 'IN';
  }
  if (countByCenter.TH > countByCenter[highestCenter]) {
    highestCenter = 'TH';
  }
  $('.personalityReport').append(`<h3>${  highestCenter  }</h3>`);

  $('.reports').show();
}

let highestPrimary = '';
if (countByPrimary.B > countByPrimary.G) {
  highestPrimary = 'B';
} else {
  highestPrimary = 'G';
}
if (countByPrimary.R > countByPrimary[highestPrimary]) {
  highestPrimary = 'R';
}
$('.personalityReport').append(`<h3${  highestPrimary  }</h3>`);

const Secondary = '';

$('.personalityReport').append(`<h3${  Secondary  }</h3>`);


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
    $('.personalityReport').append(`<h3>${  R  }</h4>` + `<br/>${  More}`);
  } else if (countByPrimary.B > countByPrimary.R && countByPrimary.B > countByPrimary.G) {
    $('.personalityReport').append(`<h3>${  B  }</h4>` + `<br/>${  More}`);
  } else if (countByPrimary.G > countByPrimary.R && countByPrimary.G > countByPrimary.R) {
      $('.personalityReport').append(`<h3>${  G  }</h4>` + `<br/>${  More}`);
    } else {
      $('.personalityReport').append(`<h3>${  Ba  }</h4>` + `<br/>${  More}`);
    }
}

// Secondary Trait

function personalityReport3(countBySecondary) {
    // hide quiz boxes to show report
  $('.contentBox').hide();
  $('.headerBox').hide();
  $('.contentBoxDescription').hide();
  $('.actions').hide();

  // Type Calc Analysis

  if (primary.R && secondary.o) {
    $('.personalityReport').append(`<h3>${  one  }</h4>` + `<br/>${  More}`);
  } else if (primary.G && secondary.f) {
      $('.personalityReport').append(`<h3>${  Two  }</h4>` + `<br/>${  More}`);
    } else if (primary.G && Secondary.g) {
      $('.personalityReport').append(`<h3>${  Three  }</h4>` + `<br/>${  More}`);
    } else if (primary.G && Secondary.t) {
      $('.personalityReport').append(`<h3>${  Four  }</h4>` + `<br/>${  More}`);
    } else if (primary.B && Secondary.l) {
      $('.personalityReport').append(`<h3>${  Five  }</h4>` + `<br/>${  More}`);
    } else if (primary.B && Secondary.b) {
      $('.personalityReport').append(`<h3>${  Six  }</h4>` + `<br/>${  More}`);
    } else if (primary.B && Secondary.w) {
      $('.personalityReport').append(`<h3>${  Seven  }</h4>` + `<br/>${  More}`);
    } else if (primary.R && Secondary.p) {
      $('.personalityReport').append(`<h3>${  Eight  }</h4>` + `<br/>${  More}`);
    } else if (primary.R && Secondary.r) {
      $('.personalityReport').append(`<h3>${  Nine  }</h4>` + `<br/>${  More}`);
    }
  $('.personalityReport').append(`<h3>${  Ba  }</h4>` + `<br/>${  More}`);
}

