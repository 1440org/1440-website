document.addEventListener("DOMContentLoaded", function() {
    setInterval(function() {
        const now = new Date();
        const minutesPassed = now.getHours() * 60 + now.getMinutes();
        document.getElementById('minutes-passed').innerHTML = `${minutesPassed} / 1440`;
    }, 1000);
});
