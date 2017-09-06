$(document).ready(function(){
    $('.button-collapse').sideNav();

    // Set the indeterminate value of checkboxes
    // based on a classname
    var indeterminateCheckboxes = document.getElementsByClassName('indeterminate');
    for (var i = 0; i < indeterminateCheckboxes.length; i++) {
        indeterminateCheckboxes[i].indeterminate = true;
    }
});
