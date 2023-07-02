document.addEventListener("DOMContentLoaded", function() {
    setInterval(function() {
        const now = new Date();
        const minutesPassed = now.getHours() * 60 + now.getMinutes();
        const minutesLeft = 1440 - minutesPassed;
        document.getElementById('minutes-passed').innerHTML = `${minutesLeft} / 1440`;
    }, 1000);
});
