const contents = document.querySelectorAll(".page-content");
const modal = document.querySelector("#imageOverview");
const images =document.querySelectorAll(".image-modal");
const body = document.querySelector("body")

var isModalOpened = false;


function removeContent(el, e) {
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
        e.stopPropagation();
        e.preventDefault();
        
        
    }

}

for (let image of images) {
    image.addEventListener("click", function(e) {
        removeContent(image, e);
    })
}


