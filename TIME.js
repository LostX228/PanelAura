/// Get the current date and time
    let currentDate = new Date();
    
    // Format the date and time as desired
    let formattedDate = currentDate.toLocaleDateString() + " " + currentDate.toLocaleTimeString();
    
    // Get the span element
    let datetimeElement = document.getElementById("datetime");
    
    // Add the formatted date and time to the span element
    datetimeElement.textContent = formattedDate;
