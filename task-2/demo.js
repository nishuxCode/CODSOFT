// Smooth scroll to section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Contact button functionality
function contactMe() {
    window.location.href = 'mailto:alex@example.com';
}

// Intro animation on load
window.addEventListener("load", () => {
    const header = document.querySelector("header");
    header.style.opacity = 0;
    header.style.transition = "opacity 1.5s ease-in-out";
    setTimeout(() => {
        header.style.opacity = 1;
    }, 200);
}); // Smooth scroll for anchor links (like #about, #skills)
document.addEventListener("DOMContentLoaded", function() {
    // Handle project card clicks
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            const projectLink = this.getAttribute("href");
            window.open(projectLink, "_blank"); // Open in new tab
        });
    });
    // Allow login if both fields are filled
});

function viewProject() {
    window.open("https://github.com/your-username/task-manager-mern", "_blank");
}


function downloadResume() {
    // Replace with the correct path to your resume file
    window.open('files/My_Resume.pdf', '_blank');
}

// Contact button functionality
function contactMe() {
    window.location.href = 'mailto:alex@example.com';
}

// Fade-in effect on load for header and about section
window.addEventListener("load", () => {
    const fadeElements = document.querySelectorAll("header, #about");
    fadeElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transition = "opacity 1.5s ease-in-out";
    });

    setTimeout(() => {
        fadeElements.forEach(el => {
            el.style.opacity = 1;
        });
    }, 200);
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const mailtoLink = `mailto:alex@example.com?subject=Message from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;
    window.location.href = mailtoLink;
});
const achievements = [
    { title: "Win a Google Assistant T-shirt and $200 in Google Cloud Credits", description: "Participated in the Google Assistant Action contest." },
    { title: "Why React is the Best?", description: "Shared insights about React and its benefits." }
];

const achievementsList = document.getElementById("achievements-list");

achievements.forEach((achievement) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
                <div>
                    <p class="card-title">${achievement.title}</p>
                    <div>
                    <p class="card-description">${achievement.description}</p>
                </div>
                <div class="arrow-icon">➡️</div>
            `;

    achievementsList.appendChild(card);
});