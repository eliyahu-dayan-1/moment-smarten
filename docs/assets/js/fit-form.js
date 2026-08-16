(function () {
  var form = document.getElementById("fitForm");
  if (!form) return;

  var status = document.getElementById("fitFormStatus");
  var submitBtn = form.querySelector(".form-submit");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (status) {
      status.textContent = "שולח...";
      status.className = "form-status";
    }
    if (submitBtn) submitBtn.disabled = true;

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form)))
    })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.success) {
          if (status) {
            status.textContent = "הפרטים נשלחו בהצלחה! נחזור אלייך בקרוב.";
            status.className = "form-status form-status-success";
          }
          form.reset();
        } else {
          throw new Error(data.message || "שגיאה בשליחה");
        }
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
