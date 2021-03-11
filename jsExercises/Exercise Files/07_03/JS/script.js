
const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");
CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}
// By leaving out the parentheses, we insure the function doesn't run
CTA.onclick = reveal;
