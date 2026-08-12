// חכמת הרגע, ניווט, ניתוב ותוכן השלד
(function () {
  var routeData = {
    "/about": { title: "על עטרה", kicker: "הסיפור והדרך", lede: "היכרות עם עטרה גבריאלי, מייסדת חכמת הרגע, ועם הדרך שממנה נולדה השפה." },
    "/book": { title: "הספר", kicker: "חכמת הרגע", lede: "הספר שמזמין לפגוש את מערכת ההפעלה של החיים דרך הקשבה פשוטה למה שחי עכשיו." },
    "/sessions": {
      title: "מפגשים אישיים", kicker: "מרחב אחד על אחד", lede: "שני מרחבים אישיים, ממוקדים וקרובים, לבהירות או לתנועה.",
      cards: [
        ["/sessions/behirut", "מקום לבהירות", "מפגש אישי להתבוננות, דיוק והבנת מה שמבקש להתבהר."],
        ["/sessions/tnua", "מקום לתנועה", "מפגש אישי שמאפשר לעבור מהבנה פנימית לצעד חי ומדויק."]
      ]
    },
    "/sessions/behirut": { title: "מקום לבהירות", parent: ["/sessions", "מפגשים אישיים"], kicker: "מפגש אישי", lede: "מרחב שקט וממוקד לפגוש שאלה, צומת או תחושה שעדיין אין לה מילים." },
    "/sessions/tnua": { title: "מקום לתנועה", parent: ["/sessions", "מפגשים אישיים"], kicker: "מפגש אישי", lede: "מרחב שמחבר בין מה שכבר התבהר בפנים לבין התנועה שמבקשת לקרות בחיים." },
    "/courses": {
      title: "קורסים", kicker: "ללמוד ולתרגל", lede: "תהליכים קבוצתיים שמאפשרים להעמיק בשפת חכמת הרגע ולחיות אותה ביומיום.",
      cards: [
        ["/courses/regaim", "חיה רגעים", "קורס לחיבור חי, פשוט ויומיומי לרגע הזה."],
        ["/courses/shabbat", "כל השבוע מרגיש כמו שבת", "תהליך שמזמין קצב פנימי אחר גם בתוך שבוע מלא."],
        ["/courses/isha-poemet", "אישה פועמת", "מרחב נשי לחיבור לחיות, לקצב ולפעימה הפנימית."],
        ["/courses/basis-iski", "בסיס עסקי", "קורס לבניית תשתית עסקית מחוברת, בהירה ומעשית."]
      ]
    },
    "/courses/regaim": { title: "חיה רגעים", parent: ["/courses", "קורסים"], kicker: "קורס", lede: "למידה ותרגול של נוכחות חיה בתוך הרגעים שמהם החיים באמת מורכבים." },
    "/courses/shabbat": { title: "כל השבוע מרגיש כמו שבת", parent: ["/courses", "קורסים"], kicker: "קורס", lede: "אפשרות לפגוש מרחב, נשימה ומנוחה פנימית בלי לחכות לסוף השבוע." },
    "/courses/isha-poemet": { title: "אישה פועמת", parent: ["/courses", "קורסים"], kicker: "קורס", lede: "מרחב נשי שמזמין לשוב אל הקצב האישי, אל החיות ואל מה שמבקש לפעום." },
    "/courses/basis-iski": { title: "בסיס עסקי", parent: ["/courses", "קורסים"], kicker: "קורס", lede: "בניית יסודות עסקיים יציבים מתוך בהירות, הקשבה וחיבור לדרך האישית." },
    "/trainings": {
      title: "הכשרות מקצועיות", kicker: "להעמיק ולהעביר הלאה", lede: "מסלולים מקצועיים ארוכי טווח למלוות ולמטפלות שמבקשות להעמיק בשיטה.",
      cards: [
        ["/trainings/yesh-lach-esek", "יש לך עסק", "הכשרה למלוות שרוצות לחבר בין עומק מקצועי לתשתית עסקית."],
        ["/trainings/tipul-todaati", "הכשרה לטיפול תודעתי", "מסלול עומק ללימוד, תרגול ויישום מקצועי של טיפול תודעתי."]
      ]
    },
    "/trainings/yesh-lach-esek": { title: "יש לך עסק", parent: ["/trainings", "הכשרות מקצועיות"], kicker: "הכשרה למלוות", lede: "מסלול שמחבר בין היכולת ללוות אחרות לבין עסק שמחזיק את העבודה לאורך זמן." },
    "/trainings/tipul-todaati": { title: "הכשרה לטיפול תודעתי", parent: ["/trainings", "הכשרות מקצועיות"], kicker: "הכשרה מקצועית", lede: "מסלול הכשרה מעמיק לעבודה תודעתית מקצועית, אחראית ומחוברת." },
    "/lectures": { title: "הרצאות", kicker: "מפגש לקהל ולקהילה", lede: "הרצאות שמביאות את חכמת הרגע לארגונים, לקהילות ולקבוצות, בשפה בהירה, חיה ונגישה." },
    "/contact": { title: "יצירת קשר", kicker: "מתחילות מכאן", lede: "אפשר לכתוב, לשאול ולהתייעץ כדי להבין מהו המרחב שמתאים לך עכשיו." }
  };

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (!header) return;

  var navScript = document.currentScript;
  var scriptPath = navScript ? new URL(navScript.src, window.location.href).pathname : window.location.pathname;
  var designBase = scriptPath.replace(/assets\/js\/nav\.js.*$/, "").replace(/\/$/, "");
  var siteBase = designBase;
  var homeContent = document.querySelector("[data-home-content]");
  var routePage = null;
  document.body.setAttribute("data-concept", "2");

  // קיבוע כתובת האייקון לפני שינוי ה-URL, כדי שלא תישבר בנתיבים עמוקים.
  var favicon = document.querySelector('link[rel~="icon"]');
  if (favicon) favicon.setAttribute("href", favicon.href);

  // קישורים יחסיים של גלריית העיצובים והפוטר חייבים להישאר יציבים גם אחרי pushState.
  document.querySelectorAll("a[href]:not([data-route])").forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href || href.charAt(0) === "#" || /^(mailto:|tel:|https?:)/.test(href)) return;
    link.setAttribute("href", link.href);
  });

  function routeHref(route) {
    return designBase + (route === "/" ? "/" : route);
  }

  function assetHref(path) {
    return siteBase + "/assets/" + path.replace(/^\//, "");
  }

  document.querySelectorAll("[data-route]").forEach(function (link) {
    link.setAttribute("href", routeHref(link.getAttribute("data-route")));
  });

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        nav.querySelectorAll(".nav-group[open]").forEach(function (group) { group.open = false; });
      });
    });
  }

  nav.querySelectorAll(".nav-group").forEach(function (group) {
    group.addEventListener("toggle", function () {
      if (!group.open) return;
      nav.querySelectorAll(".nav-group[open]").forEach(function (other) {
        if (other !== group) other.open = false;
      });
    });
  });

  function currentRoute() {
    var redirectedRoute = new URLSearchParams(window.location.search).get("route");
    if (redirectedRoute) return redirectedRoute.charAt(0) === "/" ? redirectedRoute : "/" + redirectedRoute;
    if (!designBase) return "/";
    var path = window.location.pathname.slice(designBase.length) || "/";
    return path.replace(/\/$/, "") || "/";
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char];
    });
  }

  function breadcrumbs(page) {
    var html = '<a href="' + routeHref("/") + '" data-route="/">בית</a>';
    if (page.parent) {
      html += '<span aria-hidden="true">/</span><a href="' + routeHref(page.parent[0]) + '" data-route="' + page.parent[0] + '">' + escapeHtml(page.parent[1]) + "</a>";
    }
    html += '<span aria-hidden="true">/</span><span>' + escapeHtml(page.title) + "</span>";
    return html;
  }

  function cardsHtml(cards) {
    return '<div class="route-grid">' + cards.map(function (card, index) {
      return '<a class="route-card" href="' + routeHref(card[0]) + '" data-route="' + card[0] + '">' +
        '<span class="route-card-index">0' + (index + 1) + '</span>' +
        '<h2>' + escapeHtml(card[1]) + '</h2>' +
        '<p>' + escapeHtml(card[2]) + '</p>' +
        '<span class="route-card-link">לעמוד התוכנית ←</span></a>';
    }).join("") + "</div>";
  }

  function pageContentHtml(route, page) {
    if (page.cards) return cardsHtml(page.cards);

    if (route === "/about") {
      return '<div class="route-content-grid">' +
        '<div class="route-media"><img src="' + assetHref("img/atara-about-arch.jpg") + '" alt="עטרה גבריאלי"></div>' +
        '<div class="route-copy"><h2>להקשיב למה שחי עכשיו</h2>' +
        '<p>עטרה גבריאלי היא מייסדת מכון חכמת הרגע ומחברת הספר „חכמת הרגע”. דרך הכתיבה, ההוראה והליווי האישי היא מזמינה כל אחת ואחד לגלות מחדש את השפה הפנימית של הנוכחות.</p>' +
        '<p>הדרך שלה נשענת על אמון עמוק: בכל אחת ואחד מאיתנו קיימת מערכת פנימית שיודעת את הקצב המדויק. העבודה היא ללמוד להקשיב לה, לזהות את מה שכבר נמצא כאן ולתת לו מקום לנוע.</p>' +
        '<a class="route-action" href="' + routeHref("/sessions") + '" data-route="/sessions">לדרכים להיפגש</a></div></div>';
    }

    if (route === "/book") {
      return '<div class="route-content-grid">' +
        '<div class="route-media route-book-media"><img src="' + assetHref("img/book-cover.jpg") + '" alt="עטיפת הספר חכמת הרגע"></div>' +
        '<div class="route-copy"><h2>שפה להבנת מערכת ההפעלה של החיים</h2>' +
        '<p>„חכמת הרגע” נולד מתוך הקשבה לכאן ולעכשיו, להוויה שכבר קיימת בתוכנו, גם כאשר איננו שמים לב אליה.</p>' +
        '<p>הספר מציע דרך לפגוש את הרגע לא כנקודה שצריך לעבור דרכה, אלא כמקום שממנו אפשר להבין, להרגיש ולבחור את התנועה הבאה.</p>' +
        '<a class="route-action" href="' + routeHref("/contact") + '" data-route="/contact">לפרטים על הספר</a></div></div>';
    }

    if (route === "/lectures") {
      return '<div class="route-contact-card"><h2>חכמת הרגע פוגשת קהל</h2>' +
        '<p>מפגשים והרצאות לקבוצות, קהילות וארגונים, שמביאים את שפת ההקשבה והנוכחות אל שאלות אמיתיות מחיי היומיום.</p>' +
        '<p>כל הרצאה מותאמת לקהל ולמסגרת, ומשלבת רעיון בהיר, התבוננות ותרגול שאפשר לקחת הלאה.</p>' +
        '<a class="route-action" href="' + routeHref("/contact") + '" data-route="/contact">להזמנת הרצאה</a></div>';
    }

    if (route === "/contact") {
      return '<div class="route-contact-card"><h2>אפשר להתחיל בשיחה</h2>' +
        '<p>כתבו בקצרה מה מעסיק אתכן ומהו המרחב שמעניין אתכן, מפגש אישי, קורס, הכשרה, הרצאה או הספר.</p>' +
        '<a class="route-email" href="mailto:atara30@gmail.com">atara30@gmail.com</a></div>';
    }

    return '<div class="route-placeholder"><h2>השלד מוכן</h2><p>זהו עמוד תוכן ראשוני. דף הנחיתה המלא, התוכן והקריאה לפעולה ייבנו בשלב הבא.</p>' +
      (page.parent ? '<a class="route-back" href="' + routeHref(page.parent[0]) + '" data-route="' + page.parent[0] + '">חזרה אל ' + escapeHtml(page.parent[1]) + ' ←</a>' : "") + '</div>';
  }

  function routeStep(route) {
    if (route.indexOf("/about") === 0) return "01";
    if (route.indexOf("/book") === 0) return "02";
    if (route.indexOf("/sessions") === 0) return "03";
    if (route.indexOf("/courses") === 0) return "04";
    if (route.indexOf("/trainings") === 0) return "05";
    if (route.indexOf("/lectures") === 0) return "06";
    return "07";
  }

  function renderRoute(route, options) {
    options = options || {};
    nav.querySelectorAll(".nav-group[open]").forEach(function (group) { group.open = false; });
    document.querySelectorAll("[data-route]").forEach(function (link) {
      var isCurrent = link.getAttribute("data-route") === route;
      if (isCurrent) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });

    if (route === "/") {
      if (routePage) routePage.remove();
      routePage = null;
      if (homeContent) homeContent.hidden = false;
      document.title = "חכמת הרגע | עטרה גבריאלי";
      if (!options.noScroll) window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    var page = routeData[route];
    if (!page) page = { title: "העמוד בדרך", kicker: "חכמת הרגע", lede: "העמוד המבוקש עדיין נמצא בתהליך בנייה." };
    if (homeContent) homeContent.hidden = true;
    if (routePage) routePage.remove();

    routePage = document.createElement("main");
    routePage.className = "route-page route-concept-" + conceptNumber;
    routePage.setAttribute("data-step", routeStep(route));
    routePage.innerHTML =
      '<section class="route-hero"><div class="container">' +
        '<nav class="route-breadcrumbs" aria-label="פירורי לחם">' + breadcrumbs(page) + '</nav>' +
        '<p class="route-kicker">' + escapeHtml(page.kicker) + '</p>' +
        '<h1 class="route-title">' + escapeHtml(page.title) + '</h1>' +
        '<p class="route-lede">' + escapeHtml(page.lede) + '</p>' +
      '</div></section>' +
      '<section class="route-body"><div class="container">' +
        pageContentHtml(route, page) +
      '</div></section>';

    routePage.querySelector(".route-hero").setAttribute("data-step", routeStep(route));
    routePage.querySelector(".route-body > .container").setAttribute("data-step", routeStep(route));

    header.insertAdjacentElement("afterend", routePage);
    document.title = page.title + " | חכמת הרגע";
    bindRouteLinks(routePage);
    if (!options.noScroll) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function navigate(route) {
    window.history.pushState({ route: route }, "", routeHref(route));
    renderRoute(route);
  }

  function bindRouteLinks(scope) {
    scope.querySelectorAll("[data-route]").forEach(function (link) {
      if (link.dataset.routeBound) return;
      link.dataset.routeBound = "true";
      link.addEventListener("click", function (event) {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        navigate(link.getAttribute("data-route"));
      });
    });
  }

  bindRouteLinks(document);
  window.addEventListener("popstate", function () { renderRoute(currentRoute()); });
  var initialRoute = currentRoute();
  if (new URLSearchParams(window.location.search).has("route")) {
    window.history.replaceState({ route: initialRoute }, "", routeHref(initialRoute));
  }
  renderRoute(initialRoute, { noScroll: true });

  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
