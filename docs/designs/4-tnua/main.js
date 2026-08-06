// עיצוב 4 — כותרת מתחלפת, פרלקסת עכבר, והדלקה מדורגת של שורות השיר
(function () {
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // כותרת מתחלפת בין משפטי-מפתח מהספר
  var phrases = [
    "מה חי עכשיו?",
    "הָרֶגַע הַזֶּה חַי, וּבוֹ עֵת.",
    "אתם נמצאים כאן. אפשר להתחיל.",
    "רגע — ריח גן עדן."
  ];
  var cycleEl = document.getElementById("cycleText");
  var i = 0;

  if (cycleEl && !prefersReduced) {
    setInterval(function () {
      cycleEl.classList.add("fade-out");
      setTimeout(function () {
        i = (i + 1) % phrases.length;
        cycleEl.textContent = phrases[i];
        cycleEl.classList.remove("fade-out");
      }, 500);
    }, 4200);
  }

  // פרלקסת עכבר עדינה על שדה הקשתות
  var hero = document.getElementById("heroLayer");
  var layers = document.querySelectorAll(".arch-layer");

  if (hero && layers.length && !prefersReduced && window.matchMedia("(pointer: fine)").matches) {
    hero.addEventListener("mousemove", function (e) {
      var rect = hero.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;

      layers.forEach(function (layer, idx) {
        var depth = (idx + 1) * 6;
        layer.style.marginInline = x * depth + "px";
        layer.style.marginBottom = -y * depth + "px";
      });
    });

    hero.addEventListener("mouseleave", function () {
      layers.forEach(function (layer) {
        layer.style.marginInline = "0px";
        layer.style.marginBottom = "0px";
      });
    });
  }

  // הדלקה מדורגת של שורות השיר בכניסה למסך
  var poemLines = document.querySelectorAll(".poem-line");
  if (poemLines.length && "IntersectionObserver" in window) {
    var poemObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            poemLines.forEach(function (line, idx) {
              setTimeout(function () {
                line.classList.add("is-lit");
              }, prefersReduced ? 0 : idx * 350);
            });
            poemObserver.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    poemObserver.observe(poemLines[0].closest(".poem"));
  } else {
    poemLines.forEach(function (line) { line.classList.add("is-lit"); });
  }
})();
