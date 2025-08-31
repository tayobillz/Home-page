document.addEventListener("DOMContentLoaded", () => {
  // Greeting box
  const greetingBox = document.createElement("div");
  greetingBox.classList.add("greeting-box");
  greetingBox.innerText = "Hi there, welcome to our tech services website!";
  document.body.appendChild(greetingBox);

  setTimeout(() => {
    greetingBox.classList.add("fade-out");
    setTimeout(() => greetingBox.remove(), 500);
  }, 4000);

  // Mobile menu toggle
  const menu = document.getElementById("menu");
  const menuToggle = document.querySelector(".hamburger");

  if (menu && menuToggle) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active");
      menuToggle.classList.toggle("active"); // Hamburger animation
    });

    // Close menu when clicking a link or Sign-in button
    menu.querySelectorAll("a, .signin-btn").forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          menu.classList.remove("active");
          menuToggle.classList.remove("active");
        }
      });
    });
  }

  // Newsletter modal
  const modal = document.getElementById("newsletterModal");
  const closeBtn = document.querySelector(".close-btn");

  // Show modal after 5 seconds
  setTimeout(() => {
    modal.style.display = "flex";
  }, 4000);

  // Close modal on X click
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal on outside click
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Handle form submit
  const form = document.getElementById("newsletterForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for subscribing!");
    modal.style.display = "none";
    form.reset();
  });
});

