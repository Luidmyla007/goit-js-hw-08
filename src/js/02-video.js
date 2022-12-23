import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iFrame = document.querySelector("iframe");

const player = new Player(iFrame);

player.on('play', function() {
    console.log('played the video!');
});

