/**
 * This function changes the text of a paragraph upon
 * being called
 */
function myFunction() {
    document.getElementById("introductory_text").innerHTML = "now changed";
}

function displayDate() {
    document.getElementById("date").innerHTML = (new Date()).toString();
}

/**
 * Converts an array to a list of string type
 * @param {*} array 
 */
function convertStringArray (array) {
    return array.toString();
}