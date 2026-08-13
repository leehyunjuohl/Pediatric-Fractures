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


    // =====================================================
    // FIND THE NAVIGATION BUTTONS
    // =====================================================

    const beginSurveyButton =
        document.getElementById("begin-survey-button");

    const consentNextButton =
        document.getElementById("consent-next-button");

    const demographicsNextButton =
        document.getElementById("demographics-next-button");


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

            // Hide demographic questions
            demographicForm.style.display = "none";

            // Show anonymous message
            anonymousMessage.style.display = "block";

            // Hide any previous error
            demographicsError.style.display = "none";

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

            // Clear attending-specific selections
            fellowshipSelect.value = "";
            yearsPracticeSelect.value = "";

        }

    });


    // =====================================================
    // PERSONAL INFORMATION → INSTRUCTIONS
    // =====================================================

    demographicsNextButton.addEventListener("click", function () {


        // -------------------------------------------------
        // OPTION 1: ANONYMOUS PARTICIPANT
        // -------------------------------------------------

        if (anonymousCheckbox.checked) {

            demographicsPage.classList.remove("active");

            instructionsPage.classList.add("active");

            demographicsError.style.display = "none";

            window.scrollTo(0, 0);

            return;
        }


        // -------------------------------------------------
        // OPTION 2: NON-ANONYMOUS PARTICIPANT
        // -------------------------------------------------

        let formIsValid = true;


        // -------------------------------------------------
        // NAME
        // -------------------------------------------------

        if (participantName.value.trim() === "") {

            formIsValid = false;

        }


        // -------------------------------------------------
        // INSTITUTION
        // -------------------------------------------------

        if (institutionSelect.value === "") {

            formIsValid = false;

        }


        // -------------------------------------------------
        // OTHER INSTITUTION
        // -------------------------------------------------

        if (
            institutionSelect.value === "Other" &&
            otherInstitution.value.trim() === ""
        ) {

            formIsValid = false;

        }


        // -------------------------------------------------
        // ROLE
        // -------------------------------------------------

        if (roleSelect.value === "") {

            formIsValid = false;

        }


        // -------------------------------------------------
        // ATTENDING-SPECIFIC REQUIREMENTS
        // -------------------------------------------------

        if (roleSelect.value === "Attending") {

            // Fellowship
            if (fellowshipSelect.value === "") {

                formIsValid = false;

            }

            // Years of Practice
            if (yearsPracticeSelect.value === "") {

                formIsValid = false;

            }

        }


        // -------------------------------------------------
        // IF FORM IS NOT COMPLETE
        // -------------------------------------------------

        if (!formIsValid) {

            demographicsError.style.display = "block";

            return;

        }


        // -------------------------------------------------
        // FORM IS COMPLETE
        // -------------------------------------------------

        demographicsError.style.display = "none";

        demographicsPage.classList.remove("active");

        instructionsPage.classList.add("active");

        window.scrollTo(0, 0);

    });


});
