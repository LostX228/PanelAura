
    // Get the current date and time
    function getCurrentDateTime() {
        var now = new Date();
        var day = now.getDate();
        var month = now.getMonth() + 1; // Months are 0-based
        var year = now.getFullYear();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        // Format the date and time
        var formattedDateTime = day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;

        return formattedDateTime;
    }

    // Update the datetime span with the current date and time
    function updateDateTime() {
        document.getElementById("datetime").innerHTML = getCurrentDateTime();
    }

    // Update the datetime every second
    setInterval(updateDateTime, 1000);

    // Call the updateDateTime function once to initialize the datetime
    updateDateTime();
