// Wait until the webpage has completely loaded
document.addEventListener("DOMContentLoaded", function () {

    // Find the two pages
    const introductionPage =
        document.getElementById("introduction-page");

    const consentPage =
        document.getElementById("consent-page");

    // Find the Begin Survey button
    const beginSurveyButton =
        document.getElementById("begin-survey-button");


    // Make sure the button exists
    if (beginSurveyButton) {

        // Listen for the button being clicked
        beginSurveyButton.addEventListener("click", function () {

            // Hide Introduction
            introductionPage.classList.remove("active");

            // Show Consent
            consentPage.classList.add("active");

            // Return to the top of the page
            window.scrollTo(0, 0);

        });

    }

});
