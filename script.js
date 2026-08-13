// Wait until the webpage has completely loaded
document.addEventListener("DOMContentLoaded", function () {


    // =====================================================
    // FIND THE PAGES
    // =====================================================

    const introductionPage =
        document.getElementById("introduction-page");

    const consentPage =
        document.getElementById("consent-page");

    const demographicsPage =
        document.getElementById("demographics-page");


    // =====================================================
    // FIND THE NAVIGATION BUTTONS
    // =====================================================

    const beginSurveyButton =
        document.getElementById("begin-survey-button");

    const consentNextButton =
        document.getElementById("consent-next-button");


    // =====================================================
    // INTRODUCTION → CONSENT
    // =====================================================

    beginSurveyButton.addEventListener("click", function () {

        introductionPage.classList.remove("active");

        consentPage.classList.add("active");

        window.scrollTo(0, 0);

    });


    // =====================================================
    // CONSENT → PERSONAL INFORMATION
    // =====================================================

    consentNextButton.addEventListener("click", function () {

        consentPage.classList.remove("active");

        demographicsPage.classList.add("active");

        window.scrollTo(0, 0);

    });


    // =====================================================
    // PERSONAL INFORMATION ELEMENTS
    // =====================================================

    const anonymousCheckbox =
        document.getElementById("anonymous-checkbox");

    const demographicForm =
        document.getElementById("demographic-form");

    const anonymousMessage =
        document.getElementById("anonymous-message");


    const institutionSelect =
        document.getElementById("institution");

    const otherInstitutionGroup =
        document.getElementById("other-institution-group");


    const roleSelect =
        document.getElementById("role");

    const attendingFields =
        document.getElementById("attending-fields");


    // =====================================================
    // ANONYMOUS PARTICIPATION
    // =====================================================

    anonymousCheckbox.addEventListener("change", function () {

        if (anonymousCheckbox.checked) {

            // Hide demographic questions
            demographicForm.style.display = "none";

            // Show anonymous message
            anonymousMessage.style.display = "block";

        } else {

            // Show demographic questions
            demographicForm.style.display = "block";

            // Hide anonymous message
            anonymousMessage.style.display = "none";

        }

    });


    // =====================================================
    // INSTITUTION → OTHER
    // =====================================================

    institutionSelect.addEventListener("change", function () {

        if (institutionSelect.value === "Other") {

            otherInstitutionGroup.style.display = "block";

        } else {

            otherInstitutionGroup.style.display = "none";

            // Clear the Other institution field
            document.getElementById("other-institution").value = "";

        }

    });


    // =====================================================
    // ROLE → ATTENDING
    // =====================================================

    roleSelect.addEventListener("change", function () {

        if (roleSelect.value === "Attending") {

            attendingFields.style.display = "block";

        } else {

            attendingFields.style.display = "none";

            // Clear attending-specific selections
            document.getElementById("fellowship").value = "";
            document.getElementById("years-practice").value = "";

        }

    });


});
