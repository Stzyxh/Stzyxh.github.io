document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector('h1').style.opacity = '1';
    }, 1000);

    setTimeout(function() {
        document.querySelector('p').style.opacity = '1';
    }, 2000);

    setTimeout(function() {
        document.querySelector('footer').style.opacity = '1';
    }, 3000);
});