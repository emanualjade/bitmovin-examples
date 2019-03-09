import './scss/main.scss';

import {
  Player,
  PlayerEvent
} from 'bitmovin-player/modules/bitmovinplayer-core';
import EngineBitmovinModule from 'bitmovin-player/modules/bitmovinplayer-engine-bitmovin';
import MseRendererModule from 'bitmovin-player/modules/bitmovinplayer-mserenderer';
import HlsModule from 'bitmovin-player/modules/bitmovinplayer-hls';
import AbrModule from 'bitmovin-player/modules/bitmovinplayer-abr';
import ContainerTSModule from 'bitmovin-player/modules/bitmovinplayer-container-ts';
import SubtitlesModule from 'bitmovin-player/modules/bitmovinplayer-subtitles';
import PolyfillModule from 'bitmovin-player/modules/bitmovinplayer-polyfill';
import StyleModule from 'bitmovin-player/modules/bitmovinplayer-style';
import DashModule from 'bitmovin-player/modules/bitmovinplayer-dash';
import XmlModule from 'bitmovin-player/modules/bitmovinplayer-xml';
import AdvertisingCore from 'bitmovin-player/modules/bitmovinplayer-advertising-core';
import AdvertisingBitmovin from 'bitmovin-player/modules/bitmovinplayer-advertising-bitmovin';
import UI from 'bitmovin-player/modules/bitmovinplayer-ui';

Player.addModule(EngineBitmovinModule);
Player.addModule(MseRendererModule);
Player.addModule(HlsModule);
Player.addModule(AbrModule);
Player.addModule(ContainerTSModule);
Player.addModule(SubtitlesModule);
Player.addModule(PolyfillModule);
Player.addModule(StyleModule);
Player.addModule(DashModule);
Player.addModule(XmlModule);
Player.addModule(AdvertisingCore);
Player.addModule(AdvertisingBitmovin);
Player.addModule(UI);

const config = {
  key: 'd89ecd42-0d79-4197-8869-1633b54c120a',
  location: {
    ui: '//cdn.bitmovin.com/player/web/8/bitmovinplayer-ui.js',
    ui_css: '//cdn.bitmovin.com/player/web/8/bitmovinplayer-ui.css',
  },
};

const container = document.getElementById('my-player');
const player = new Player(container, config);

player.on(PlayerEvent.Playing, () => console.log('player is playing'));
player.on(PlayerEvent.Paused, () => console.log('player is paused'));

const source = {
  title: 'Art of Motion',
  description: 'What is this event... Parcour?',
  hls:
    '//bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
  progressive:
    '//bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4'
};

player.load(source).then(
  () => {
    player.play();
    console.log('Successfully created Bitmovin Player instance');
  },
  reason => console.log('Error while creating Bitmovin Player instance')
);
