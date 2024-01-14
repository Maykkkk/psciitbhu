document.addEventListener("DOMContentLoaded", function() {
    const lever = document.getElementById("cylinderLever");
    const timelines = document.querySelectorAll(".timeline");

    lever.addEventListener("click", function() {
        // Determine the direction in which the lever is moved
        const leverPosition = lever.offsetLeft;

        // Calculate the corresponding timeline index
        const timelineIndex = Math.round((leverPosition / lever.parentElement.offsetWidth) * (timelines.length - 1));

        // Adjust opacity and color for each timeline
        timelines.forEach((timeline, index) => {
            if (index === timelineIndex) {
                timeline.style.opacity = "0.8"; // Adjust opacity as needed
                timeline.style.backgroundColor = "#3498db"; // Adjust color as needed
            } else {
                timeline.style.opacity = "0.2"; // Adjust opacity as needed
                timeline.style.backgroundColor = "rgba(52, 152, 219, 0.2)"; // Adjust color as needed
            }
        });
    });
});
