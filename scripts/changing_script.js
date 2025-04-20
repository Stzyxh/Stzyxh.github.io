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

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector('.main-heading').classList.add('fade-in');
    }, 1000);

    const words = ["", "inequality", "facism", "oligarchy", "Exploitation", "Corruption", "war", "Destruction"];
    const wordDisplay = document.getElementById("wordDisplay");
    let index = 0;

    function displayWord() {
        if (index < words.length - 1) {
            wordDisplay.textContent = words[index];
            wordDisplay.classList.add("visible");

            setTimeout(() => {
                wordDisplay.classList.remove("visible");
                index++;
                setTimeout(displayWord, 1000);
            }, 1000);
        } else {
            wordDisplay.textContent = words[index];
            wordDisplay.classList.remove("visible");
            wordDisplay.classList.add("final");
            wordDisplay.style.opacity = 1;
        }
    }

    displayWord();
});
