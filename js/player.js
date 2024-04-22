const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');
const seekSlider = document.getElementById('seekSlider');
const volumeSlider = document.getElementById('volumeSlider');
const currentTime = document.getElementById('currentTime');
const duration = document.getElementById('duration');

playPauseBtn.addEventListener('click', togglePlayPause);
muteBtn.addEventListener('click', toggleMute);
seekSlider.addEventListener('input', updateSeek);
volumeSlider.addEventListener('input', updateVolume);
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('loadedmetadata', () => {
  duration.textContent = formatPlayerTime(audio.duration);
  seekSlider.max = Math.floor(audio.duration);
});

function togglePlayPause() {
  if (audio.paused || audio.ended) {
    audio.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audio.pause();
    playPauseBtn.textContent = 'Play';
  }
}

function toggleMute() {
  if (audio.muted) {
    audio.muted = false;
    muteBtn.textContent = 'Mute';
  } else {
    audio.muted = true;
    muteBtn.textContent = 'Unmute';
  }
}

function updateSeek() {
  audio.currentTime = seekSlider.value;
}

function updateVolume() {
  audio.volume = volumeSlider.value / 100;
}

function updateProgress() {
  seekSlider.value = audio.currentTime;
  currentTime.textContent = formatPlayerTime(audio.currentTime);
}

function formatPlayerTime(time) {
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60);
  return `${min}:${sec.toString().padStart(2, '0')}`;
}
