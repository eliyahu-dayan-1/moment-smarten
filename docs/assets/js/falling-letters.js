// חכמת הרגע — אותיות נופלות בהירו, קשורות לגלילה (לא רק לופ עצמאי)
(function () {
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var host = document.querySelector(".falling-letters");
  if (!host || prefersReduced) return;

  var letters = "חכמתהרגעשפ".split("");
  var count = window.innerWidth < 640 ? 10 : 18;
  var items = [];

  for (var i = 0; i < count; i++) {
    var span = document.createElement("span");
    span.textContent = letters[Math.floor(Math.random() * letters.length)];
    span.setAttribute("aria-hidden", "true");
    var left = Math.random() * 100;
    var size = 14 + Math.random() * 26;
    var speed = 0.15 + Math.random() * 0.5;
    var startOffset = Math.random() * 1200;
    var spin = (Math.random() * 60 - 30).toFixed(1);
    span.style.left = left + "%";
    span.style.fontSize = size + "px";
    span.style.opacity = (0.12 + Math.random() * 0.28).toFixed(2);
    host.appendChild(span);
    items.push({ el: span, speed: speed, offset: startOffset, spin: spin });
  }

  var wrapHeight = host.offsetHeight || window.innerHeight;
  var ticking = false;

  function update() {
    var y = window.scrollY || 0;
    items.forEach(function (item) {
      var pos = (y * item.speed + item.offset) % (wrapHeight + 120);
      item.el.style.transform = "translateY(" + (pos - 100) + "px) rotate(" + item.spin + "deg)";
    });
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
