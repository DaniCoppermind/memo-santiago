const $ = (selector) => document.querySelector(selector);

const button = $('#btn');
const video = $('#video');
const audio = $('#audio');

button.addEventListener('click', () => {
  video.style.display = 'block'
  audio.currentTime = 3.8;
  audio.play();
});
