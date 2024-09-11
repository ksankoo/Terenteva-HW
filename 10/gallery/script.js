function learnJs() {
  return 'Я учу Java Script';
}
console.log(learnJs());

let image1 = document.getElementById('image-one');
let image2 = document.getElementById('image-two');
image2.style.display = 'none';
function back() {
  image1.style.display = 'none';
  image2.style.display = '';
}

function forward() {
  image2.style.display = 'none';
  image1.style.display = '';
}
