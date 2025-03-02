document.addEventListener("DOMContentLoaded", () => {
    // Typing Effect
    const typingText = document.getElementById("typing-text");
    const words = ["Aspiring Software Developer ", "Web Developer ", "Traveler ","CSV "];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        let currentWord = words[wordIndex];
        let displayText = isDeleting
            ? currentWord.substring(0, charIndex--)
            : currentWord.substring(0, charIndex++);

        typingText.textContent = displayText;

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? 100 : 200);
        }
    }

    typeEffect();

    // Mobile Menu Toggle
    const navLinks = document.querySelector(".nav-links");
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "&#9776;";
    document.querySelector("nav").appendChild(menuToggle);

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Smooth Scrolling
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // Contact Form - Send Email
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        const name = document.querySelector("input[type='text']").value;
        const email = document.querySelector("input[type='email']").value;
        const message = document.querySelector("textarea").value;

        // Construct mailto link
        const mailtoLink = `mailto:Padigapativishnu3@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;

        // Open default email client
        window.location.href = mailtoLink;
    });

    // Skill Bar Animation
    document.addEventListener("scroll", () => {
    const skillBars = document.querySelectorAll(".skill-fill");
    const section = document.getElementById("skills");
    if (window.scrollY + window.innerHeight > section.offsetTop) {
        skillBars.forEach((bar) => {
            bar.style.width = bar.getAttribute("data-skill") + "%";
        });
       }
    });
});

    // Scroll to Top Button
const scrollTopBtn = document.createElement("button");
scrollTopBtn.id = "scrollTop";
scrollTopBtn.innerHTML = "⬆";
document.body.appendChild(scrollTopBtn);

window.onscroll = () => {
    if (document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

