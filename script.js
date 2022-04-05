const keyboard = document.querySelector("#keyboard");
const word = "Haus";
let markedLetter = "";

renderField();

keyboard.addEventListener("click", submitPressedKey);
document.addEventListener("keypress", submitPressedKey);

function renderField() {
    const field = document.querySelector("#game-field");

    for (let i = 0; i < word.length; i++) {
        const container = document.createElement("div");
        container.classList.add("letter");
        container.dataset.id = i;

        field.append(container);
    }
}

function submitPressedKey(e) {
    if (e.target.dataset.key) {
        const key = e.target.dataset.key;

        if (key === "enter") {
            checkLetter();
        } else {
            markButton(key);
        }
    } else if (e.key) {
        const key = e.key.toLowerCase();

        if (key === "enter") {
            checkLetter();
        } else {
            markButton(e.key.toLowerCase());
        }
    }
}

function markButton(clickedKey) {
    const buttons = document.querySelectorAll("[data-key]");
    const clickedButton = document.querySelector(`[data-key="${clickedKey}"]`);

    buttons.forEach((button) => (button.style.borderColor = "transparent"));

    clickedButton.style.borderColor = "gray";
    markedLetter = clickedKey;
}

function checkLetter() {
    const letter = document.querySelector(`[data-key="${markedLetter}"]`);
    const checkLetter = new RegExp(`[${markedLetter}]`);
    if (word.toLowerCase().includes(markedLetter)) {
        let indexes = [];

        for (let i = 0; i < word.length; i++) {
            if (word[i].toLowerCase() === markedLetter) {
                indexes.push(i);
            }
        }

        indexes.forEach((index) => {
            const field = document.querySelector(`[data-id="${index}"]`);
            field.innerText = markedLetter;
        });

        letter.classList.add("correct");
    } else {
        letter.classList.add("wrong");
    }
}
