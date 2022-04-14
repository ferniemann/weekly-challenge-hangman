const wordSection = document.querySelector("#word");
const keyboard = document.querySelector("#keyboard");
const word = "internet";

renderWord();

function renderWord() {
    for (let i = 0; i < word.length; i++) {
        const container = document.createElement("div");
        container.dataset.index = i;
        wordSection.append(container);
    }
}

keyboard.addEventListener("click", pressKey);
document.body.addEventListener("keypress", pressKey);

function pressKey(e) {
    if (e.target.dataset.key) {
        const key = e.target.dataset.key;
        console.log(key);
        checkForLetter(key);
    } else if (e.key) {
        const key = e.key.toLowerCase();
        console.log(key);
    }
}

function checkForLetter(letter) {
    if (word.includes(letter)) {
        const indexes = [];

        for (let i = 0; i < word.length; i++) {
            if (word[i].toLowerCase() === letter) {
                indexes.push(i);
            }
        }

        indexes.forEach((index) => {
            const field = wordSection.querySelector(`[data-index="${index}"]`);
            field.innerText = letter;
        });
    } else {
        console.log("falsch");
    }
}

// function showLetter(letter) {
//     const correctLetter = wordSection.querySelector(`[data-letter="${letter}"]`);
//     correctLetter.innerText = letter;
// }
