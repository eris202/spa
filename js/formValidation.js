var formInput = document.querySelectorAll(".validating");

for (q = 0; q < formInput.length; q++) {
  formInput[q].addEventListener("keyup", function() {
    if (this.getAttribute("placeholder") == "Full Name") {
      if (this.value.length >= 5) {
        this.nextElementSibling.innerHTML = "Enter at least 5 characters";
        this.nextElementSibling.style = "color:#f00";
      } else {
        this.nextElementSibling.innerHTML = "Success";
        this.nextElementSibling.style = "color:green";
      }
    }
    //   boallen for message Email
    if (this.getAttribute("placeholder") == "Email") {
      var thisValue = this.value;
      var emailRegexDotCom = /.com+/g;
      var emailRegexAt = /@+/;
      var ConfirmEmailRegexDotCom = thisValue.match(emailRegexDotCom);
      var ConfirmEmailRegexAt = thisValue.match(emailRegexAt);

      if (
        "^ ([a - zA - Z0 -9_-.] +)@([a - zA - Z0 -9_-.] +) .([a - zA - Z]{ 2, 5 })$"
        // ConfirmEmailRegexDotCom == ".com" &&
        // ConfirmEmailRegexAt == "@" &&
        // this.value !== "@.com" &&
        // this.value !== ".com@" &&
        // this.value !== "com.@"
      ) {
        this.style = "border-color:green";
        this.setAttribute("true", "true");
      } else {
        this.style = "border-color:red";
        this.setAttribute("true", "false");
        this.nextElementSibling.innerHTML = "Invalid email address";
      }
    }
  });
}
