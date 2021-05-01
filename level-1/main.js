window.onload = function () {
  const collectionLinks = document.getElementsByClassName("catalog-link");
  const links = [...collectionLinks];

  const background = document.getElementsByClassName("active-catalog");
  const activeBackground = [...background];

  links.forEach((link) =>
    link.addEventListener("mouseover", () => {
      activeBackground[0].style.backgroundImage = `url(${link.children[0].children[0].getAttribute("src")})`;
    })
  );

  const openBtn = document.getElementsByClassName("catalog-button");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalForm = document.getElementById("modal-form");
  const btnClose = document.getElementById("btn-close");
  const btnAdd = document.getElementById("btn-add");

  openBtn[0].addEventListener("click", () => {
    modalOverlay.style.display = "flex";
  });

  modalOverlay.addEventListener("click", (e) => {
    e.preventDefault();
    if (!modalForm.contains(e.target) || btnClose.contains(e.target)) {
      modalOverlay.style.display = "none";
    }
  });

  btnAdd.addEventListener('click', () => {
    modalOverlay.style.display = "none";
  })
};
