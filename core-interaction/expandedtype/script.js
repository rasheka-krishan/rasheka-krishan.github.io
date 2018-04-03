function userWord() {
    var word = document.getElementById("input").value;
    var length = word.length;

    var spanny_word = '<span>' + word.split('').join('</span><span>') + '</span>';

    document.getElementById("word").innerHTML = spanny_word;
}


function sadFunction() {
  
  //remove
  var element = document.getElementById("word");
  element.classList.remove("angry");

  var element = document.getElementById("word");
  element.classList.remove("loveletter");

  var element = document.getElementById("word");
  element.classList.remove("excited");

  //toggle

  var spansArray = document.querySelectorAll('span');
  spansArray[spansArray.length-3].classList.toggle('sadthirdtolastletter');

  var spansArray = document.querySelectorAll('span');
  spansArray[spansArray.length-2].classList.toggle('sadsecondtolastletter');

  var spansArray = document.querySelectorAll('span');
  spansArray[spansArray.length-1].classList.toggle('sadlastletter');

}

function excitedFunction() {

  //remove
  var element = document.getElementById("word");
  element.classList.remove("angry");

  var element = document.getElementById("word");
  element.classList.remove("loveletter");

  var spansArray = document.querySelectorAll('span');
  spansArray[spansArray.length-3].classList.remove('sadthirdtolastletter');

  var spansArray = document.querySelectorAll('span');
  spansArray[spansArray.length-2].classList.remove('sadsecondtolastletter');

  var spansArray = document.querySelectorAll('span');
  spansArray[spansArray.length-1].classList.remove('sadlastletter');

  //toggle
  var element = document.getElementById("word");
  element.classList.toggle("excited");
}

function angryFunction(){

  //remove
  var element = document.getElementById("word");
  element.classList.remove("loveletter");

  var element = document.getElementById("word");
  element.classList.remove("excited");

  var spansArray = document.querySelectorAll('span');
  spansArray[spansArray.length-3].classList.remove('sadthirdtolastletter');

  var spansArray = document.querySelectorAll('span');
  spansArray[spansArray.length-2].classList.remove('sadsecondtolastletter');

  var spansArray = document.querySelectorAll('span');
  spansArray[spansArray.length-1].classList.remove('sadlastletter');

  //toggle

  var element = document.getElementById("word");
  element.classList.toggle("angry");
}

function loveFunction(){

  //remove
  var element = document.getElementById("word");
  element.classList.remove("excited");

  var element = document.getElementById("word");
  element.classList.remove("angry");

  var spansArray = document.querySelectorAll('span');
  spansArray[spansArray.length-3].classList.remove('sadthirdtolastletter');

  var spansArray = document.querySelectorAll('span');
  spansArray[spansArray.length-2].classList.remove('sadsecondtolastletter');

  var spansArray = document.querySelectorAll('span');
  spansArray[spansArray.length-1].classList.remove('sadlastletter');

  //toggle
  var element = document.getElementById("word");
  element.classList.toggle("loveletter");

}
