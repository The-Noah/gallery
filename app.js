const images = document.querySelectorAll(".container img");
const previewImage = document.querySelector(".preview img");

for(const img of images){
  img.addEventListener("click", function(e){
    previewImage.src = e.target.src;
    previewImage.parentElement.parentElement.style.visibility = "visible";
    previewImage.parentElement.parentElement.style.opacity = 1;
    document.body.style.overflowY = "hidden";
  }, false);
}

function hidePreview(target){
  target.style.visibility = "hidden";
  target.style.opacity = 0;
  document.body.style.overflowY = "auto";
}
