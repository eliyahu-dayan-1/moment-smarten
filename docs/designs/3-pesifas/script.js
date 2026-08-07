// עיצוב 3: אור בהיר — פרלקסה עדינה של תצלום עטרה בגלילה
(function () {
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var el = document.querySelector(".hero-arch-parallax");
  if (!el || prefersReduced) return;

  var ticking = false;

  function update() {
    var y = window.scrollY || 0;
    var offset = Math.min(y * 0.18, 70);
    var scale = 1 + Math.min(y * 0.00015, 0.05);
    el.style.transform = "translateY(" + offset + "px) scale(" + scale + ")";
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );

  update();
})();
