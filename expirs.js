const datetimeElement = document.getElementById("datetime");
const now = new Date();
const datetimeStr = now.toLocaleDateString();
datetimeElement.innerText = datetimeStr;

// Set the expiration date and time (e.g., 10 seconds from now)
const expirationDate = new Date(now.getTime() + 10 * 1000); // 10 seconds from now

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const now = new Date();
  const diffMs = (expirationDate - now); // difference in milliseconds
  const diffSecs = Math.round(diffMs / 1000); // difference in seconds

  // Format the countdown string
  const countdownStr = `${diffSecs.toString().padStart(2, '0')}`;

  // Update the HTML with the countdown
  document.getElementById("expires").innerText = countdownStr;

  // If the countdown is over, clear the interval and stop the HTML element
  if (diffMs <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("expires").innerText = "Expired";
    // Add code to stop the HTML element
    const htmlElement = document.getElementById("html-element-id"); // Replace with the ID of the HTML element you want to stop
    htmlElement.style.display = "none"; // Hide the HTML element
    htmlElement.disabled = true; // Disable the HTML element
    htmlElement.innerHTML = ""; // Clear the HTML element's content
  }
}, 1000);
