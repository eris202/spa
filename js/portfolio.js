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
    // setting the pop image and the project description
    // setting the image
    var getThePortImg = document.querySelector(".port__img");
    var getThisSrc = this.parentNode.previousElementSibling.getAttribute("src");
    getThePortImg.setAttribute("src", getThisSrc);
    // setting the project description
    var getTheContentDescriptionCont = document.querySelector(".content ");
    var getTheContent = this.parentNode.parentNode.getAttribute(
      "data-abt_project"
    );
    getTheContentDescriptionCont.innerHTML = getTheContent;
    console.log(getTheContent);
  });
}
// SETTING THE POP DISPLAY TO NONE WHEN THE CANCEL BUTTON IS CLICKED
var getCancelButton = document.querySelector(".cancel");
getCancelButton.addEventListener("click", cancelButton);
function cancelButton() {
  this.parentNode.style = "transform:scale(0);transition:.5s ease-in-out;";
}

// slider for next and previous
var position = 0;
function next(next) {
  position += -217;
  next.style = "margin-left:" + position + "px";
}
function previous(previous) {
  position += 217;
  if (position > 0) {
    position = 0;
  } else {
    console.log(position);
    previous.style = "margin-left:" + position + "px";
  }
}
