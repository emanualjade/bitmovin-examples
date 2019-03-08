const container = document.getElementById("player")

const playerConfig = {
  key: "d89ecd42-0d79-4197-8869-1633b54c120a",
  videoId: "my-video-id",
  playback: {
    autoplay: true
  }
}
const source = {
  title: "Getting Started with the Bitmovin Player",
  description:
    "Now you are ready to embed the Bitmovin Player into your own website :)",
  dash:
    "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd",
  hls:
    "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
  progressive:
    "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4",
  poster: "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/poster.jpg"
}
const player = new bitmovin.player.Player(container, playerConfig)


// player.x has 
  // player.ads
  // player.buffer
  // player.exports
  // player.subtitles
  // player.version
  // player.vr
  // player.prototype.x
    // player.getConfig
    // player.getContainer
    // player.getCurrentTime
    // player.getDuration
    // player.getManifest
    // player.getPlayerType
    // player.getSource
    // player.getThumbnail
    // player.getViewMode
    // player.hasEnded()
    // player.isLive()
    // player.isMuted()
    // player.isPaused()
    // player.isPlaying()
    // player.isStalled()
    // player.isViewModeAvailable()
    // player.load()
    // player.mute()
    // player.off()
    // player.on()
    // player.on()
    // player.pause()
    // player.play()
    // player.play()
    // player.seek()
    // player.setPosterImage()
    // player.setQueryParameters()
    // player.unmute()
    
player.load(source).then(
  player => {
    console.log("Successfully created Bitmovin Player instance")
  },
  reason => {
    console.log("Error while creating Bitmovin Player instance")
  }
)


player.on(bitmovin.player.PlayerEvent.Playing, () =>
  console.log("player is playing")
)
player.on(bitmovin.player.PlayerEvent.Paused, () =>
  console.log("player is paused")
)
player.on(bitmovin.player.PlayerEvent.AudioChanged, () =>
  console.log("AudioChanged is changed")
)
player.on(bitmovin.player.PlayerEvent.ModuleReady, () =>
  console.log("ModuleReady has fired")
)

// Detect and respond to events
  // AdBreakFinished: "adbreakfinished"
  // AdBreakStarted: "adbreakstarted"
  // AdClicked: "adclicked"
  // AdError: "aderror"
  // AdFinished: "adfinished"
  // AdLinearityChanged: "adlinearitychanged"
  // AdManifestLoaded: "admanifestloaded"
  // AdQuartile: "adquartile"
  // AdSkipped: "adskipped"
  // AdStarted: "adstarted"
  // AirplayAvailable: "airplayavailable"
  // AirplayChanged: "airplaychanged"
  // AudioAdaptation: "audioadaptation"
  // AudioAdded: "audioadded"
  // AudioChanged: "audiochanged"
  // AudioDownloadQualityChange: "audiodownloadqualitychange"
  // AudioDownloadQualityChanged: "audiodownloadqualitychanged"
  // AudioPlaybackQualityChanged: "audioplaybackqualitychanged"
  // AudioQualityChanged: "audioqualitychanged"
  // AudioRemoved: "audioremoved"
  // CastAvailable: "castavailable"
  // CastStart: "caststart"
  // CastStarted: "caststarted"
  // CastStopped: "caststopped"
  // CastWaitingForDevice: "castwaitingfordevice"
  // CueEnter: "cueenter"
  // CueExit: "cueexit"
  // CueParsed: "cueparsed"
  // CueUpdate: "cueupdate"
  // DVRWindowExceeded: "dvrwindowexceeded"
  // Destroy: "destroy"
  // DownloadFinished: "downloadfinished"
  // Error: "error"
  // Metadata: "metadata"
  // MetadataParsed: "metadataparsed"
  // ModuleReady: "moduleready"
  // Muted: "muted"
  // OverlayAdStarted: "overlayadstarted"
  // Paused: "paused"
  // PeriodSwitch: "periodswitch"
  // PeriodSwitched: "periodswitched"
  // Play: "play"
  // PlaybackFinished: "playbackfinished"
  // PlaybackSpeedChanged: "playbackspeedchanged"
  // PlayerResized: "playerresized"
  // Playing: "playing"
  // Ready: "ready"
  // Seek: "seek"
  // Seeked: "seeked"
  // SegmentPlayback: "segmentplayback"
  // SegmentRequestFinished: "segmentrequestfinished"
  // ShowAirplayTargetPicker: "showairplaytargetpicker"
  // SourceLoaded: "sourceloaded"
  // SourceUnloaded: "sourceunloaded"
  // StallEnded: "stallended"
  // StallStarted: "stallstarted"
  // SubtitleAdded: "subtitleadded"
  // SubtitleDisable: "subtitledisable"
  // SubtitleDisabled: "subtitledisabled"
  // SubtitleEnable: "subtitleenable"
  // SubtitleEnabled: "subtitleenabled"
  // SubtitleRemoved: "subtitleremoved"
  // TimeChanged: "timechanged"
  // TimeShift: "timeshift"
  // TimeShifted: "timeshifted"
  // Unmuted: "unmuted"
  // VRStereoChanged: "vrstereochanged"
  // VRViewingDirectionChange: "vrviewingdirectionchange"
  // VRViewingDirectionChanged: "vrviewingdirectionchanged"
  // VideoAdaptation: "videoadaptation"
  // VideoDownloadQualityChange: "videodownloadqualitychange"
  // VideoDownloadQualityChanged: "videodownloadqualitychanged"
  // VideoPlaybackQualityChanged: "videoplaybackqualitychanged"
  // VideoQualityChanged: "videoqualitychanged"
  // ViewModeChanged: "viewmodechanged"
  // VolumeChanged: "volumechanged"
  // Warning: "warning"


// bitmovin
  // analytics
  // player
    // PlayerEvent
  // playerui
