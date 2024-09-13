/* Created by Tivotal */

let card = document.querySelector(".card");

card.onmousemove = (e) => {
  let x = e.pageX - card.offsetLeft;
  let y = e.pageY - card.offsetTop;

  card.style.setProperty("--x", x + "px");
  card.style.setProperty("--y", y + "px");
};
