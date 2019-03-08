var config = {
  "key": "d89ecd42-0d79-4197-8869-1633b54c120a",
  playback : {
    autoplay: true
  }
}

var container = document.getElementById('my-player');
var player = new bitmovin.player.Player(container, config);

var container = document.getElementById('my-player');
var player = new bitmovin.player.Player(container, config);

var source = {
  "title": "Art of Motion",
  "description": "What is this event... Parcour?",
  "hls": "//bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
  "progressive": "//bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4"
}

player.load(source).then(
  function(player) {
    console.log('Successfully created Bitmovin Player instance');
  },
  function(reason) {
    console.log('Error while creating Bitmovin Player instance');
  }
);


// const source = {
//   title: "Getting Started with the Bitmovin Player",
//   description:
//     "Now you are ready to embed the Bitmovin Player into your own website :)",
//   dash:
//     "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd",
//   hls:
//     "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
//   progressive:
//     "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4",
//   poster: "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/poster.jpg"
// }
// const player = new bitmovin.player.Player(container, playerConfig)

// player.load(source).then(
//   player => {
//     console.log("Successfully created Bitmovin Player instance")
//   },
//   reason => {
//     console.log("Error while creating Bitmovin Player instance")
//   }
// )


// player.on(bitmovin.player.PlayerEvent.Playing, () =>
//   console.log("player is playing")
// )
// player.on(bitmovin.player.PlayerEvent.Paused, () =>
//   console.log("player is paused")
// )
// player.on(bitmovin.player.PlayerEvent.AudioChanged, () =>
//   console.log("AudioChanged is changed")
// )
// player.on(bitmovin.player.PlayerEvent.ModuleReady, () =>
//   console.log("ModuleReady has fired")
// )
