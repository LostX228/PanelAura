  particlesJS("particles-js", {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } },
                opacity: { value: 0.5, random: false },
                size: { value: 4, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: false, mode: "push" }, resize: true },
                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
            },
            retina_detect: true
        });

        // تغيير لون الخطوط
        document.getElementById('change-color').onclick = function() {
            const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // لون عشوائي
            particlesJS("particles-js", {
                particles: {
                    line_linked: { color: newColor }
                }
            });
        };

        // تغيير شكل الجزيئات
        document.getElementById('change-shape').onclick = function() {
            const newShape = Math.random() > 0.5 ? "circle" : "triangle"; // شكل عشوائي
            particlesJS("particles-js", {
                particles: {
                    shape: { type: newShape }
                }
            });
        };

        // تغيير الألوان المخصصة
        document.getElementById('change-custom-colors').onclick = function() {
            const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A6']; // الألوان المخصصة
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            particlesJS("particles-js", {
                particles: {
                    line_linked: { color: randomColor }
                }
            });
        };
