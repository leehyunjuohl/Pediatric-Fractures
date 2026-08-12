
// Find the Introduction page
const introductionPage =
    document.getElementById("introduction-page");

// Find the Consent page
const consentPage =
    document.getElementById("consent-page");

// Find the Begin Survey button
const beginSurveyButton =
    document.getElementById("begin-survey-button");


// When the user clicks "Begin Survey"
beginSurveyButton.addEventListener("click", function () {

    // Hide the Introduction page
    introductionPage.classList.remove("active");

    // Show the Consent page
    consentPage.classList.add("active");

    // Move the user back to the top of the page
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
