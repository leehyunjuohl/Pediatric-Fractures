// Wait until the webpage has completely loaded
document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // FIND THE PAGES
    // =========================

    const introductionPage =
        document.getElementById("introduction-page");

    const consentPage =
        document.getElementById("consent-page");

    const demographicsPage =
        document.getElementById("demographics-page");


    // =========================
    // FIND THE BUTTONS
    // =========================

    const beginSurveyButton =
        document.getElementById("begin-survey-button");

    const consentNextButton =
        document.getElementById("consent-next-button");


    // =========================
    // INTRODUCTION → CONSENT
    // =========================

    if (beginSurveyButton) {

        beginSurveyButton.addEventListener("click", function () {

            introductionPage.classList.remove("active");

            consentPage.classList.add("active");

            window.scrollTo(0, 0);

        });

    }


    // =========================
    // CONSENT → DEMOGRAPHICS
    // =========================

    if (consentNextButton) {

        consentNextButton.addEventListener("click", function () {

            consentPage.classList.remove("active");

            demographicsPage.classList.add("active");

            window.scrollTo(0, 0);

        });

    }

});
