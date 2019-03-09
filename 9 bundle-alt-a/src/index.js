import { Player, PlayerEvent } from 'bitmovin-player';
import { UIFactory } from 'bitmovin-player/bitmovinplayer-ui';
import 'bitmovin-player/bitmovinplayer-ui.css';

const config = {
  key: 'YOUR-PLAYER-KEY',
  ui: false,
  playback : {
    autoplay: false,
    muted: true,
  }
};

const source = {
  hls: '//bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
};

const player = new Player(document.getElementById('my-player'), config);

UIFactory.buildDefaultUI(player);

player.on(PlayerEvent.Playing, () => console.log('player is playing'));

player.load(source).then(() => {
  player.play();
}).catch((reason) => {
  console.error('player load failed', reason);
});
