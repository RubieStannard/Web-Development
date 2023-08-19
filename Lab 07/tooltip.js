/* write functions that defines the action for each event */
function showTip () {
var sidTip = document.getElementById("sidTip"); /* A variable named sidTip is defined */ /* Get access to the element with id "sidTip" */
sidTip.style.display = "inline"; /* The CSS property "display" of element "sidTip" is set to "inline" */ 
}

function hideTip () {
var sidTip = document.getElementById("sidTip"); /* create a variable named sidTip */ /* get access to the element by its id "sidTip" */
sidTip.style.display = "none"; /* hide element "sidTip" by setting the CSS property "display" to "none"   */
}

function init () {
var sid = document.getElementById("sid"); /* create a variable named sid */ /* get access to the HTML element by its id "sid" and link it to sid */
sid.onmouseover = showTip; /* link function showTip to the onmouseover event of sid */
sid.onmouseout = hideTip; /* link function hideTip to the onmouseout event of sid  */
sid.onfocus = showTip; /* for cursor on input field */
sid.onblur = hideTip; /* for cursor moving out */
}

/* link function init to the onload event of the window so that function init will be called when the page is loaded */ 
window.onload = init;