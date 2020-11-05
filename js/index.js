var getAllLi = document.querySelectorAll(".menu-list");
for (i in getAllLi) {
  getAllLi[i].addEventListener("click", scrollFunction);

  function scrollFunction() {
    var getClass = this.getAttribute("data-slide");
    document
      .querySelector("." + getClass)
      .scrollIntoView({ behavior: "smooth" });
  }
}



