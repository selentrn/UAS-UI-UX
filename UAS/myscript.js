// op1
document.addEventListener("DOMContentLoaded", function() {
    var bounceImage = document.getElementById("ourplacepen1bounce");
    bounceImage.classList.add("bouncing");
    bounceImage.addEventListener("click", function() {
        if (bounceImage.classList.contains("bouncing")) {
            bounceImage.classList.remove("bouncing");
        } else {
            bounceImage.classList.add("bouncing");
        }
    });
});

// op2
document.addEventListener("DOMContentLoaded", function() {
    var bounceImage2 = document.getElementById("ourplacepen2bounce");
    bounceImage2.classList.add("bouncing2");
    bounceImage2.addEventListener("click", function() {
        if (bounceImage2.classList.contains("bouncing2")) {
            bounceImage2.classList.remove("bouncing2");
        } else {
            bounceImage2.classList.add("bouncing2");
        }
    });
});