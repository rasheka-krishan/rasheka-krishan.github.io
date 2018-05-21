// select one element
// var element = document.querySelector('selector');

// click event listener
// element.addEventListener('click', function() {
//     // functionality to run on click
// });

// select multiple elements
// var elements = document.querySelectorAll('selector');

// random number between minimum and maximum
function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

// removes a class name from selected elements
// i.e. removeClassFrom('.page', 'active');
function removeClassFrom(selector, className) {
    var elements = document.querySelectorAll(selector);

    elements.forEach(function(element) {
        element.classList.remove(className);
    });
}

// adds a class name to selected elements
// i.e. addClassFrom('.page.page-2', 'active');
function addClassTo(selector, className) {
    var elements = document.querySelectorAll(selector);

    elements.forEach(function(element) {
        element.classList.add(className);
    });
}

// function to show a page and hide all others
// takes the page's class name as an argument (ie 'page-1', 'page-2', etc)
var showPage = function(className) {
    // select all page container divs
    var allPages = document.querySelectorAll('.page');

    // remove the active class name from each one, making them hidden based on the CSS
    allPages.forEach(function(page) {
        if (page) {
            page.classList.remove('active');
        }
    });

    // select the page to show ('.page.page-1', '.page.page-2', etc)
    var page = document.querySelector('.page.' + className);

    // add the 'active' class name to the element, making it visible based on the CSS
    if (page) {
        page.classList.add('active');
    }

    // select all navigation buttons
    var allButtons = document.querySelectorAll('.nav-button');

    // remove the active class name from each one, making them hidden based on the CSS
    allButtons.forEach(function(button) {
        if (button) {
            button.classList.remove('active');
        }
    });

    // select the navigation button to highlight ('.nav-button.page-1', 'nav-button.page-2', etc)
    var button = document.querySelector('.nav-button.' + className);

    // add the 'active class name to the element, making it be styled differently based on the CSS'
    if (button) {
        button.classList.add('active');
    }
}

var initLoadingPage = function(milliseconds) {
    var ms = milliseconds || 1000;

    // show loading page
    setTimeout(function() {
        showPage('page-1');
    }, ms);
}

// credit: http://www.javascriptkit.com/javatutors/touchevents2.shtml
function swipedetect(el, callback){
    var touchsurface = el;
    var swipedir;
    var startX;
    var startY;
    var distX;
    var distY;

    //required min distance traveled to be considered swipe
    var threshold = 150;

    // maximum distance allowed at the same time in perpendicular direction
    var restraint = 100;

    // maximum time allowed to travel that distance
    var allowedTime = 300;

    var elapsedTime;
    var startTime;
    var handleswipe = callback || function(swipedir) {};

    touchsurface.addEventListener('touchstart', function(e) {
        var touchobj = e.changedTouches[0];
        swipedir = 'none';
        dist = 0;
        startX = touchobj.pageX;
        startY = touchobj.pageY;

        // record time when finger first makes contact with surface
        startTime = new Date().getTime();
        e.preventDefault();
    }, false);

    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir)
        e.preventDefault()
    }, false)
}

//USAGE:
// var swipeZone = document.querySelector('.swipe');
// swipedetect(swipeZone, function(swipedir) {
//     // swipedir contains either "none", "left", "right", "top", or "down"
//     swipeZone.innerHTML = 'Swiped <span style="color:yellow">' + swipedir +'</span>';
// });
