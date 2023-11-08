document.addEventListener("DOMContentLoaded", function() {
    // const video = document.getElementById('background-video');
    // const videoSources = [
    //     'friends-kayaking.mp4'
    // ];
    // let currentSource = 0;

    // video.src = videoSources[currentSource];

    // video.addEventListener('ended', function() {
    //     currentSource++;
    //     if (currentSource >= videoSources.length) {
    //         currentSource = 0;
    //     }
    //     video.src = videoSources[currentSource];
    //     video.load();
    //     video.play();
    // });
    
    setInterval(function() {
        const now = new Date();
        const totalSecondsToday = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        const totalSecondsInDay = 86400; // 24 hours * 60 minutes * 60 seconds
        const secondsLeft = totalSecondsInDay - totalSecondsToday;

        const minutesLeft = Math.floor(secondsLeft / 60);
        const secondsLeftInLastMinute = (secondsLeft % 60).toString().padStart(2, '0');


        document.getElementById('minutes-passed').innerHTML = `${minutesLeft}<span class="small-font">. ${secondsLeftInLastMinute}</span> / 1440`;
    }, 1000);
});
