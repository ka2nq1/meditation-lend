const programList = document.querySelector(".c5-list");
const programListItem = document.querySelector(".c5-list_item");
const programBtn = document.querySelector(".c5-list_btn");
const programBtnText = document.querySelector(".c5-list_btn-text");
const programBtnImg = document.querySelector(".c5-btn_btn-img");

programBtn.addEventListener("click", toggleList, false);

function toggleList() {
    const isExpanded = !programList.classList.contains("collapse");

    if (isExpanded) {
        programList.classList.add("collapse")
        programBtnText.textContent = "згорнути повну програму";
        programBtnImg.style.transform = "translateX(-50%) rotate(180deg)";
        programListItem.style.minHeight = "36rem"
    } else {
        programList.classList.remove("collapse")
        programBtnText.textContent = "розгорнути повну програму";
        programBtnImg.style.transform = "translateX(-50%) rotate(0deg)";
        programListItem.style.minHeight = "auto"
    }
}