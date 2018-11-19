/**
 * This function changes the text of a paragraph upon
 * being called
 */
function myFunction() {
    document.getElementById("introductory_text").innerHTML = "now changed";
}

/**
 * This function is meant to display a picture to the user
 * upon being called
 */
function displayPic() {
    document.write()
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