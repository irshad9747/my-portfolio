 const form = document.getElementById("contact-form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xldnkoyo", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      alert("✅Message sent successfully!");
      form.reset();
    } else {
      alert("Something went wrong — did you type your email correctly? 🙂");
    }
  });
//  button
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".nav .ne");
  const sections = {
    About:   document.getElementById("about"),
    Projects:document.getElementById("projects"),
    Contact: document.getElementById("contact")
  };

  function showSection(name, btn) {
    // hide all
    Object.values(sections).forEach(sec => sec.style.display = "none");
    // reset buttons
    buttons.forEach(b => b.classList.remove("active"));
    // show chosen
    sections[name].style.display = "block";
    // highlight
    btn.classList.add("active");
  }

  // attach handlers
  buttons.forEach(btn => {
    const name = btn.textContent.trim();
    btn.addEventListener("click", () => showSection(name, btn));
  });

  // initial state: show About
  showSection("About", buttons[0]);
});


