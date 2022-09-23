// function sleep(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function loaded() {
//     await sleep(2000);
//     document.getElementById("loadingBg").remove();
//     document.getElementById("loadingText").remove();
//     document.getElementById("defaultCanvas0").remove();
// }

async function removeElems() {
    document.getElementById("loadingBg").remove();
    document.getElementById("loadingText").remove();
    document.getElementById("defaultCanvas0").remove();
}

function toggleZoom(pics, btn) {
    let childs = pics.children;
    if (childs[0].style.width == "100%") {
        btn.innerHTML = "Click here to enlarge image(s)";
        for (let child of childs) {
            child.style.width = "45%";
        }
    } else {
        btn.innerHTML = "Click here to shrink image(s)";
        for (let child of childs) {
            child.style.width = "100%";
        }
    }
}
