// עיצוב 3 — פרלקסה עדינה על קשת ההירו בגלילה
(function () {
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var arch = document.querySelector(".hero-arch-parallax");
  if (prefersReduced || !arch) return;

  var ticking = false;

  function update() {
    var y = window.scrollY || 0;
    arch.style.transform = "translateY(" + Math.min(y * 0.12, 60) + "px)";
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );
})();
