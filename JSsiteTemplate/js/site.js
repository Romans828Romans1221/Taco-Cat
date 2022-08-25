// Get the values from the page 
//controller function 
function getValue() {

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let returnObj = checkforPalindrome(userString);

    displayString(returnObj);
}

//Reverse function 
//Logic Function 
function checkforPalindrome(userString) {

    //make sure all are lower case
    userString = userString.toLowerCase();

    //remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");

   
    let revString = [];
    let returnObj = {};

    //reverse a string using a loop 
    for (let index = userString.length -1; index >= 0; index--) {
        revString += userString[index];
        
    }

    // Checking if it is a palindrome
    if (revString == userString) {
        returnObj.msg = "Well Done! You enter a palindrome"
    } else {
        returnObj.msg = "Sorry! You did not enter a palindrome"
    }

    returnObj.reversed = revString;

    return returnObj;
}


//Display the reversed string to user 
//view function 
function displayString(returnObj) {

    //write the message to the page 
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;

    document.getElementById("alert").classList.remove("invisible");
}