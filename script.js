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
        const minutesPassed = now.getHours() * 60 + now.getMinutes();
        const minutesLeft = 1440 - minutesPassed;
        document.getElementById('minutes-passed').innerHTML = `${minutesLeft} / 1440`;
    }, 1000);
});
