const textareaInput = document.querySelector("#input-content");
const textareaOutput = document.querySelector("#output-content");
const outputEmpty = document.querySelector(".output-empty");
const outputFound = document.querySelector(".output-found");
const btnEncrypt = document.querySelector(".btn-encrypt");
const btnDecrypt = document.querySelector(".btn-decrypt");
const btnCopy = document.querySelector(".btn-copy");

btnEncrypt.addEventListener("click", () => {
    let value = textareaInput.value;
    let isEncrypted = value.search(/ai|enter|imes|ober|ufat/i) < 0 ? false : true;

    if (value !== "" && !isEncrypted) {
        outputEmpty.style.display = "none";
        outputFound.style.display = "flex";
        textareaOutput.value = encrypt(value);
    } else {
        outputEmpty.style.display = "flex";
        outputFound.style.display = "none";
        alert("É necessário informar um texto plano para realizar a encriptação do conteúdo!");
    }

    textareaInput.focus();
});

btnDecrypt.addEventListener("click", () => {
    let value = textareaInput.value;
    let isEncrypted = value.search(/ai|enter|imes|ober|ufat/i) < 0 ? false : true;

    if (value !== "" && isEncrypted) {
        outputEmpty.style.display = "none";
        outputFound.style.display = "flex";
        textareaOutput.value = decrypt(value);
    } else {
        outputEmpty.style.display = "flex";
        outputFound.style.display = "none";
        alert("É necessário informar um texto encriptado para realizar a desencriptação do conteúdo!");
    }

    textareaInput.focus();
});

btnCopy.addEventListener("click", clipboardCopy);

async function clipboardCopy(){
    let content = textareaOutput.value;
    await navigator.clipboard.writeText(content);
}

function encrypt(value) {
    return value.replace(/[aeiou]/gi, (expr) => {

        let isUpper = /[A-Z]/.test(expr);

        switch (expr.toLowerCase()) {
            case "a":
                return isUpper ? "AI" : "ai";
            case "e":
                return isUpper ? "ENTER" : "enter";
            case "i":
                return isUpper ? "IMES" : "imes";
            case "o":
                return isUpper ? "OBER" : "ober";
            case "u":
                return isUpper ? "UFAT" : "ufat";
        }
    });
}

function decrypt(value) {
    return value.replace(/ai|enter|imes|ober|ufat/gi, (expr) => {

        let isUpper = /[A-Z]/.test(expr);

        switch (expr.toLowerCase()) {
            case "ai":
                return isUpper ? "A" : "a";
            case "enter":
                return isUpper ? "E" : "e";
            case "imes":
                return isUpper ? "I" : "i";
            case "ober":
                return isUpper ? "O" : "o";
            case "ufat":
                return isUpper ? "U" : "u";
        }
    });
}
