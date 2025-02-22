// script.js
document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const scrollToTop = document.getElementById("scrollToTop");
    
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTop.style.display = "block";
        } else {
            scrollToTop.style.display = "none";
        }
    });
    
    scrollToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    
    document.getElementById("contactForm").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Your message has been sent!");
    });
});
// Toggle the visibility of chat options
function toggleChatOptions() {
    var chatOptions = document.getElementById("chat-options");
    chatOptions.style.display = (chatOptions.style.display === "none" || chatOptions.style.display === "") ? "flex" : "none";
                          }
