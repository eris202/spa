var toggleClassP = document.querySelectorAll(".list-itm ");

for (v = 0; v < toggleClassP.length; v++) {
  toggleClassP[v].addEventListener("click", function() {
    for (i = 0; i < toggleClassP.length; i++) {
      toggleClassP[i].classList.remove("ll");
    }
    this.classList.add("ll");
  });
}

// SETTING ONCLICK TO PORTFOLIO  WORKS
var showInfo = document.querySelectorAll(".see-info");
for (g = 0; g < showInfo.length; g++) {
  showInfo[g].addEventListener("click", function() {
    // SETTING THE POP DISPLAY TO BLOCK WHEN THE SEE INFO IS CLICKED
    document.querySelector(".portfolio-info").style =
      "transform:scale(1);transition:.5s ease-in-out;";
    // setting the pop image an data-content
    var getThePortImg = document.querySelector(".port__img");
    var getThisSrc = this.parentNode.previousElementSibling.getAttribute("src");
    getThePortImg.setAttribute("src", getThisSrc);
  });
}
// SETTING THE POP DISPLAY TO NONE WHEN THE CANCEL BUTTON IS CLICKED
var getCancelButton = document.querySelector(".cancel");
getCancelButton.addEventListener("click", cancelButton);
function cancelButton() {
  this.parentNode.style = "transform:scale(0);transition:.5s ease-in-out;";
}
