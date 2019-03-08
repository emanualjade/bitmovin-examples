var config = {
  "key": "d89ecd42-0d79-4197-8869-1633b54c120a",
  // Does not auto-play in chrome
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
  function() {
    console.log('Successfully created Bitmovin Player instance');
  },
  function(reason) {
    console.log('Error while creating Bitmovin Player instance');
  }
);
