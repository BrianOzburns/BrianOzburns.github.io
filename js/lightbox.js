const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

const artwork = document.querySelectorAll('.art-container');
artwork.forEach(artpiece => {
  artpiece.addEventListener('click', e => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    const image = artpiece.querySelector('img');
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

// for(var i = 0; i < artwork.length; i++){
//   artwork[i].addEventListener('click', e => {
//     lightbox.classList.add('active');
//     const img = document.createElement('img');
//     img.src = artwork[i].firstChild.src;
//     while (lightbox.firstChild) {
//       lightbox.removeChild(lightbox.firstChild);
//     }
//     lightbox.appendChild(img);
//   });
// }

lightbox.addEventListener('click', e => {
  // if (e.target !== e.currentTarget) return;
  lightbox.classList.remove('active');
});