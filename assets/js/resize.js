const blocks = document.querySelectorAll(".project-block");

function updateBlockStyle() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
        for (let block of blocks) {
            console.log(block.classList)
            block.classList.add("project-block-small");
        }
    }   else {
        for (let block of blocks) {
            block.classList.remove("project-block-small");
        }
    }
}

document.addEventListener("DOMContentLoaded", updateBlockStyle);
window.addEventListener("resize", updateBlockStyle);