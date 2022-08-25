function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loaded() {
    await sleep(2000);
    document.getElementById("loadingBg").remove();
    document.getElementById("loadingText").remove();
    document.getElementById("defaultCanvas0").remove();
}
