import izitoast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const delay = document.querySelector("[name='delay']");
const button = document.querySelector(".form button")
form.addEventListener("submit", handleClick)

function handleClick(event) {
    event.preventDefault()

    const delayValue = +delay.value;
    const stateValue = document.querySelector("[name='state']:checked").value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            stateValue === "fulfilled" ? resolve(delayValue) : reject(delayValue);
        }, delayValue);
    });

    button.disabled = true;

    promise
        .then((delayValue) => {
            izitoast.success({
                title: 'Success',
                message: `✅ Fulfilled promise in ${delayValue}ms`,
                position: 'topCenter'
            })
        })
        .catch((delayValue) => {
            izitoast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${delayValue}ms`,
                position: 'topCenter'
            })
        })
        .finally(() => {
            button.disabled = false;
        });
}


