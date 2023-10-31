
const contactButton = document.querySelector(".contactButton");

contactButton.addEventListener("click", displayModal);
function displayModal() {
    const modal = document.getElementById("contactModal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contactModal");
    modal.style.display = "none";
}
