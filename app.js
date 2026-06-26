window.demoSubmit = function demoSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const note = document.getElementById("formNote");

  note.textContent =
    `Demo captured locally for ${data.owner || "sales"} · backend wiring pending · ready for Cloudflare Worker handoff.`;

  form.classList.add("submitted");
  setTimeout(() => form.classList.remove("submitted"), 900);

  return false;
};

const flowSteps = document.querySelectorAll(".flow-step");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.25 }
);

flowSteps.forEach(step => observer.observe(step));
