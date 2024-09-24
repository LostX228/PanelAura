// Get the current date and time
const currentDate = new Date();
const datetimeElement = document.getElementById('datetime');
datetimeElement.textContent = currentDate.toLocaleString();

// Set the countdown timer
let countdown = 10;
const expiresElement = document.getElementById('expires');
expiresElement.textContent = `Expires in ${countdown} seconds`;

setInterval(() => {
    countdown--;
    expiresElement.textContent = `Expires in ${countdown} seconds`;
    if (countdown <= 0) {
        // Disable the HTML element when the timer reaches 0
        document.getElementById('html-element-id').disabled = true;
    }
}, 1000); // Update every 1 second
