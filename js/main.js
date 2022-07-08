let buttonUp = document.querySelector(".arow-up");
let navbar = document.querySelectorAll(".navbar li a");
let section = document.querySelectorAll("div.section");
window.onscroll = () => {
  if (window.scrollY > 1000) {
    buttonUp.style.display = "block";
  } else {
    buttonUp.style.display = "none";
  }

  section.forEach(e => {
    if (window.scrollY > e.offsetTop - 250) {
      var Id = e.getAttribute("id");

      document.querySelectorAll(".navbar li a").forEach(e => {
        e.classList.remove("active");
      });
      document
        .querySelector('.navbar li a[data-scroll = "' + Id + '"]')
        .classList.add("active");
    }
  });
};

//scrollTop

buttonUp.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

//Links add and Remove Class Active
navbar.forEach(li => {
  li.onclick = () => {
    navbar.forEach(lis => {
      lis.classList.remove("active");
    });
    li.classList.add("active");
  };
});
