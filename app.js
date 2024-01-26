let thumbContainer = document.getElementById("thumb-container");
let displayImage = document.getElementById("display");
const announcer = document.getElementById("announcer");
let images = [
  {
    url: "https://images.unsplash.com/photo-1682687982502-b05f0565753a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A scuba diver next to coral with a camera",
  },
  {
    url: "https://images.unsplash.com/photo-1682686581427-7c80ab60e3f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sand dunes with mountains in the background",
  },
  {
    url: "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A winding path through sandy coloured rock canyon",
  },
  {
    url: "https://images.unsplash.com/photo-1705522369595-40d0b2667739?q=80&w=2119&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A wintery scene with an old wooden shack and bare silver birch tree",
  },
  {
    url: "https://images.unsplash.com/photo-1706125356134-a20ea29b412b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A woman walking two dogs along a road in a forest",
  },
  {
    url: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A persons legs with boots on treading in sand",
  },
  {
    url: "https://images.unsplash.com/photo-1704402864101-1185cc83f92c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "two dogs with hats on looking over thier shoulders",
  },
  {
    url: "https://images.unsplash.com/photo-1684162440652-107bf47ab89b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A field of daisies, close up to the flowers",
  },
];

const createThumbnails = (arrayOfImages) => {
  arrayOfImages.forEach((image) => {
    let imgElement = document.createElement("img");
    imgElement.src = image.url;
    imgElement.alt = image.alt;
    imgElement.tabIndex = 0; //make the indiviaal thumbnails focusale
    imgElement.addEventListener("click", () => {
      console.log(image.alt);
      createDisplayImg(image);
    });
    imgElement.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        createDisplayImg(image);
      }
    });
    thumbContainer.appendChild(imgElement);
  });
};

function createDisplayImg(image) {
  displayImage.innerHTML = "";
  let largeDisplayImg = document.getElementById("display");
  largeDisplayImg.src = image.url;
  largeDisplayImg.alt = image.alt;
  annouceAltText(image.alt);
}

document.addEventListener("DOMContentLoaded", function () {
  createThumbnails(images);
  if (images.length > 0) {
    createDisplayImg(images[0]);
  }
});

function annouceAltText(altText) {
  announcer.textContent = `New image displayed: ${altText}`;
}
