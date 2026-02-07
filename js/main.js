(function () {
  'use strict';

  var nav = document.querySelector('.nav');
  var navToggle = document.querySelector('.nav-toggle');
  if (nav && navToggle) {
    navToggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      navToggle.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', nav.classList.contains('is-open'));
    });
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
        nav.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var regTabs = document.querySelectorAll('.reg-tab');
  var toolsPanel = document.getElementById('tools-panel');
  var skillsPanel = document.getElementById('skills-panel');
  if (regTabs.length && toolsPanel && skillsPanel) {
    regTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var target = tab.getAttribute('data-tab');
        regTabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        toolsPanel.classList.toggle('active', target === 'tools');
        skillsPanel.classList.toggle('active', target === 'skills');
      });
    });
  }

  function reveal() {
    var els = document.querySelectorAll('.point-card, .doc-block, .demo-code');
    els.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      var inView = rect.top < window.innerHeight - 80;
      if (inView) el.classList.add('visible');
    });
  }

  var revealEls = document.querySelectorAll('.point-card, .doc-block, .demo-code');
  revealEls.forEach(function (el) { el.classList.add('reveal'); });

  window.addEventListener('scroll', reveal);
  window.addEventListener('resize', reveal);
  reveal();
})();
