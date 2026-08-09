function showPage(pageId) {

const pages =
    document.querySelectorAll(".survey-page");

pages.forEach(function(page) {

    page.classList.remove("active");

});

const selectedPage =
    document.getElementById(pageId);

if (selectedPage) {

    selectedPage.classList.add("active");

}

window.scrollTo({
    top: 0,
    behavior: "smooth"
});

}

/* =========================================
WELCOME → CONSENT
========================================= */

function goToConsent() {

showPage("consent-page");

}

/* =========================================
CONSENT → WELCOME
========================================= */

function goToWelcome() {

showPage("intro-page");

}

/* =========================================
CONSENT → PARTICIPANT INFORMATION
========================================= */

function goToPersonalInfo() {

showPage("personal-page");

}

/* =========================================
ANONYMOUS PARTICIPATION
========================================= */

function toggleAnonymous(isAnonymous) {

const nameGroup =
    document.getElementById("nameGroup");

const displayNameGroup =
    document.getElementById("displayNameGroup");

const nicknameGroup =
    document.getElementById("nicknameGroup");


if (isAnonymous) {

    nameGroup.style.display = "none";

    displayNameGroup.style.display = "none";

    nicknameGroup.style.display = "none";

}

else {

    nameGroup.style.display = "block";

    displayNameGroup.style.display = "block";

    const displayPreference =
        document.getElementById(
            "demoDisplayName"
        ).value;

    if (displayPreference === "nickname") {

        nicknameGroup.style.display = "block";

    }

}

}

/* =========================================
DISPLAY PREFERENCE
========================================= */

document.addEventListener(
"DOMContentLoaded",
function() {

    const displayPreference =
        document.getElementById(
            "demoDisplayName"
        );

    if (displayPreference) {

        displayPreference.addEventListener(
            "change",
            function() {

                const nicknameGroup =
                    document.getElementById(
                        "nicknameGroup"
                    );

                if (
                    this.value === "nickname" &&
                    !document.getElementById(
                        "demoAnonymous"
                    ).checked
                ) {

                    nicknameGroup.style.display =
                        "block";

                }

                else {

                    nicknameGroup.style.display =
                        "none";

                }

            }
        );

    }


    /* =====================================
       OTHER INSTITUTION
       ===================================== */

    const institution =
        document.getElementById(
            "demoInstitution"
        );

    if (institution) {

        institution.addEventListener(
            "change",
            function() {

                const otherGroup =
                    document.getElementById(
                        "otherInstitutionGroup"
                    );

                if (this.value === "Other") {

                    otherGroup.style.display =
                        "block";

                }

                else {

                    otherGroup.style.display =
                        "none";

                }

            }
        );

    }

}

);

/* =========================================
PARTICIPANT INFORMATION → SURVEY
========================================= */

function submitDemographics() {

const anonymous =
    document.getElementById(
        "demoAnonymous"
    ).checked;


const name =
    document.getElementById(
        "demoName"
    ).value.trim();


const displayPreference =
    document.getElementById(
        "demoDisplayName"
    ).value;


const nickname =
    document.getElementById(
        "demoNickname"
    ).value.trim();


const institution =
    document.getElementById(
        "demoInstitution"
    ).value;


const otherInstitution =
    document.getElementById(
        "demoOtherInstitution"
    ).value.trim();


const years =
    document.getElementById(
        "demoYears"
    ).value;


const fellowship =
    document.getElementById(
        "demoFellowship"
    ).value;


const region =
    document.getElementById(
        "demoRegion"
    ).value;


/* =====================================
   BASIC VALIDATION
   ===================================== */

if (!anonymous && name === "") {

    alert(
        "Please enter your name or select anonymous participation."
    );

    return;

}


if (institution === "") {

    alert(
        "Please select your institution."
    );

    return;

}


if (
    institution === "Other" &&
    otherInstitution === ""
) {

    alert(
        "Please enter your institution name."
    );

    return;

}


if (displayPreference === "nickname" &&
    !anonymous &&
    nickname === "") {

    alert(
        "Please enter a nickname."
    );

    return;

}


/* =====================================
   STORE PARTICIPANT INFORMATION
   ===================================== */

window.participantInfo = {

    anonymous: anonymous,

    name: anonymous ? "" : name,

    displayPreference:
        anonymous
            ? "anonymous"
            : displayPreference,

    nickname:
        anonymous
            ? ""
            : nickname,

    institution:
        institution === "Other"
            ? otherInstitution
            : institution,

    yearsInPractice: years,

    fellowship: fellowship,

    region: region

};


/*
   TEMPORARY TEST

   This confirms that the information
   was successfully collected.
*/

console.log(
    "Participant information:",
    window.participantInfo
);


/*
   For now, go to the question page.
*/

showPage("question-page");

}
