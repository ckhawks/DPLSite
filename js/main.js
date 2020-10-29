let scrollPos = 0
let prevScrollPos = 0
let notPrevShown = true;

window.onscroll = function() {
    scrollPos = window.scrollY;

    if (notPrevShown && scrollPos > 100) {
        let hidden = document.getElementsByClassName("hidden")
        hidden[0].setAttribute("class", hidden[0].getAttribute("class").replace('hidden', 'navshow'))
        notPrevShown = false;
    } else if (prevScrollPos <= 100 && scrollPos > 100) {
        let hide = document.getElementsByClassName("hide")
        hide[0].setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-dark fixed-top navshow")
    } else if (prevScrollPos > 100 && scrollPos <= 100 ) {
        let show = document.getElementsByClassName("navshow")
        show[0].setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-dark fixed-top hide")
    }

    prevScrollPos = scrollPos;
}