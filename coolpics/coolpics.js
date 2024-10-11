const button = document.getElementById('menu');
const menuItems = document.querySelectorAll('.menuItems');  // Select all menu items

button.addEventListener('click', function () {
    menuItems.forEach(item => item.classList.toggle('hidden'));
});

function handleResize() {
    if (window.innerWidth > 2100) {
        menuItems.forEach(item => item.classList.remove('hidden'));
        console.log("show");
    } else {
        menuItems.forEach(item => item.classList.add('hidden'));
        console.log("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    if (event.target.tagName == "IMG") {
        // create a variable to hold the element that was clicked on from event.target
        image = event.target;
        console.log(image);
        // get the src attribute from that element and 'split' it on the "-"
        let src = image.src.split("-");
        // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
        let newSrc = src[0] + "-full.jpeg";
        // insert the viewerTemplate into the top of the body element
        // (element.insertAdjacentHTML("afterbegin", htmltoinsert))
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newSrc, image.alt));
        // add a listener to the close button (X) that calls a function called closeViewer when clicked
        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    } else {
        console.log("Not an image");
    }
}

function closeViewer() {
    console.log("closeViewer");
    // remove the viewer from the DOM
    document.querySelector(".viewer").remove();
}

document.querySelector(".gallery").addEventListener("click", viewHandler);
document.querySelector(".close-viewer").addEventListener("click", closeViewer);