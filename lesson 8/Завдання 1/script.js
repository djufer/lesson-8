let enterText = document.forms[0].enterText;
let getText = document.forms[0].getText;
let but = document.querySelector(".button");
but.addEventListener("click", () => {
    enterText.value;
    if (enterText.value !== "") {
        getText.placeholder = enterText.value;
    }
});

let placeholder = document.forms[1].placeholder;
placeholder.addEventListener("blur", () => {
    placeholder.placeholder = placeholder.value;
    placeholder.value = "";
});
