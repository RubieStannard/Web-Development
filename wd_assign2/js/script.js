/* write the function toogle() that shows delivery address */
function showDiv(toggle){
document.getElementById(toggle).style.display = 'block';
}

/* write the function toogle() that shows online payment */
function showDiv(toggle1){
document.getElementById(toggle1).style.display = 'block';
}

/* write functions that define the action for each event */
function validate() {
var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var sid = document.getElementById("sid").value;
var genm = document.getElementById("genm").checked; 
var genf = document.getElementById("genf").checked;
var geno = document.getElementById("geno").checked;
var phnum = document.getElementById("phnum").value;
var email = document.getElementById("email").value;
var pwd1 = document.getElementById("pwd1").value;
var pwd2 = document.getElementById("pwd2").value;
var pstcod = document.getElementById("pstcod").value;
var errMsg = " "; /* stores the error message */
var result = true; /* assumes no errors */
var pattern = /^[a-zA-Z ]+$/; /* regular expression for letters and spaces only */

/* Rule 1, check if all required inputs have value */
if (fname == "") { 
errMsg += "First name cannot be empty.\n"; 
} 

if (lname == "") { 
errMsg += "Last name cannot be empty.\n"; 
} 

if (sid == "") { 
errMsg += "Username cannot be empty.\n"; 
} 

if ((genm == "")&&(genf == "")&&(geno == "")) { 
errMsg += "A gender must be selected.\n"; 
}

if (phnum == "") { 
errMsg += "Phone number cannot be empty.\n"; 
} 

if (email == "") { 
errMsg += "Email cannot be empty.\n"; 
} 

if (pwd1 == "") { 
errMsg += "Password cannot be empty.\n"; 
} 

if (pwd2 == "") { 
errMsg += "Retype password cannot be empty.\n"; 
} 

if (pwd1.length == 7) { 
errMsg += "Password must be at least 7 digits.\n"; 
}

if (pwd2.length == 7) { 
errMsg += "Retype password must be at least 7 digits.\n"; 
}

if (pwd1 == "") { 
errMsg += "Password must contain at least one uppercase letter and one lowercase letter.\n"; 
}

if (pwd2 == "") { 
errMsg += "Retype password must contain at least one uppercase letter and one lowercase letter.\n"; 
}

if (pstcod.length == 4) { 
errMsg += "Post code must be at 4 digits.\n"; 
}
	
/* Rule 2, check if the email contains an @ symbol  */
if (email.indexOf('@') < 0 ) { 
errMsg += "Email must contain an @ symbol.\n"; 
}
	
/* Rule 3, check if password and retype password are the same */
if (pwd1 != pwd2) {
errMsg += "Passwords do not match.\n";
}

/* Display error message any error(s) is/are detected */
if (errMsg != "") {
alert (errMsg);
result = false;
} 
return result;
}

/* link HTML elements to corresponding event function */
function init () {

/* link the variables to the HTML elements */
var regForm = document.getElementById("regform");
/* assigns functions to corresponding events */
regForm.onsubmit = validate;
}

/* execute the initialisation function once the window*/
window.onload = init;