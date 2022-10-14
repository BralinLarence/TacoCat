//CONTROLLER FUNCTION(S)
//Get the values of the string
function getValue() {
    document.getElementById("alert").classList.add("invisible");

    // Get user input
    let userString = document.getElementById("userString").value;
  
    //Check for palindrome
    let returnObj = isPalindrome(userString);

    // display message to the screen
    displayMessage(returnObj)
}

//LOGIC FUNCTION(S)
//Check string for palindrome
function isPalindrome(_userString) {
  
    _userString = _userString.toLowerCase();
  
    //remove spaces in special characters
    let regex =/[^a-z0-9]/gi;
    _userString = _userString.replace(regex, "");

    //reverse the string
    let reversedString = [];
    let returnObj = {};

    for (let index = _userString.length - 1; index >= 0; index--) {
      reversedString += _userString[index];
    }

    //Check if a Palindrome is entered.
    if(reversedString == _userString)
    {
        returnObj.msg = "Well Done! You entered a Palindrome!";
        returnObj.isTrue = true;
    }
    else{
        returnObj.msg = "Sorry! you did not enter a Palindrome!";
        returnObj.isTrue = false;
    }

    returnObj.reversed = reversedString;

    return returnObj
}

//VIEW FUNCTION(S)
//Display the reversed string to the user
function displayMessage(returnObj) {

    if(returnObj.isTrue)
    {
        document.getElementById("alert").classList.remove("invisible", "alert-danger");
        document.getElementById("alert").classList.add("alert-success");
        document.getElementById("message").classList.remove("alert-danger");
        document.getElementById("message").classList.add("alert-success");
        document.getElementById("alertHeader").innerHTML = returnObj.msg;
        document.getElementById("message").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
        
    }
    else
    {
        document.getElementById("alert").classList.remove("invisible", "alert-success");
        document.getElementById("alert").classList.add("alert-danger");
        document.getElementById("message").classList.remove("alert-success"); 
        document.getElementById("message").classList.add("alert-danger");
        document.getElementById("alertHeader").innerHTML = returnObj.msg;
        document.getElementById("message").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;       
    }
}

//Clear string input
//View function
function clearForm() {
    document.getElementById("alert").classList.add("invisible");

    let clearString = [];
    clearString = "";
    document.getElementById("userString").value = clearString;
}
