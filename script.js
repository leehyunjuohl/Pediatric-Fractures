
/* =========================================================
   WRIST FRACTURE MORPHOLOGY STUDY
   CL-IOH SCORE 2026

   script.js

   This file controls the behavior of the survey.

   IMPORTANT:
   The element IDs in this file match the current
   index.html provided for this project.
   ========================================================= */


/* =========================================================
   1. SURVEY QUESTIONS
   ========================================================= */

const questions = [

    {
        id: 1,

        prompt:
            "How would you classify the fracture shown in this radiograph?",

        image:
            "images/question-1.jpg",

        alt:
            "Radiographic image of wrist fracture for Question 1",

        choices: [
            "Choice A",
            "Choice B",
            "Choice C",
            "Choice D"
        ]
    },


    {
        id: 2,

        prompt:
            "What fracture morphology best describes this image?",

        image:
            "images/question-2.jpg",

        alt:
            "Radiographic image of wrist fracture for Question 2",

        choices: [
            "Choice A",
            "Choice B",
            "Choice C",
            "Choice D",
            "Choice E"
        ]
    },


    {
        id: 3,

        prompt:
            "Which classification would you assign to this fracture?",

        image:
            "images/question-3.jpg",

        alt:
            "Radiographic image of wrist fracture for Question 3",

        choices: [
            "Choice A",
            "Choice B",
            "Choice C",
            "Choice D"
        ]
    },


    {
        id: 4,

        prompt:
            "Which treatment approach would you recommend for this fracture?",

        image:
            "images/question-4.jpg",

        alt:
            "Radiographic image of wrist fracture for Question 4",

        choices: [
            "Choice A",
            "Choice B",
            "Choice C",
            "Choice D"
        ]
    },


    {
        id: 5,

        prompt:
            "How would you describe the fracture morphology shown?",

        image:
            "images/question-5.jpg",

        alt:
            "Radiographic image of wrist fracture for Question 5",

        choices: [
            "Choice A",
            "Choice B",
            "Choice C",
            "Choice D",
            "Choice E"
        ]
    },


    {
        id: 6,

        prompt:
            "Which classification best represents this fracture?",

        image:
            "images/question-6.jpg",

        alt:
            "Radiographic image of wrist fracture for Question 6",

        choices: [
            "Choice A",
            "Choice B",
            "Choice C",
            "Choice D"
        ]
    },


    {
        id: 7,

        prompt:
            "What treatment method would you select for this fracture?",

        image:
            "images/question-7.jpg",

        alt:
            "Radiographic image of wrist fracture for Question 7",

        choices: [
            "Choice A",
            "Choice B",
            "Choice C",
            "Choice D",
            "Choice E"
        ]
    },


    {
        id: 8,

        prompt:
            "Which description most accurately characterizes this fracture?",

        image:
            "images/question-8.jpg",

        alt:
            "Radiographic image of wrist fracture for Question 8",

        choices: [
            "Choice A",
            "Choice B",
            "Choice C",
            "Choice D"
        ]
    },


    {
        id: 9,

        prompt:
            "How would you classify this wrist fracture?",

        image:
            "images/question-9.jpg",

        alt:
            "Radiographic image of wrist fracture for Question 9",

        choices: [
            "Choice A",
            "Choice B",
            "Choice C",
            "Choice D",
            "Choice E"
        ]
    },


    {
        id: 10,

        prompt:
            "Which treatment approach would you recommend for this fracture?",

        image:
            "images/question-10.jpg",

        alt:
            "Radiographic image of wrist fracture for Question 10",

        choices: [
            "Choice A",
            "Choice B",
            "Choice C",
            "Choice D"
        ]
    }

];


/* =========================================================
   2. SURVEY STATE
   ========================================================= */

let currentQuestion = 0;

let responses = new Array(
    questions.length
).fill(null);


/*
   Participant information.

   These fields correspond to the current
   Participant Information page.
*/

let participantInfo = {

    anonymous: false,

    name: "",

    role: "",

    yearsInPractice: "",

    institution: "",

    otherInstitution: "",

    fellowship: "",

    region: ""

};


/* =========================================================
   3. PAGE NAVIGATION
   ========================================================= */

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


/* =========================================================
   4. WELCOME → CONSENT
   ========================================================= */

function goToConsent() {

    showPage("consent-page");

    updateProgress(1);

}


/* =========================================================
   5. CONSENT → WELCOME
   ========================================================= */

function goToWelcome() {

    showPage("intro-page");

    updateProgress(0);

}


/* =========================================================
   6. CONSENT → PARTICIPANT INFORMATION
   ========================================================= */

function goToPersonalInfo() {

    showPage("personal-page");

    updateProgress(2);

}


/* =========================================================
   7. ANONYMOUS PARTICIPATION TOGGLE
   =========================================================

   Called by:

   onchange="toggleAnonymous(this.checked)"
   ========================================================= */

function toggleAnonymous(isAnonymous) {

    const nameGroup =
        document.getElementById("nameGroup");


    const nameInput =
        document.getElementById("demoName");


    if (isAnonymous) {

        /*
           Hide the name field.
        */

        if (nameGroup) {

            nameGroup.style.display = "none";

        }


        /*
           Clear the name.
        */

        if (nameInput) {

            nameInput.value = "";

        }

    }

    else {

        /*
           Show the name field again.
        */

        if (nameGroup) {

            nameGroup.style.display = "block";

        }

    }


    participantInfo.anonymous =
        isAnonymous;

}


/* =========================================================
   8. ROLE-DEPENDENT FIELDS
   =========================================================

   When Role = Attending:

   - Years in Practice appears
   - Fellowship Training appears

   Otherwise:

   - Both fields are hidden
   ========================================================= */

function toggleAttendingFields() {

    const roleSelect =
        document.getElementById("demoRole");


    if (!roleSelect) {

        return;

    }


    const role =
        roleSelect.value;


    const yearsinPracticeSelect =
        document.getElementById("demoyearsinPractice");


    const fellowshipSelect =
        document.getElementById("demoFellowship");


    /*
       Fellowship is contained in a .form-group.
       Find its parent form-group.

       And for YearsinPractice
    */

    let fellowshipGroup = null;


    if (fellowshipSelect) {

        fellowshipGroup =
            fellowshipSelect.closest(".form-group");

    }

    let yearsInPracticeGroup = null;


    if (yearsInPracticeSelect) {

        yearsInPracticeGroup =
            yearsInPracticeSelect.closest(".form-group");

    }


    if (role === "Attending") {

        /*
           Show Years in Practice.
        */

        if (yearsInPracticeGroup) {

            yearsInPracticeGroup.style.display =
                "block";

        }


        /*
           Show Fellowship Training.
        */

        if (fellowshipGroup) {

            fellowshipGroup.style.display =
                "block";

        }

    }

    else {

        /*
           Hide Years in Practice.
        */

        if (yearsInPracticeGroup) {

            yearsInPracticeGroup.style.display =
                "none";

        }


        /*
           Hide Fellowship Training.
        */

        if (fellowshipGroup) {

            fellowshipGroup.style.display =
                "none";

        }


        /*
           Clear values when not attending.
        */

        const attendingSelect =
            document.getElementById(
                "demoAttending"
            );


        if (yearsInPracticeSelect) {

            yearsInPracticeSelect.value = "";

        }


        if (fellowshipSelect) {

            fellowshipSelect.value = "";

        }

    }

}


/* =========================================================
   9. INSTITUTION TOGGLE
   =========================================================

   If Institution = Other,
   show the custom institution field.
   ========================================================= */

function toggleOtherInstitution() {

    const institutionSelect =
        document.getElementById(
            "demoInstitution"
        );


    const otherGroup =
        document.getElementById(
            "otherInstitutionGroup"
        );


    const otherInput =
        document.getElementById(
            "demoOtherInstitution"
        );


    if (!institutionSelect) {

        return;

    }


    if (
        institutionSelect.value ===
        "Other"
    ) {

        if (otherGroup) {

            otherGroup.style.display =
                "block";

        }

    }

    else {

        if (otherGroup) {

            otherGroup.style.display =
                "none";

        }


        if (otherInput) {

            otherInput.value = "";

        }

    }

}


/* =========================================================
   10. COLLECT PARTICIPANT INFORMATION
   ========================================================= */

function collectParticipantInfo() {

    const anonymousCheckbox =
        document.getElementById(
            "demoAnonymous"
        );


    const nameInput =
        document.getElementById(
            "demoName"
        );


    const roleSelect =
        document.getElementById(
            "demoRole"
        );


    const attendingSelect =
        document.getElementById(
            "demoAttending"
        );


    const institutionSelect =
        document.getElementById(
            "demoInstitution"
        );


    const otherInstitutionInput =
        document.getElementById(
            "demoOtherInstitution"
        );


    const fellowshipSelect =
        document.getElementById(
            "demoFellowship"
        );


    const regionSelect =
        document.getElementById(
            "demoRegion"
        );


    participantInfo = {

        anonymous:
            anonymousCheckbox
                ? anonymousCheckbox.checked
                : false,

        name:
            nameInput
                ? nameInput.value.trim()
                : "",

        role:
            roleSelect
                ? roleSelect.value
                : "",

        yearsInPractice:
            attendingSelect
                ? attendingSelect.value
                : "",

        institution:
            institutionSelect
                ? institutionSelect.value
                : "",

        otherInstitution:
            otherInstitutionInput
                ? otherInstitutionInput.value.trim()
                : "",

        fellowship:
            fellowshipSelect
                ? fellowshipSelect.value
                : "",

        region:
            regionSelect
                ? regionSelect.value
                : ""

    };

}


/* =========================================================
   11. VALIDATE PARTICIPANT INFORMATION
   ========================================================= */

function validateParticipantInfo() {

    collectParticipantInfo();


    /*
       Anonymous participants do not need
       to provide their name.
    */

    if (
        !participantInfo.anonymous &&
        participantInfo.name === ""
    ) {

        alert(
            "Please enter your name or select anonymous participation."
        );

        return false;

    }


    /*
       Role is required.
    */

    if (
        participantInfo.role === ""
    ) {

        alert(
            "Please select your role."
        );

        return false;

    }


    /*
       Attending-specific fields.
    */

    if (
        participantInfo.role ===
        "Attending"
    ) {

        if (
            participantInfo.yearsInPractice === ""
        ) {

            alert(
                "Please select your years in practice."
            );

            return false;

        }


        if (
            participantInfo.fellowship === ""
        ) {

            alert(
                "Please select your fellowship training."
            );

            return false;

        }

    }


    /*
       Institution is required.
    */

    if (
        participantInfo.institution === ""
    ) {

        alert(
            "Please select your institution."
        );

        return false;

    }


    /*
       If Other was selected,
       require the institution name.
    */

    if (
        participantInfo.institution ===
        "Other" &&
        participantInfo.otherInstitution === ""
    ) {

        alert(
            "Please enter your institution name."
        );

        return false;

    }


    /*
       Geographic region is required.
    */

    if (
        participantInfo.region === ""
    ) {

        alert(
            "Please select your geographic region."
        );

        return false;

    }


    return true;

}


/* =========================================================
   12. PARTICIPANT INFORMATION → FIRST QUESTION
   =========================================================

   Called by:

   onclick="submitDemographics()"
   ========================================================= */

function submitDemographics() {

    /*
       Validate participant information first.
    */

    if (
        !validateParticipantInfo()
    ) {

        return;

    }


    /*
       Start at Question 1.
    */

    currentQuestion = 0;


    /*
       Clear any previous responses
       if the participant is starting fresh.
    */

    responses =
        new Array(
            questions.length
        ).fill(null);


    showQuestion();


    showPage("question-page");


    updateProgress(3);

}


/* =========================================================
   13. BACKWARD-COMPATIBILITY FUNCTION
   =========================================================

   If an older version of index.html still calls
   startSurvey(), this will still work.
   ========================================================= */

function startSurvey() {

    submitDemographics();

}


/* =========================================================
   14. DISPLAY QUESTION
   ========================================================= */

function showQuestion() {

    const question =
        questions[currentQuestion];


    if (!question) {

        return;

    }


    /*
       Question number.
    */

    const questionNumber =
        document.getElementById(
            "question-number"
        );


    if (questionNumber) {

        questionNumber.textContent =
            `Question ${currentQuestion + 1} of ${questions.length}`;

    }


    /*
       Question prompt.
    */

    const questionPrompt =
        document.getElementById(
            "question-prompt"
        );


    if (questionPrompt) {

        questionPrompt.textContent =
            question.prompt;

    }


    /*
       Question image.
    */

    const image =
        document.getElementById(
            "question-image"
        );


    if (image) {

        image.src =
            question.image;

        image.alt =
            question.alt;

    }


    /*
       Answer choices.
    */

    const answerContainer =
        document.getElementById(
            "answer-choices"
        );


    if (!answerContainer) {

        return;

    }


    answerContainer.innerHTML = "";


    /*
       Create answer buttons.
    */

    question.choices.forEach(
        function(choice) {

            const choiceButton =
                document.createElement(
                    "button"
                );


            choiceButton.type =
                "button";


            choiceButton.className =
                "answer-choice";


            choiceButton.textContent =
                choice;


            choiceButton.dataset.answer =
                choice;


            choiceButton.addEventListener(
                "click",
                function() {

                    selectAnswer(
                        choice,
                        choiceButton
                    );

                }
            );


            /*
               Restore previously selected answer.
            */

            if (
                responses[currentQuestion] ===
                choice
            ) {

                choiceButton.classList.add(
                    "selected"
                );

            }


            answerContainer.appendChild(
                choiceButton
            );

        }
    );


    /*
       Update navigation buttons.
    */

    const questionButtons =
        document.querySelectorAll(
            ".question-actions .button"
        );


    if (
        questionButtons.length >= 2
    ) {

        const backButton =
            questionButtons[0];


        const nextButton =
            questionButtons[1];


        if (
            currentQuestion === 0
        ) {

            backButton.textContent =
                "Back to Participant Info";

        }

        else {

            backButton.textContent =
                "Back";

        }


        if (
            currentQuestion ===
            questions.length - 1
        ) {

            nextButton.textContent =
                "Review Responses";

        }

        else {

            nextButton.textContent =
                "Next";

        }

    }

}


/* =========================================================
   15. SELECT ANSWER
   ========================================================= */

function selectAnswer(
    answer,
    selectedButton
) {

    responses[currentQuestion] =
        answer;


    const buttons =
        document.querySelectorAll(
            ".answer-choice"
        );


    buttons.forEach(
        function(button) {

            button.classList.remove(
                "selected"
            );

        }
    );


    selectedButton.classList.add(
        "selected"
    );

}


/* =========================================================
   16. NEXT QUESTION
   ========================================================= */

function nextQuestion() {

    /*
       Require an answer.
    */

    if (
        responses[currentQuestion] ===
        null
    ) {

        alert(
            "Please select an answer before continuing."
        );

        return;

    }


    /*
       Move to next question.
    */

    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;


        showQuestion();


        updateProgress(
            3 + currentQuestion
        );


        return;

    }


    /*
       Last question → Summary.
    */

    showSummary();


    showPage(
        "summary-page"
    );


    updateProgress(
        questions.length + 3
    );

}


/* =========================================================
   17. PREVIOUS QUESTION
   ========================================================= */

function previousQuestion() {

    /*
       Question 1 → Participant Information.
    */

    if (
        currentQuestion === 0
    ) {

        showPage(
            "personal-page"
        );


        updateProgress(2);


        return;

    }


    /*
       Otherwise go back one question.
    */

    currentQuestion--;


    showQuestion();


    updateProgress(
        3 + currentQuestion
    );

}


/* =========================================================
   18. CREATE SUMMARY
   ========================================================= */

function showSummary() {

    const container =
        document.getElementById(
            "summary-container"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    /*
       Participant Information heading.
    */

    const participantHeading =
        document.createElement(
            "h3"
        );


    participantHeading.textContent =
        "Participant Information";


    container.appendChild(
        participantHeading
    );


    /*
       Participant information.
    */

    const participantList =
        document.createElement(
            "div"
        );


    participantList.className =
        "summary-participant";


    if (
        participantInfo.anonymous
    ) {

        participantList.innerHTML = `
            <p>
                <strong>Participation:</strong>
                Anonymous
            </p>

            <p>
                <strong>Role:</strong>
                ${escapeHTML(participantInfo.role)}
            </p>

            <p>
                <strong>Institution:</strong>
                ${escapeHTML(
                    participantInfo.institution === "Other"
                        ? participantInfo.otherInstitution
                        : participantInfo.institution
                )}
            </p>

            <p>
                <strong>Geographic Region:</strong>
                ${escapeHTML(participantInfo.region)}
            </p>
        `;

    }

    else {

        participantList.innerHTML = `

            <p>
                <strong>Name:</strong>
                ${escapeHTML(participantInfo.name)}
            </p>

            <p>
                <strong>Role:</strong>
                ${escapeHTML(participantInfo.role)}
            </p>

            ${
                participantInfo.role === "Attending"
                ? `
                    <p>
                        <strong>Years in Practice:</strong>
                        ${escapeHTML(
                            participantInfo.yearsInPractice
                        )}
                    </p>

                    <p>
                        <strong>Fellowship Training:</strong>
                        ${escapeHTML(
                            participantInfo.fellowship
                        )}
                    </p>
                `
                : ""
            }

            <p>
                <strong>Institution:</strong>
                ${escapeHTML(
                    participantInfo.institution === "Other"
                        ? participantInfo.otherInstitution
                        : participantInfo.institution
                )}
            </p>

            <p>
                <strong>Geographic Region:</strong>
                ${escapeHTML(participantInfo.region)}
            </p>

        `;

    }


    container.appendChild(
        participantList
    );


    /*
       Survey responses heading.
    */

    const responseHeading =
        document.createElement(
            "h3"
        );


    responseHeading.textContent =
        "Survey Responses";


    container.appendChild(
        responseHeading
    );


    /*
       Display each question and answer.
    */

    questions.forEach(
        function(question, index) {

            const responseCard =
                document.createElement(
                    "div"
                );


            responseCard.className =
                "summary-question";


            responseCard.innerHTML = `

                <div class="summary-question-number">
                    Question ${index + 1}
                </div>

                <div class="summary-question-prompt">
                    ${escapeHTML(question.prompt)}
                </div>

                <div class="summary-answer">
                    <strong>Your answer:</strong>
                    ${escapeHTML(
                        responses[index]
                    )}
                </div>

            `;


            container.appendChild(
                responseCard
            );

        }
    );

}


/* =========================================================
   19. RETURN TO LAST QUESTION
   ========================================================= */

function returnToLastQuestion() {

    currentQuestion =
        questions.length - 1;


    showQuestion();


    showPage(
        "question-page"
    );


    updateProgress(
        3 + currentQuestion
    );

}


/* =========================================================
   20. SUBMIT SURVEY
   ========================================================= */

function submitSurvey() {

    /*
       Make sure all questions are answered.
    */

    const unanswered =
        responses.some(
            function(response) {

                return response === null;

            }
        );


    if (unanswered) {

        alert(
            "Please answer all questions before submitting."
        );

        return;

    }


    /*
       Create complete survey data.
    */

    const surveyData = {

        timestamp:
            new Date().toISOString(),

        participant:
            participantInfo,

        responses:
            responses

    };


    /*
       Temporary console output.

       Later, this can be replaced with the
       Google Apps Script submission code.
    */

    console.log(
        "Survey submission:",
        surveyData
    );


    /*
       Move to Thank You page.
    */

    showPage(
        "thank-you-page"
    );


    updateProgress(
        questions.length + 4
    );

}


/* =========================================================
   21. UPDATE PROGRESS BAR
   ========================================================= */

function updateProgress(step) {

    /*
       Steps:

       0  = Welcome
       1  = Consent
       2  = Participant Information
       3  = Question 1
       ...
       12 = Question 10
       13 = Review
       14 = Complete

       Total = 14
    */

    const totalSteps =
        questions.length + 4;


    const percentage =
        (step / totalSteps) * 100;


    /*
       Progress bar.
    */

    const progressBar =
        document.getElementById(
            "progress-bar"
        );


    if (progressBar) {

        progressBar.style.width =
            `${percentage}%`;

    }


    /*
       Progress text.
    */

    const progressText =
        document.getElementById(
            "progress-text"
        );


    if (!progressText) {

        return;

    }


    if (step === 0) {

        progressText.textContent =
            "Introduction";

    }

    else if (step === 1) {

        progressText.textContent =
            "Research Participation";

    }

    else if (step === 2) {

        progressText.textContent =
            "Participant Information";

    }

    else if (
        step >= 3 &&
        step < questions.length + 3
    ) {

        progressText.textContent =
            `Question ${currentQuestion + 1} of ${questions.length}`;

    }

    else if (
        step === questions.length + 3
    ) {

        progressText.textContent =
            "Review Responses";

    }

    else {

        progressText.textContent =
            "Complete";

    }

}


/* =========================================================
   22. ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   23. INITIALIZE PAGE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /*
           Show Welcome page.
        */

        showPage(
            "intro-page"
        );


        /*
           Start progress at zero.
        */

        updateProgress(0);


        /*
           Make sure progress bar is empty.
        */

        const progressBar =
            document.getElementById(
                "progress-bar"
            );


        if (progressBar) {

            progressBar.style.width =
                "0%";

        }


        /*
           Set initial state of
           anonymous participation.
        */

        const anonymousCheckbox =
            document.getElementById(
                "demoAnonymous"
            );


        if (anonymousCheckbox) {

            toggleAnonymous(
                anonymousCheckbox.checked
            );

        }


        /*
           Set initial state of
           Attending-specific fields.
        */

        const roleSelect =
            document.getElementById(
                "demoRole"
            );


        if (roleSelect) {

            roleSelect.addEventListener(
                "change",
                toggleAttendingFields
            );


            toggleAttendingFields();

        }


        /*
           Set initial state of
           Other Institution field.
        */

        const institutionSelect =
            document.getElementById(
                "demoInstitution"
            );


        if (institutionSelect) {

            institutionSelect.addEventListener(
                "change",
                toggleOtherInstitution
            );


            toggleOtherInstitution();

        }

    }
);

