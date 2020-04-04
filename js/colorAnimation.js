var color = document.querySelectorAll(".setting-color");
for (t = 0; t < color.length; t++) {
  color[t].addEventListener("click", function() {
    // SET THE THEME COLOR
    var setColor = document.querySelectorAll(".d_30s");
    for (g = 0; g < setColor.length; g++) {
      setColor[g].setAttribute("style", "color:" + this.getAttribute("data-s"));
    }
    // SET THEME BORDER-COLOR
    var setBorderColor = document.querySelectorAll(".d_40s");
    for (g = 0; g < setBorderColor.length; g++) {
      setBorderColor[g].setAttribute(
        "style",
        "border-color:" + this.getAttribute("data-s")
      );
    }
    // SET THEME BACKGROUND-COLOR
    var setBackground = document.querySelectorAll(".d_50s");
    for (g = 0; g < setBackground.length; g++) {
      setBackground[g].setAttribute(
        "style",
        "background:" + this.getAttribute("data-s")
      );
    }
  });
}

function isToggleSlide(elem) {
  document.querySelector(".animation-cont").classList.toggle("jh9");
}
