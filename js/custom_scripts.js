var shown = false;
function showHideEmail() {
    if (shown) {
        document.getElementById('email').innerHTML = 'Show my Email';
        shown = false;
    } else {
        var myEmail = "<a href='mailto:grillinr@mail.uc.edu'>grillinr@mail.uc.edu</a>"
        document.getElementById('email').innerHTML = myEmail;
        shown = true;
    }
}