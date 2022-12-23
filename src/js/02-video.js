import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iFrame = document.querySelector("iframe");

const player = new Player(iFrame);
const LOCALSTORAGE_KEY = "videoplayer-current-time";
player.on('timeupdate', throttle(function (currentTime) {
   localStorage.setItem(LOCALSTORAGE_KEY, currentTime.seconds);   
}, 1000));

let seconds = Number(localStorage.getItem(LOCALSTORAGE_KEY));


player.setCurrentTime(seconds).then(function (seconds) {
      // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

