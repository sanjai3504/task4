document.addEventListener("DOMContentLoaded", function () {
    let display = document.querySelector(".dis"); 
    let buttons = document.querySelectorAll(".disnum"); 

    let currentInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let value = this.innerText;

            if (value === "=") {
                try {
                    currentInput = eval(currentInput.replace("X", "*"));
                } catch {
                    currentInput = "Error";
                }
            } else if (value === "C") {
                currentInput = "";
            } else if (value === "⌫") {
                currentInput = currentInput.slice(0, -1);
            } else if (value === "CE") {
                currentInput = "";
            } else if (value === "+/-") {
                if (currentInput) {
                    currentInput = currentInput.startsWith("-") ? currentInput.slice(1) : "-" + currentInput;
                }
            } else {
                currentInput += value;
            }

            display.innerText = currentInput;
        });
    });
});