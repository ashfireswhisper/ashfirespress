document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.mobile-menu');
  toggle.addEventListener('click', () => {
    links.classList.toggle('active');
  });

  const syncBookOverviewCovers = () => {
    const isMobile = window.matchMedia('(max-width: 820px)').matches;

    document.querySelectorAll('.book-overview').forEach((overview) => {
      const copy = overview.querySelector('.book-overview-copy');
      const cover = overview.querySelector('.book-overview-cover .book-cover');
      if (!copy || !cover) {
        return;
      }

      if (isMobile) {
        cover.style.maxHeight = '';
        return;
      }

      const targetHeight = Math.min(Math.round(copy.getBoundingClientRect().height), 250);
      cover.style.maxHeight = `${targetHeight}px`;
    });
  };

  const scheduleBookOverviewSync = () => {
    window.requestAnimationFrame(syncBookOverviewCovers);
  };

  scheduleBookOverviewSync();
  window.addEventListener('resize', scheduleBookOverviewSync);

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(scheduleBookOverviewSync);
  }


});
