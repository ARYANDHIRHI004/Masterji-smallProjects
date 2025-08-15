const images = document.getElementsByClassName("image");
const modalImage = document.getElementById("modalImage");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const imageGellary = document.getElementById("imageGellary");

const imagesPath = [
  "/public/1.jpg",
  "/public/2.jpg",
  "/public/3.jpg",
  "/public/4.jpg",
  "/public/5.jpg",
  "/public/6.jpg",
];

imageGellary.innerHTML = imagesPath.map(
  (path) => `<div class="w-30 h-30">
        <img class=" image h-[100%] rounded-xl" src=${path} alt="" srcset="">
      </div>`
);

Array.from(images).map((image) => {
  image.addEventListener("click", (e) => {
    console.log(e.target);
    modalImage.setAttribute("src", e.target.getAttribute("src"));
    modal.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
