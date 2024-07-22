const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const regexOne = /^1\s\d{3}-\d{3}-\d{4}$/;
const regexTwo = /^1\s\(\d{3}\)\s\d{3}-\d{4}$/;
const regexThree = /^1\(\d{3}\)\d{3}-\d{4}$/;
const regexFour = /^1\s\d{3}\s\d{3}\s\d{4}$/;
const regexFive = /^\d{10}$/;
const regexSix = /^\d{3}-\d{3}-\d{4}$/;
const regexSeven = /^\(\d{3}\)\d{3}-\d{4}$/;

const validList = [regexOne, regexTwo, regexThree, regexFour, regexFive, regexSix, regexSeven];

const isValid = (num) => validList.some((regex) => regex.test(num));

const checkbtn = () => {
    const strInput = input.value;
    if (!strInput) {
        alert("Please provide a phone number");
        return;
    }

    result.textContent = isValid(strInput)
        ? `Valid US number: ${strInput}`
        : `Invalid US number: ${strInput}`;
    input.value = "";
}

check.addEventListener("click", checkbtn);

const clearbtn = () => {
    result.textContent = "";
    input.value = "";
}

clear.addEventListener("click", clearbtn);
