
function T1() {
    location.href = "https://t.me/wmhcApI0gbc4MGI0";
    vant.showNotify({
        type: 'success',
        message: 'Telegram'
    });
}
function T2() {
  location.href = "https://www.instagram.com/lostx_off?igsh=bXY1NmZ5dTJpYW16";
  vant.showNotify({
        type: 'success',
        message: 'instgram'
    });
}
function T3() {
    location.href = "https://discord.gg/czGRV5YG";
    vant.showNotify({
        type: 'success',
        message: 'Discord'
    });
}
function T4() {
  location.href = "https://t.me/+nrMeH94pkItmMGJk";
  vant.showNotify({
        type: 'success',
        message: 'Whatsapp'
    });
}
function T5() {
    location.href = "https://fr.redtube.com/?search=cowgirl";
    vant.showNotify({
        type: 'success',
        message: 'PORN HOP'
    });
}
function T5() {
    location.href = "https://fr.redtube.com/?search=cowgirl";
    vant.showNotify({
        type: 'success',
        message: 'xnxx'
    });
}
  // Update the HTML with the current date
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






