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
    //zclock, ziothtr, zsprint have only 1 image
    let childs = pics.children;
    if (childs[0].style.width == "100%") {
        if (btn.id == "zclock" || btn.id == "ziothtr" || btn.id == "zsprint") {
            btn.innerHTML = "Click me to enlarge image";
        } else {
            btn.innerHTML = "Click me to enlarge image(s)";
        }
        for (let child of childs) {
            child.style.width = "45%";
        }
    } else {
        if (btn.id == "zclock" || btn.id == "ziothtr" || btn.id == "zsprint") {
            btn.innerHTML = "Click me to shrink image";
        } else {
            btn.innerHTML = "Click me to shrink image(s)";
        }
        for (let child of childs) {
            child.style.width = "100%";
        }
    }
}
