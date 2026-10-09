(() => {
  const video = document.querySelector('#gameplay-video');
  const toggle = document.querySelector('#gameplay-toggle');
  if (!video || !toggle) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const update = () => {
    toggle.textContent = video.paused ? 'Play preview' : 'Pause preview';
  };

  video.controls = false;
  toggle.hidden = false;
  video.addEventListener('play', update);
  video.addEventListener('pause', update);
  video.addEventListener('error', () => {
    video.controls = true;
    toggle.hidden = true;
  });
  toggle.addEventListener('click', () => {
    if (video.paused) video.play().catch(update);
    else video.pause();
  });
  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) {
      video.autoplay = false;
      video.pause();
    }
  });

  // Automatic motion is optional; the play button is always available.
  if (!reducedMotion.matches && !navigator.connection?.saveData) {
    video.autoplay = true;
    video.play().catch(update);
  }
  update();
})();

(() => {
  const dialog = document.querySelector('#screenshot-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  const image = document.querySelector('#dialog-image');
  const title = document.querySelector('#dialog-title');
  const caption = document.querySelector('#dialog-caption');
  const original = document.querySelector('#dialog-original');
  let opener;

  document.querySelectorAll('[data-lightbox]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      image.src = link.href;
      image.alt = link.closest('figure').querySelector('img').alt;
      title.textContent = link.dataset.title;
      caption.textContent = link.dataset.caption;
      original.href = link.href;
      dialog.showModal();
    });
  });

  document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    opener?.focus({ preventScroll: true });
  });
})();