// Varables
const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const container = document.querySelector(".container");
// btn.addEventListener("click", function () {
//   let p = input.value;
//   text.textContent = p;
//   input.value = "";
//   container.appendChild(p);

//   text.textContent.addEventListener("click", function () {
//     text.value.style.textDecoration = "line-through";
//   });
// });

btn.addEventListener("click", function () {
  let p = document.createElement("p");
  p.innerText = input.value;
  container.appendChild(p);
  input.value = "";

  p.addEventListener("click", function () {
    p.style.textDecoration === "none"
      ? (p.style.textDecoration = "line-through")
      : (p.style.textDecoration = "none");
  });

  p.addEventListener("dblclick", function () {
    let remove = confirm("Are you sure?");
    if (remove) container.removeChild(p);
  });
});
