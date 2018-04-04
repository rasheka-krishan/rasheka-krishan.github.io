function userWord() {
    var word = document.getElementById("input").value;
    var spanny_word = '<span>' + word.split('').join('</span><span>') + '</span>';

    document.getElementById("word").innerHTML = spanny_word;
}


function sadFunction() {

  //remove
  var element = document.getElementById("word");
  element.classList.remove("angry");

  element.classList.remove("loveletter");

  element.classList.remove("excited");

  //toggle

  var spanArray = document.querySelectorAll('span');
  spanArray[spanArray.length-3].classList.toggle('sadthirdtolastletter');

  spanArray[spanArray.length-2].classList.toggle('sadsecondtolastletter');

  spanArray[spanArray.length-1].classList.toggle('sadlastletter');

}

function excitedFunction() {

  //remove
  var element = document.getElementById("word");
  element.classList.remove("angry");

  element.classList.remove("loveletter");

  var spanArray = document.querySelectorAll('span');
  spanArray[spanArray.length-3].classList.remove('sadthirdtolastletter');

  spanArray[spanArray.length-2].classList.remove('sadsecondtolastletter');

  spanArray[spanArray.length-1].classList.remove('sadlastletter');

  //toggle
  var element = document.getElementById("word");
  element.classList.toggle("excited");
}

function angryFunction(){

  //remove
  var element = document.getElementById("word");
  element.classList.remove("loveletter");

  element.classList.remove("excited");

  var spanArray = document.querySelectorAll('span');
  spanArray[spanArray.length-3].classList.remove('sadthirdtolastletter');

  spanArray[spanArray.length-2].classList.remove('sadsecondtolastletter');

  spanArray[spanArray.length-1].classList.remove('sadlastletter');

  //toggle

  var element = document.getElementById("word");
  element.classList.toggle("angry");
}

function loveFunction(){

  //remove
  var element = document.getElementById("word");
  element.classList.remove("excited");

  element.classList.remove("angry");

  var spanArray = document.querySelectorAll('span');
  spanArray[spanArray.length-3].classList.remove('sadthirdtolastletter');

  spanArray[spanArray.length-2].classList.remove('sadsecondtolastletter');

  spanArray[spanArray.length-1].classList.remove('sadlastletter');

  //toggle
  var element = document.getElementById("word");
  element.classList.toggle("loveletter");

}
