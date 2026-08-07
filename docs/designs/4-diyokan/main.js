// עיצוב 4: תנועה — כותרת מתחלפת + פרלקסת עכבר על שכבות הקשתות
(function () {
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var phrases = [
    "מה חי עכשיו?",
    "אפשר לעצור לרגע.",
    "להקשיב פנימה.",
    "הרגע כבר כאן."
  ];

  var cycleEl = document.getElementById("cycleText");
  if (cycleEl && !prefersReduced) {
    var i = 0;
    setInterval(function () {
      cycleEl.classList.add("fade-out");
      setTimeout(function () {
        i = (i + 1) % phrases.length;
        cycleEl.textContent = phrases[i];
        cycleEl.classList.remove("fade-out");
      }, 500);
    }, 3400);
  }

  if (prefersReduced) return;

  var hero = document.querySelector("[data-hero-layer]");
  var layers = document.querySelectorAll(".arch-layer");
  if (!hero || !layers.length) return;

  var depths = [10, 20, 34];

  hero.addEventListener("pointermove", function (e) {
    var rect = hero.getBoundingClientRect();
    var x = (e.clientX - rect.left) / rect.width - 0.5;
    var y = (e.clientY - rect.top) / rect.height - 0.5;

    layers.forEach(function (layer, idx) {
      var depth = depths[idx] || 14;
      layer.style.transform = "translate(" + (-x * depth) + "px, " + (-y * depth) + "px)";
    });
  });

  hero.addEventListener("pointerleave", function () {
    layers.forEach(function (layer) {
      layer.style.transform = "translate(0, 0)";
    });
  });
})();
