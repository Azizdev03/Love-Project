const scene = document.querySelector('.scene');
const loveText = document.getElementById('loveText');
const secret = document.getElementById('secret');
const sound = document.getElementById('loveSound');

function createHeart(startX, startY, moveX, moveY) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '❤️';

  heart.style.left = startX + 'px';
  heart.style.bottom = startY + 'px';
  heart.style.setProperty('--x', moveX + 'px');
  heart.style.setProperty('--y', moveY + 'px');

  scene.appendChild(heart);

  setTimeout(() => heart.remove(), 2000);
}

// pluie de coeurs
setInterval(() => {
  createHeart(80, 80, 300, 260);
  createHeart(window.innerWidth - 80, 80, -300, 260);
}, 280);

// message secret + son
loveText.addEventListener('click', () => {
  secret.classList.toggle('show');
  sound.currentTime = 0;
  sound.play();
});
