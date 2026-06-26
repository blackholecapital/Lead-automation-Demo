const button = document.getElementById("demoButton");
const note = document.getElementById("demoNote");

if (button && note) {
  button.addEventListener("click", () => {
    note.textContent = "Demo placeholder fired. Next wiring step: POST this card to the Cloudflare Worker and trigger Switchboard Automation 360.";
    note.classList.add("active");
  });
}
