const contents = document.querySelectorAll(".page-content");
const modal = document.querySelector("#imageOverview");
const images =document.querySelectorAll(".image-modal");
const body = document.querySelector("body")

var isModalOpened = false;


function removeContent() {
    console.log('раз')
    if (isModalOpened == true) {
        console.log('1')
        for (let content of contents) {
            content.classList.remove("hidden");
        }
        for (let image of images) {
            image.addEventListener("click", removeContent);
        }
        body.removeEventListener("click", removeContent);
        isModalOpened = false;
    } else {
        console.log(contents);
        for (let image of images) {
            image.removeEventListener("click", removeContent);
        }
        for (let content of contents) {
            content.classList.add("hidden");
        }
      
        body.addEventListener("click", removeContent);
        isModalOpened = true;
        
    }
}

for (let image of images) {
    image.addEventListener("click", removeContent);
}


