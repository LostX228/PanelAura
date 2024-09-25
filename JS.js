 // إعداد particles.js
        let currentShape = "circle"; // الشكل الافتراضي
        let currentColor = "#ffffff"; // اللون الافتراضي

        function initParticles(shape, color) {
            particlesJS("particles-js", {
                particles: {
                    number: { value: 60, density: { enable: true, value_area: 800 } },
                    color: { value: color },
                    shape: {
                        type: shape,
                        stroke: { width: 0, color: "#000000" },
                        polygon: { nb_sides: 5 },
                        image: { src: "img/github.svg", width: 100, height: 100 }
                    },
                    opacity: { value: 0.5, random: false, anim: { enable: false } },
                    size: { value: 4, random: true, anim: { enable: false } },
                    line_linked: { enable: true, distance: 150, color: color, opacity: 0.4, width: 1 },
                    move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out" }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: false }, resize: true },
                    modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
                },
                retina_detect: true
            });
        }

        initParticles(currentShape, currentColor); // إعداد الجزيئات بشكل افتراضي

        // عرض قائمة اختيار اللون عند الضغط على الزر
        document.getElementById("changeColorButton").addEventListener("click", function() {
            const colorPicker = document.getElementById("colorPicker");
            colorPicker.classList.toggle("hidden");
        });

        // تحديث اللون عند اختيار اللون من القائمة
        document.getElementById("colorPicker").addEventListener("change", function() {
            currentColor = this.value;
            updateParticlesAndNotify('color');
            document.getElementById("colorPicker").classList.add("hidden"); // إخفاء القائمة بعد الاختيار
        });

        // عرض قائمة اختيار الشكل عند الضغط على الزر
        document.getElementById("changeShapeButton").addEventListener("click", function() {
            const shapePicker = document.getElementById("shapePicker");
            shapePicker.classList.toggle("hidden");
        });

        // تحديث الشكل عند اختيار الشكل من القائمة
        document.getElementById("shapePicker").addEventListener("change", function() {
            currentShape = this.value;
            updateParticlesAndNotify('shape');
            document.getElementById("shapePicker").classList.add("hidden"); // إخفاء القائمة بعد الاختيار
        });

        // تحديث الجزيئات وعرض الإشعار
        function updateParticlesAndNotify(type) {
            initParticles(currentShape, currentColor);
            let message = '';

            if (type === 'color') {
                message = `تم اختيار اللون: ${currentColor}`;
            } else if (type === 'shape') {
                message = `تم اختيار الشكل: ${currentShape}`;
            }

            vant.Notify({
                type: 'success',
                message: message,
                duration: 3000 // مدة ظهور الإشعار
            });
        }
