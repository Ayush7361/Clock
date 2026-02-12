// Get reference to the label element in HTML
// This is where the time will be displayed
const mylabel = document.getElementById("mylabel");


// Call update once immediately
// (so user doesn't wait 1 second to see time)
update();


// Run update() every 1000ms (1 second)
setInterval(update, 1000);


// This function gets current time and displays it
function update() {

    // Create Date object with current time
    let date = new Date();

    // Convert time to formatted string
    // and put it inside the label
    mylabel.innerHTML = formatTime(date);
}


// Converts Date object into readable clock format
function formatTime(date) {

    // Extract hours, minutes, seconds
    let hours = date.getHours();     // 0–23
    let minutes = date.getMinutes(); // 0–59
    let seconds = date.getSeconds(); // 0–59

    // Determine AM or PM
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour → 12-hour format
    hours = hours % 12;

    // If result is 0 (midnight/noon), show 12
    hours = hours ? hours : 12;

    // Add leading zero if < 10
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Return formatted string
    return `${hours}:${minutes}:${seconds} ${ampm}`;
}