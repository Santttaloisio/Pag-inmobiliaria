document.addEventListener('DOMContentLoaded', () => {
  const fixedHeader = document.getElementById('fixed-header');
  const toggle = document.getElementById('menu-toggle');
  const backdrop = document.getElementById('backdrop');
  const closeBtn = document.getElementById('close-menu');
  const scrollThreshold = 50;

  if (fixedHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > scrollThreshold) {
        fixedHeader.classList.add('visible');
      } else {
        fixedHeader.classList.remove('visible');
      }
    });
  }

  toggle?.addEventListener('click', () => {
    if (menu?.classList.contains('open')) closeMenu();
    else openMenu();
  });
  closeBtn?.addEventListener('click', closeMenu);
  backdrop?.addEventListener('click', closeMenu);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu?.classList.contains('open')) closeMenu();
  });
});
