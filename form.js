var $ = function (id) {
    return document.getElementById(id);
}
var joinForm = function () {
    var name = $("name");
    var email = $("email");
    var number = $("number");
    var isValid = true;
    
    // validate the first entry
    if (name.value == "") { 
        name.nextElementSibling.firstChild.nodeValue = 
            "This field is required.";
        isValid = false;
    } else {
        name.nextElementSibling.firstChild.nodeValue = "";
    } 
    if (isValid) {
        $("Ticket_form").submit(); 
    }
    // validate the second entry
    if (email.value == "") { 
        email.nextElementSibling.firstChild.nodeValue = 
            "This field is required.";
        isValid = false;
    } else {
        email.nextElementSibling.firstChild.nodeValue = "";
    } 
    if (isValid) {
        $("Ticket_form").submit(); 
    }
    // validate the third entry
    if (number.value == "") { 
        number.nextElementSibling.firstChild.nodeValue = 
            "This field is required.";
        isValid = false;
    } else {
        number.nextElementSibling.firstChild.nodeValue = "";
    } 
    if (isValid) {
        $("Ticket_form").submit(); 
    }
}
window.onload = function () {
    $("join_form").onclick = joinForm;
     $("name").focus();
    }
window.onload = function () {
    $("join_form").onclick = joinForm;
    $("email").focus();
 } 
window.onload = function () {
    $("join_form").onclick = joinForm;
    $("number").focus();
 } 
     
     
     