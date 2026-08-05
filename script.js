const text = [
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Computer Engineer"
];

let count = 0;
let index = 0;
let current = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    current = text[count];

    letter = current.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === current.length) {

        count++;

        index = 0;

        setTimeout(type, 1500);

    }

    else{

        setTimeout(type,100);

    }

})();
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const trigger = window.innerHeight - 150;

        if (sectionTop < trigger) {
            section.classList.add("show");
        }
    });
});