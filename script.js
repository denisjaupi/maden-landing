document.getElementById('year').textContent = new Date().getFullYear();

const icons = {
  spotify: `
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <circle cx="12" cy="12" r="12" fill="black"/>
      <path d="M16.8 16.6c-.2.3-.6.4-.9.2-2.5-1.5-5.6-1.9-9.2-1-.3.1-.7-.1-.8-.4s.1-.7.4-.8c3.9-1 7.3-.6 10.2 1.1.3.2.4.6.3.9zM17.7 13.2c-.2.3-.6.4-1 .2-2.9-1.8-7.2-2.3-10.6-1.3-.4.1-.8-.1-.9-.5-.1-.4.1-.8.5-.9 3.9-1.1 8.7-.6 12 1.5.4.2.5.6.4 1zM17.9 9.7c-.2.4-.6.5-1 .3-3.3-2-8.3-2.2-11.5-1.2-.4.1-.9-.1-1-.5-.1-.4.1-.9.5-1C8.6 6.1 14.2 6.3 18 8.6c.4.3.5.7.3 1.1z" fill="white"/>
    </svg>
  `,
  applemusic: `
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <circle cx="12" cy="12" r="12" fill="black"/>
      <path d="M16.5 3.5l-7.5 1.5c-.6.1-1 .6-1 1.2v10.6c0 .8.8 1.4 1.5 1.1l1.2-.5c.5-.2.8-.7.8-1.2V9.3l5-1v7.9c0 .8.8 1.4 1.5 1.1l1.2-.5c.5-.2.8-.7.8-1.2V4.7c0-.8-.7-1.4-1.5-1.2z" fill="white"/>
    </svg>
  `,
  youtube: `
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.3.6 9.3.6s7.4 0 9.4-.6a3 3 0 0 0 2.1-2.1c.4-1.9.5-3.8.5-5.8s-.1-3.9-.5-5.8zM9.8 15.6V8.4L15.8 12 9.8 15.6z"/>
    </svg>
  `
};


document.querySelectorAll('[data-platform]').forEach(btn => {
  const platform = btn.getAttribute('data-platform');
  const icon = btn.querySelector('.btn-icon');
  if (icons[platform] && icon && icon.innerHTML.trim() === '') {
    icon.innerHTML = icons[platform];
  }
});



// Audio preview
const audio = document.getElementById('preview');
const toggle = document.getElementById('playToggle');
const MAX_SECONDS = 30;
let stopTimer = null;

function stopPreview() {
audio.pause();
audio.currentTime = 0;
toggle.textContent = '▶︎ Riproduci preview';
if (stopTimer) clearInterval(stopTimer);
}

toggle.addEventListener('click', () => {
if (audio.paused) {
audio.play();
toggle.textContent = '❚❚ Pausa';
stopTimer = setInterval(() => {
if (audio.currentTime >= MAX_SECONDS) stopPreview();
}, 250);
} else {
stopPreview();
}
});

audio.addEventListener('ended', stopPreview);
