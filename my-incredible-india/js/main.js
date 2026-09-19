/**
 * main.js — small screen-only conveniences. Never used for layout;
 * every visual decision lives in CSS. Skipped entirely when printing.
 */
(function () {
  var toolbar = document.querySelector('.screen-toolbar');
  if (toolbar) {
    var printBtn = toolbar.querySelector('[data-action="print"]');
    if (printBtn) printBtn.addEventListener('click', function () { window.print(); });
  }

  // Scale pages down to fit narrow viewports without changing page proportions.
  function fitPages() {
    var pages = document.querySelectorAll('.page');
    var viewportWidth = window.innerWidth;
    var pagePixelWidth = pages.length ? pages[0].getBoundingClientRect().width : 0;
    if (!pagePixelWidth) return;
    var scale = viewportWidth < 900 ? Math.min(1, (viewportWidth - 24) / pagePixelWidth) : 1;
    document.documentElement.style.setProperty('--fit-scale', scale.toFixed(3));
    if (scale < 1) {
      pages.forEach(function (page) {
        page.style.marginBottom = (page.getBoundingClientRect().height * (scale - 1)) + 'px';
      });
    }
  }

  window.addEventListener('resize', fitPages);
  window.addEventListener('load', fitPages);
})();
