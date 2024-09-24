 // ParticlesJS configuration
    particlesJS("particles-js", {
        // ... (rest of the configuration remains the same)
    });

    // Add event listeners to the buttons
    document.getElementById("change-color").addEventListener("click", function() {
        // Generate a random color
        var randomColor = getRandomColor();

        // Update the particlesJS configuration
        particlesJS("particles-js", {
            particles: {
                color: {
                    value: randomColor
                }
            }
        });
    });

    document.getElementById("change-shape").addEventListener("click", function() {
        // Generate a random shape
        var randomShape = getRandomShape();

        // Update the particlesJS configuration
        particlesJS("particles-js", {
            particles: {
                shape: {
                    type: randomShape
                }
            }
        });
    });

    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to generate a random shape
    function getRandomShape() {
        var shapes = ["circle", "triangle", "square", "pentagon", "hexagon"];
        return shapes[Math.floor(Math.random() * shapes.length)];
    }
