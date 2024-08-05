const $ = (selector) => document.querySelector(selector);

const button = $('#btn');
const video = $('#video');
const audio = $('#audio');

button.addEventListener('click', () => {
  video.classList.remove('d-none');
  audio.currentTime = 3.8;
  audio.play();
});
