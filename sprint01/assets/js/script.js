// var word = "GATO gato gatinho Gato Avião";

// console.log(word);
// console.log(encrypt(word));
// console.log(decrypt(encrypt(word)));

const textarea = document.querySelector("textarea");

textarea.addEventListener("keyup", e => {
    textarea.style.height = "auto";

    let scHeight = e.target.scrollHeight / 16;
    console.log(scHeight);
    textarea.style.height = `${scHeight}rem`;
});

function encrypt(value) {
    return value.replace(/[aeiou]/gi, expr => {

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
    return value.replace(/ai|enter|imes|ober|ufat/gi, expr => {

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
