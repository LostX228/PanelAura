  const datetimeElement = document.getElementById("datetime");
    const now = new Date();
    const datetimeStr = now.toLocaleDateString();
    datetimeElement.innerText = datetimeStr;

    // Set the expiration date and time (e.g., tomorrow at 12:00 PM)
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1); // tomorrow
    expirationDate.setHours(12); // 12:00 PM
    expirationDate.setMinutes(0);
    expirationDate.setSeconds(0);

    // Update the countdown every second
    const countdownInterval = setInterval(() => {
      const now = new Date();
      const diffMs = (expirationDate - now); // difference in milliseconds
      const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // difference in hours
      const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // difference in minutes
      const diffSecs = Math.round((((diffMs % 86400000) % 3600000) % 60000) / 1000); // difference in seconds

      // Format the countdown string
      const countdownStr = `${diffHrs.toString().padStart(2, '0')}:${diffMins.toString().padStart(2, '0')}:${diffSecs.toString().padStart(2, '0')}`;

      // Update the HTML with the countdown
      document.getElementById("expires").innerText = countdownStr;

      // If the countdown is over, clear the interval
      if (diffMs <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("expires").innerText = "Expired";
      }
    }, 1000);
