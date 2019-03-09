config = {
  key: 'INSERTPROVIDEDKEYHERE',
  playback: {
    autoplay: false,
    muted: false
  },
  style: {
    width: '90%',
    aspectratio: '16/9',
  },
  events: {
    [PlayerEvent.SourceLoaded]: myFunc,
    [PlayerEvent.Play]: () => {
      // do some awesome stuff
    },
    [PlayerEvent.Error]: myErrorHandlingFunc
  },
  tweaks: {
    startup_threshold?: 5;
  },
  advertising: {
    adBreaks: [{
      tag: {
        url: 'http://your.ad.provider/manifest.xml',
        type: 'vast',
      },
    }],
  }
}