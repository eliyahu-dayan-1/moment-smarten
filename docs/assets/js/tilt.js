// חכמת הרגע, הטיה עדינה בעכבר לאלמנטים עם [data-tilt], משותף לכל עיצובי דף הבית
(function () {
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll("[data-tilt]");
  if (prefersReduced || !items.length || !window.matchMedia("(hover: hover)").matches) return;

  items.forEach(function (el) {
    var strength = parseFloat(el.getAttribute("data-tilt")) || 8;

    el.addEventListener("pointermove", function (e) {
      var rect = el.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform =
        "perspective(900px) rotateY(" + (x * strength) + "deg) rotateX(" + (-y * strength) + "deg) translateY(-4px)";
    });

    el.addEventListener("pointerleave", function () {
      el.style.transform = "";
    });
  });
})();
