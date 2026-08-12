(function () {
  var form = document.getElementById("fitForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var firstName = form.firstName.value.trim();
    var lastName = form.lastName.value.trim();
    var phone = form.phone.value.trim();
    var email = form.email.value.trim();
    var about = form.about.value.trim();
    var motivation = form.motivation.value.trim();

    var subject = "בקשה לשיחת התאמה, " + firstName + " " + lastName;
    var body = [
      "שם פרטי: " + firstName,
      "שם משפחה: " + lastName,
      "נייד: " + phone,
      "מייל: " + email,
      "",
      "קצת עלייך:",
      about,
      "",
      "מה מביא אותך להתעניין בהכשרה:",
      motivation
    ].join("\n");

    var mailto = "mailto:atara30@gmail.com"
      + "?subject=" + encodeURIComponent(subject)
      + "&body=" + encodeURIComponent(body);

    window.location.href = mailto;
  });
})();
