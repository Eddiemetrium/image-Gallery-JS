const [currentImg, imgsAll, opacity] = [
  document.getElementById("current"),
  document.querySelectorAll(".imgs img"), 0.5
];
//set firt img opacity
imgsAll[0].style.opacity=opacity;

imgsAll.forEach((img) => img.addEventListener("click", imgClick));

function imgClick(e) {
  //reset opacity
imgsAll.forEach(img=>(img.style.opacity=1))
//Aadd fade in class
currentImg.classList.add('fade-in');
//remove fade in class after .5 s
setTimeout(()=>currentImg.classList.remove('fade-in'),200)

  //change img
  currentImg.src = e.target.src;
  //change opacity
  e.target.style.opacity = opacity;
}
