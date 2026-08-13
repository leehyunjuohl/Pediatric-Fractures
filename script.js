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

    const instructionsPage =
        document.getElementById("instructions-page");

    const question1Page =
        document.getElementById("question-1-page");


    // =====================================================
    // FIND THE NAVIGATION BUTTONS
    // =====================================================

    const beginSurveyButton =
        document.getElementById("begin-survey-button");

    const consentNextButton =
        document.getElementById("consent-next-button");

    const demographicsNextButton =
        document.getElementById("demographics-next-button");

    const startSurveyButton =
        document.getElementById("start-survey-button");


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

    const participantName =
        document.getElementById("participant-name");

    const institutionSelect =
        document.getElementById("institution");

    const otherInstitutionGroup =
        document.getElementById("other-institution-group");

    const otherInstitution =
        document.getElementById("other-institution");

    const roleSelect =
        document.getElementById("role");

    const attendingFields =
        document.getElementById("attending-fields");

    const fellowshipSelect =
        document.getElementById("fellowship");

    const yearsPracticeSelect =
        document.getElementById("years-practice");

    const demographicsError =
        document.getElementById("demographics-error");


    // =====================================================
    // ANONYMOUS PARTICIPATION
    // =====================================================

    anonymousCheckbox.addEventListener("change", function () {

        if (anonymousCheckbox.checked) {

            demographicForm.style.display = "none";

            anonymousMessage.style.display = "block";

            demographicsError.style.display = "none";

        } else {

            demographicForm.style.display = "block";

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

            otherInstitution.value = "";

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

            fellowshipSelect.value = "";

            yearsPracticeSelect.value = "";

        }

    });


    // =====================================================
    // PERSONAL INFORMATION → INSTRUCTIONS
    // =====================================================

    demographicsNextButton.addEventListener("click", function () {


        // -------------------------------------------------
        // ANONYMOUS PARTICIPANT
        // -------------------------------------------------

        if (anonymousCheckbox.checked) {

            demographicsPage.classList.remove("active");

            instructionsPage.classList.add("active");

            demographicsError.style.display = "none";

            window.scrollTo(0, 0);

            return;

        }


        // -------------------------------------------------
        // NON-ANONYMOUS PARTICIPANT
        // -------------------------------------------------

        let formIsValid = true;


        // Name

        if (participantName.value.trim() === "") {

            formIsValid = false;

        }


        // Institution

        if (institutionSelect.value === "") {

            formIsValid = false;

        }


        // Other Institution

        if (
            institutionSelect.value === "Other" &&
            otherInstitution.value.trim() === ""
        ) {

            formIsValid = false;

        }


        // Role

        if (roleSelect.value === "") {

            formIsValid = false;

        }


        // Attending-specific requirements

        if (roleSelect.value === "Attending") {

            if (fellowshipSelect.value === "") {

                formIsValid = false;

            }

            if (yearsPracticeSelect.value === "") {

                formIsValid = false;

            }

        }


        // -------------------------------------------------
        // INVALID FORM
        // -------------------------------------------------

        if (!formIsValid) {

            demographicsError.style.display = "block";

            return;

        }


        // -------------------------------------------------
        // VALID FORM → INSTRUCTIONS
        // -------------------------------------------------

        demographicsError.style.display = "none";

        demographicsPage.classList.remove("active");

        instructionsPage.classList.add("active");

        window.scrollTo(0, 0);

    });


    // =====================================================
    // INSTRUCTIONS → QUESTION 1
    // =====================================================

    startSurveyButton.addEventListener("click", function () {

        instructionsPage.classList.remove("active");

        question1Page.classList.add("active");

        window.scrollTo(0, 0);

    });


});
