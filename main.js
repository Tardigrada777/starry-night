function stars() {
  const count = 500;
  const world = document.querySelector('.world');
  let i = 0;
  while (i < count) {
    const star = document.createElement('i');
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    const duration = Math.random() * 10;
    const size = Math.random() * 2;

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.width = `${1 + size}px`;
    star.style.height = `${1 + size}px`;
    star.style.animationDuration = `${5 + duration}s`;
    star.style.animationDelay = `${duration}s`;

    world.appendChild(star);
    i++;
  }
}

stars();