// إعداد particles.js كما هو
particlesJS("particles-js", {
    particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: { value: 0.5, random: false },
        size: { value: 4, random: true },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", out_mode: "out" }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, resize: true },
        modes: { repulse: { distance: 200 } }
    },
    retina_detect: true
});

// تغيير لون الخطوط عند الضغط على الزر
document.getElementById("changeColor").addEventListener("click", function() {
    const selectedColor = document.getElementById("colorPicker").value;
    
    // تحديث إعدادات particles.js بلون الخطوط الجديد
    const particlesInstance = particlesJS.load("particles-js", "path/to/your/particles.json", function() {
        particlesJS("particles-js", {
            particles: {
                line_linked: { color: selectedColor } // تغيير لون الخطوط
            }
        });
    });
});
