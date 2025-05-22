// We are importing, mathematical functions and render function
import { add, divide, multiply, subtract } from "./mathFunctions.js";
import render from "./render.js";

// We are selecting 2 element form and p
const form = document.querySelector("form");
const p = document.querySelector("p");

// We are listening submit event on form
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const operation = e.submitter.textContent;

    const num1 = parseInt(form.num1.value);
    const num2 = parseInt(form.num2.value);

    switch (operation) {
        case "+":
            render(p, add(num1, num2));
            break;
        case "-":
            render(p, subtract(num1, num2));
            break;
        case "*":
            render(p, multiply(num1, num2));
            break;
        case "/":
            render(p, divide(num1, num2));
            break;
        default:
            render(p, "Operation is invalid");
            break;
    }
})