const cowtainer = document.getElementById("cowtainer");
const cownter = document.getElementById("cownter");

let cownt = 0;
let root = document.querySelector(":root");

function make_cow() {
  let new_cow = document.createElement("img");
  new_cow.src = "cow.jpg";
  cownt++;
  cownter.innerHTML = `Cow count: ${cownt}`;
  cowtainer.appendChild(new_cow);

  let sqr = Math.sqrt(cownt);

  if (sqr == Math.floor(sqr)) {
    root.style.setProperty("--grid-size", sqr + 1);
  }

  setTimeout(() => {
    make_cow();
  }, 10);
}

make_cow();

document.querySelector("body").addEventListener("mouseleave", (_) => {
  alert("DONT LEAVE MEE");
  window.open("https://broimagine.netlify.app/", "_blank").focus();
});
