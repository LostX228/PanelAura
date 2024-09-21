// إعدادات particlesJS
particlesJS("particles-js", {
    particles: {
        number: {
            value: 60,
            density: { enable: true, value_area: 800 }
        },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 4,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "top",  // لتوجيه الجزيئات عموديًا للأعلى
            random: false,
            straight: false,
            out_mode: "out",
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: false, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true,
    config_demo: { hide_card: false }
});

// زر تغيير لون الخط بشكل عشوائي
document.getElementById("random-line-color").addEventListener("click", function() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    particlesJS("particles-js", {
        particles: {
            ...particlesJS.particles, // الحفاظ على الإعدادات الأخرى
            line_linked: { ...particlesJS.particles.line_linked, color: randomColor }
        },
        interactivity: particlesJS.interactivity // الحفاظ على إعدادات التفاعل
    });
});

// زر تغيير شكل الدائرة
document.getElementById("change-shape").addEventListener("click", function() {
    const shapes = ["circle", "triangle", "edge", "polygon"];
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

    particlesJS("particles-js", {
        particles: {
            ...particlesJS.particles,
            shape: { ...particlesJS.particles.shape, type: randomShape }
        },
        interactivity: particlesJS.interactivity // الحفاظ على إعدادات التفاعل
    });
});
