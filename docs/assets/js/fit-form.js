(function () {
  var form = document.getElementById("fitForm");
  if (!form) return;

  var status = document.getElementById("fitFormStatus");
  var submitBtn = form.querySelector(".form-submit");
  var WEBHOOK_URL = "https://hook.eu1.make.com/ylvc14luv7r8rgjx1vpvf4o3m3wte9h9";

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (form.botcheck.checked) return;

    if (status) {
      status.textContent = "שולח...";
      status.className = "form-status";
    }
    if (submitBtn) submitBtn.disabled = true;

    fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form)))
    })
      .then(function (res) {
        if (!res.ok) throw new Error("שגיאה בשליחה");
        if (status) {
          status.textContent = "הפרטים נשלחו בהצלחה! נחזור אלייך בקרוב.";
          status.className = "form-status form-status-success";
        }
        form.reset();
      })
      .catch(function () {
        if (status) {
          status.textContent = "משהו השתבש בשליחה. אפשר לנסות שוב, או לכתוב ישירות למייל atara30@gmail.com.";
          status.className = "form-status form-status-error";
        }
      })
      .finally(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
  });
})();
