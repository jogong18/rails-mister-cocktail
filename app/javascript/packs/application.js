/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

console.log('Hello World from Webpacker')

import 'bootstrap';


const numItemsToGenerate = 78; //how many gallery items you want on the screen
const numImagesAvailable = 99; //how many total images are in the collection you are pulling from
const imageWidth = 800; //your desired image width in pixels
const imageHeight = 600; //desired image height in pixels
const collectionID = 2469482; //the collection ID from the original url
// function renderGalleryItem(randomNumber){
//    fetch(`https://source.unsplash.com/collection/2469482/800x600/?sig=${randomNumber}`)
//   .then((response)=> {
//     let galleryItem = document.createElement('div');
//     galleryItem.classList.add('gallery-item');
//     galleryItem.innerHTML = `
//       <img class="gallery-image" src="${response.url}" alt="gallery image"/>
//     `
//     document.body.appendChild(galleryItem);
//   })
// }
// for(let i=0;i<numItemsToGenerate;i++){
//   let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
//   renderGalleryItem(randomImageIndex);
// }




