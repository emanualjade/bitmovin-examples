bitmovin.player.core.Player.addModule(window.bitmovin.player['engine-bitmovin'].default);
bitmovin.player.core.Player.addModule(window.bitmovin.player['mserenderer'].default);
bitmovin.player.core.Player.addModule(window.bitmovin.player['hls'].default);
bitmovin.player.core.Player.addModule(window.bitmovin.player['abr'].default);
bitmovin.player.core.Player.addModule(window.bitmovin.player['container-ts'].default);
bitmovin.player.core.Player.addModule(window.bitmovin.player['polyfill'].default);
bitmovin.player.core.Player.addModule(window.bitmovin.player['style'].default);
bitmovin.player.core.Player.addModule(window.bitmovin.player['ui'].default);
bitmovin.player.core.Player.addModule(window.bitmovin.player['dash'].default);
bitmovin.player.core.Player.addModule(window.bitmovin.player['xml'].default);

console.log(bitmovin)

var config = {
  "key": "d89ecd42-0d79-4197-8869-1633b54c120a",
  playback : {
    autoplay: false,
    muted:true
  }
}

var container = document.getElementById('my-player');
var player = new bitmovin.player.core.Player(container, config);

player.on(bitmovin.player.core.PlayerEvent.Playing, () => console.log('player is playing'));
player.on(bitmovin.player.core.PlayerEvent.Paused, () => console.log('player is paused'));

var source = {
  "title": "Art of Motion",
  "description": "What is this event... Parcour?",
  "hls": "//bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
  "progressive": "//bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4"
}

player.load(source).then(
  function() {
    player.play()
    bitmovin.playerui.UIFactory.buildModernSmallScreenUI(player)
    console.log('Successfully created Bitmovin Player instance');
  },
  function(reason) {
    console.log('Error while creating Bitmovin Player instance');
  }
);

document.getElementById("play-btn").addEventListener("click", function(){
  player.play()
});
document.getElementById("pause-btn").addEventListener("click", function(){
  player.pause()
});