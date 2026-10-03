document.addEventListener("DOMContentLoaded", function () {

    console.log("Portfolio website loaded successfully.");

    const projectButton = document.querySelector(".hero-buttons .primary-btn");
    const projectsSection = document.querySelector("#projects");

    projectButton.addEventListener("click", function () {

        projectsSection.style.transform = "scale(1.02)";

        setTimeout(function () {
            projectsSection.style.transform = "scale(1)";
        }, 300);

    });

});
