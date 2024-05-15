"use strict";
//data
// variable imageFiles gets declared and assigned an array []
// which contains objects representing an image file
let imageFiles = [
  {
    id: "1",
    path: "WB5-exercisessomething.png",
    description: "placeholder 1",
  },
  {
    id: "2",
    path: "https://placehold.co/300x200",
    description: "placeholder 2",
  },
  {
    id: "3",
    path: "https://placehold.co/300x200",
    description: "placeholder 3",
  },
  {
    id: "4",
    path: "https://placehold.co/300x200",
    description: "placeholder 4",
  },
  {
    id: "5",
    path: "https://placehold.co/300x200",
    description: "placeholder 5",
  },
  {
    id: "6",
    path: "https://placehold.co/300x200",
    description: "placeholder 6",
  },
  {
    id: "7",
    path: "https://placehold.co/300x200",
    description: "placeholder 7",
  },
  {
    id: "8",
    path: "https://placehold.co/300x200",
    description: "placeholder 8",
  },
  {
    id: "9",
    path: "https://placehold.co/300x200",
    description: "placeholder 9",
  },
  {
    id: "10",
    path: "https://placehold.co/300x200",
    description: "placeholder 10",
  },
];

window.onload = function () {
  let imageComntainer = document.querySelector("#imageContainer");
  let addImageButton = document.querrySelector("#addImageButton");
  let clearImageButton = document.querySelector("#clearImageButton");
  let imageList = document.querySelector("#imageList");
  let imgDisplay = document.querySelector("#imgDisplay");

  function setImage() {
    for (const imageFile of imageFiles) {
      let imageOption = document.createElement("imageOption");
      imageOption.value = imageFile.id;
      imageOption.innerText = imageFile.description;
      imageList.appendChild(imageOption);
    }
  }
  function addImage() {
    const id = imageList.value;
    for (const imageFile of imageFiles) {
      if (imageFile.id == id) {
        let image = document.createElement("img");
        image.src = imageFile.path;
        image.alt = imageFile.description;
        imgDisplay.appendChild(image);
      }
    }
  }
  function removeImages() {
    imgDisplay.innerHTML = "";
  }
  addImageButton.onclick = addImage;
  clearImageButton.onclick = removeImages;
  setImage();
};

// const inmageDropDown = document.getElementById("imageDropDown");
// const addBtn = document.getElementById("addBtn");
// const remove = document.getElementById("clearBtn");

// window.onload = function init () {
//   //get all html elements into variables
//   //define  your functions
//   //associate your functions with html element events
//   setUpDropDownMenu();
//   addBtn.addEventListener("click",()=>{
//     addImageToPage();
//   })
// };

// function setUpDropDownMenu(){

//     for(let i = 0; i<imageFiles.length; i++){
//         let newOption = document.createElement("option");
//         newOption.innerHTML = imageFiles[i].description;
//         newOption.value = i;

//         inmageDropDown.appendChild(newOption);

//     }

// }

// function onDropDownChange(){
//     //use the url from the image object to create a new image and add it to the webpage

//     //

// }

//  function addImage(dropDownValue) {
//    //create the child
//    let image = document.createElement("img");
//    image.src = imageFiles[dropDownValue];
//    image.alt = "placeholder image";
//    image.classList.add("image");
//    //append the child into the parent(put into inside)
//    imagesContainer.appendChild(image);
//  }

// function removeImagerpomPage() {
//   // remove all images
// }

// function add(params) {

// }
