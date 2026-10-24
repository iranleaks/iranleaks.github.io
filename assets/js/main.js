/* ============================================
   ایران لیکس — اسکریپت اصلی
   ============================================ */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initBackToTop();
    initSmoothScroll();
    initLazyIframes();
  });

  /* دکمه بازگشت به بالا */
  function initBackToTop() {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* اسکرول نرم برای لینک‌های هش‌دار */
  function initSmoothScroll() {
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (href === '#' || href === '#main-content') return;

        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      });
    });
  }

  /* بارگذاری تنبل iframeها */
  function initLazyIframes() {
    var iframes = document.querySelectorAll('iframe[data-src]');
    if (!iframes.length || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var iframe = entry.target;
          iframe.src = iframe.dataset.src;
          observer.unobserve(iframe);
        }
      });
    }, { rootMargin: '200px' });

    iframes.forEach(function (iframe) { observer.observe(iframe); });
  }
})();
