let signUp = document.querySelector(".submit");
let agree = document.forms.form.agree;
let container = document.querySelector(".container");
let container2 = document.querySelector(".container2");
agree.addEventListener("change", () => {
    if (agree.checked) {
        signUp.removeAttribute("disabled");
    } else {
        signUp.setAttribute("disabled", true);
    }
});
let readyEmail = document.getElementById("email");
let fullName = document.querySelector(".fullName");

let fName = document.forms.form.firstName;
let lName = document.forms.form.lastName;
let eMail = document.forms.form.email;

signUp.addEventListener("click", () => {
    fullName.textContent = `${fName.value}` + ` ` + `${lName.value}`;
    readyEmail.textContent = eMail.value;
    container.style.display = "none";
    container2.style.display = "block";
});

// ----------------------------------------------------------
let allInputs = document.forms.form;
console.log(allInputs);
console.log(allInputs.length);
let avatar = document.querySelector(".avatar");

for (let i = 0; i < allInputs.length; i++) {
    if (allInputs[i].type === "radio") {
        allInputs[i].addEventListener("change", () => {
            if (allInputs[i].checked) {
                if (allInputs[i].value === "woman") {
                    avatar.style.backgroundPositionX = "-103px";
                }
            }
        });
    }
}

// -------------------------------------------------------
let select = document.forms.form.position;
let positionRes = document.querySelector(".positionRes");
select.addEventListener("change", () => {
    console.log(select.options[select.selectedIndex].value);
    positionRes.textContent = select.options[select.selectedIndex].value;
});

// --------------------------------------------------
let signOut = document.getElementById("sign-out");
signOut.addEventListener("click", () => {
    container.style.display = "block";
    container2.style.display = "none";
    allInputs.reset();
});
