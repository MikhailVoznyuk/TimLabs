const content = document.querySelector(".page-content");
const modal = document.querySelector("#imageOverview");
const images =document.querySelectorAll(".image-modal");
const modalImage = document.querySelector("#imageOverview img");
const body = document.querySelector("body");

var isModalOpened = false;


function removeContent(el, e) {
    if (isModalOpened == true) {
        content.classList.remove("hidden");
        for (let image of images) {
            image.addEventListener("click", removeContent);
        }
        body.removeEventListener("click", removeContent);
        isModalOpened = false;
    } else {
        for (let image of images) {
            image.removeEventListener("click", removeContent);
        }
        if (el.classList.contains("image-modal")) {
            let imageSrc = el.getAttribute("src");
            modalImage.setAttribute('src', imageSrc);
            
        }
        content.classList.add("hidden");
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


