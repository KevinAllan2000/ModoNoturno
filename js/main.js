function switchToggledValue(toggled) {
  //Em primeiro momento o atributo "data-toggled" será indefinido
  //
  //Caso esteja indefinido ou 
  var map = {
    On: "on",
    Off: "off",
  };

  return toggled === map.On ? map.Off : map.On;
}

var clique = document.querySelector(".switch");

clique.addEventListener("click", function () {
  //Caso 
  var toggled = switchToggledValue(clique.getAttribute("data-toggled"));
  clique.removeAttribute("data-toggled");
  clique.setAttribute("data-toggled", toggled);

  //Mudança de icone do switch
  if (clique.className.includes("fa-sun")) {
    setTimeout(function () {
      clique.classList.remove("fa-sun");
      clique.classList.add("fa-moon");
    }, 700)
  } else {

    setTimeout(function () {
      clique.classList.remove("fa-moon");
      clique.classList.add("fa-sun");
    }, 700)

  }

  //Transição imagem
  var meio = document.querySelector(".all");
  meio.classList.toggle("roll");

  //Transição Top-Bar
  var top = document.querySelector(".top-bar");
  top.classList.toggle("glass-top-bar");

  //Transição Bottom-bar

  var bottom = document.querySelector(".bottom-bar");
  bottom.classList.toggle("glass-bottom-bar");
});
