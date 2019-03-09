const source = {
  dash: 'http://path/to/mpd/file.mpd',
  hls: 'http://path/to/hls/playlist/file.m3u8',
  progressive: [{
    url: 'http://path/to/mp4',
    type: 'video/mp4',
    bitrate: 500000,
    label: 'Low'
  }, {
    url: 'http://path/to/another-mp4',
    type: 'video/mp4',
    bitrate: 1000000,
    label: 'Mid',
    preferred: true
  }, {
    url: 'http://path/to/another-mp4',
    type: 'video/mp4',
    bitrate: 2500000,
    label: 'High'
  }],
  poster: 'images/poster.jpg',
  subtitleTracks: [{
    url: 'http://path/to/subtitles/vtt/file.vtt',
  }],
  thumbnailTrack: {
    url: 'http://path/to/thumbnail/vtt/file.vtt',
  },
  drm: {
    widevine: {
      LA_URL: 'https://mywidevine.licenseserver.com/'
    },
    playready: {
      LA_URL: 'https://myplayready.licenseserver.com/'
    }
  },
  labeling: {
    hls: {
      qualities: (quality) => {
        return quality.height + 'p';
      }
    },
    dash: {
      qualities: (quality) => {
        return quality.height + 'p';
      }
    }
  }
}