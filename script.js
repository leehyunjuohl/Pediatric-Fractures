// =====================================================
// SURVEY QUESTION BANK
// =====================================================

const questionBank = [

    // -------------------------------------------------
    // QUESTION 1 — grouped (1.1, 1.2, 1.3 on one screen)
    // -------------------------------------------------

    {
        id: "1",
        label: "Question 1",
        subQuestions: [

            {
                id: "1.1",
                label: "1.1",
                context: "Review the PA and lateral wrist X-rays of a 7-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Based on the imaging, how would you classify the distal radius fracture morphology?",
                image: "images/10M.png",
                choices: [
                    "Torus / Buckle fracture",
                    "Greenstick fracture",
                    "Non/minimally displaced Complete Fracture",
                    "Physeal Fracture (Salter-Harris)",
                    "No Acute Fracture Identified"
                ]
            },

            {
                id: "1.2",
                label: "1.2",
                context: "Review the PA and lateral wrist X-rays of a 7-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Based on the clinical history and imaging findings, which treatment options are acceptable for this fracture pattern?",
                image: "images/10M.png",
                choices: [
                    "Removable brace",
                    "Cast (no reduction)",
                    "Closed reduction and casting",
                    "Closed reduction in the OR and pinning",
                    "Open reduction and internal fixation"
                ]
            },

            {
                id: "1.3",
                label: "1.3",
                context: "Review the PA and lateral wrist X-rays of a 7-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID.",
                stem: "Review the 6-week follow-up wrist X-rays provided. The patient and parents are asking about returning to activities. What is your recommended plan?",
                image: "images/10M_6w.png",
                choices: [
                    "Continue current immobilization (cast/rigid brace) for another 3-4 weeks",
                    "Transition to removable splint for daily wear (restrict contact sports & high-risk play) for another 6 weeks",
                    "Can return to non-contact sports with a protective brace for 6 weeks",
                    "Full clearance: Can return to all activities and sports without limitations"
                ]
            }

        ]
    },

    // -------------------------------------------------
    // QUESTION 2 — single
    // -------------------------------------------------

    {
        id: "Q02",
        label: "Question 2",
        context: null,
        stem: "Review the PA and lateral wrist X-Rays of a 7-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID. Based on the imaging, how would you classify the distal radius fracture morphology?",
        image: "images/11F.png",
        choices: [
            "Torus / Buckle fracture",
            "Greenstick fracture",
            "Non/minimally displaced Complete Fracture",
            "Physeal Fracture (Salter-Harris)",
            "No Acute Fracture Identified"
        ]
    },

    // -------------------------------------------------
    // QUESTION 3 — single
    // -------------------------------------------------

    {
        id: "Q03",
        label: "Question 3",
        context: null,
        stem: "Review the PA and lateral wrist X-Rays of a 7-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID. Based on the imaging, how would you classify the distal radius fracture morphology?",
        image: "images/11M.png",
        choices: [
            "Torus / Buckle fracture",
            "Greenstick fracture",
            "Non/minimally displaced Complete Fracture",
            "Physeal Fracture (Salter-Harris)",
            "No Acute Fracture Identified"
        ]
    },

    // -------------------------------------------------
    // QUESTION 4 — single
    // -------------------------------------------------

    {
        id: "Q04",
        label: "Question 4",
        context: null,
        stem: "Review the PA and lateral wrist X-Rays of a 7-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID. Based on the imaging, how would you classify the distal radius fracture morphology?",
        image: "images/12M (2).png",
        choices: [
            "Torus / Buckle fracture",
            "Greenstick fracture",
            "Non/minimally displaced Complete Fracture",
            "Physeal Fracture (Salter-Harris)",
            "No Acute Fracture Identified"
        ]
    },

    // -------------------------------------------------
    // QUESTION 5 — single
    // -------------------------------------------------

    {
        id: "Q05",
        label: "Question 5",
        context: null,
        stem: "Review the PA and lateral wrist X-Rays of a 7-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID. Based on the imaging, how would you classify the distal radius fracture morphology?",
        image: "images/12M.png",
        choices: [
            "Torus / Buckle fracture",
            "Greenstick fracture",
            "Non/minimally displaced Complete Fracture",
            "Physeal Fracture (Salter-Harris)",
            "No Acute Fracture Identified"
        ]
    },

    // -------------------------------------------------
    // QUESTION 6 — single
    // -------------------------------------------------

    {
        id: "Q06",
        label: "Question 6",
        context: null,
        stem: "Review the PA and lateral wrist X-Rays of a 7-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID. Based on the imaging, how would you classify the distal radius fracture morphology?",
        image: "images/15M (2).png",
        choices: [
            "Torus / Buckle fracture",
            "Greenstick fracture",
            "Non/minimally displaced Complete Fracture",
            "Physeal Fracture (Salter-Harris)",
            "No Acute Fracture Identified"
        ]
    },

    // -------------------------------------------------
    // QUESTION 7 — single
    // -------------------------------------------------

    {
        id: "Q07",
        label: "Question 7",
        context: null,
        stem: "Review the PA and lateral wrist X-Rays of a 7-year old male who fell at the playground, has pain but mild swelling, no skin issues, NVID. Based on the imaging, how would you classify the distal radius fracture morphology?",
        image: "images/15M.png",
        choices: [
            "Torus / Buckle fracture",
            "Greenstick fracture",
            "Non/minimally displaced Complete Fracture",
            "Physeal Fracture (Salter-Harris)",
            "No Acute Fracture Identified"
        ]
    },

    // -------------------------------------------------
    // QUESTION 8 — single (placeholder)
    // -------------------------------------------------

    {
        id: "Q08",
        label: "Question 8",
        context: null,
        stem: "You have a patient that has the following XR.",
        image: "images/question1.jpg",
        choices: [
            "Answer Choice 1",
            "Answer Choice 2",
            "Answer Choice 3",
            "Answer Choice 4"
        ]
    },

    // -------------------------------------------------
    // QUESTION 9 — single (placeholder)
    // -------------------------------------------------

    {
        id: "Q09",
        label: "Question 9",
        context: null,
        stem: "You have a patient that has the following XR.",
        image: "images/question2.jpg",
        choices: [
            "Answer Choice 1",
            "Answer Choice 2",
            "Answer Choice 3",
            "Answer Choice 4"
        ]
    },

    // -------------------------------------------------
    // QUESTION 10 — single (placeholder)
    // -------------------------------------------------

    {
        id: "Q10",
        label: "Question 10",
        context: null,
        stem: "You have a patient that has the following XR.",
        image: "images/question3.jpg",
        choices: [
            "Answer Choice 1",
            "Answer Choice 2",
            "Answer Choice 3",
            "Answer Choice 4"
        ]
    },

    // -------------------------------------------------
    // QUESTION 11 — single (placeholder)
    // -------------------------------------------------

    {
        id: "Q11",
        label: "Question 11",
        context: null,
        stem: "You have a patient that has the following XR.",
        image: "images/question4.jpg",
        choices: [
            "Answer Choice 1",
            "Answer Choice 2",
            "Answer Choice 3",
            "Answer Choice 4"
        ]
    },

    // -------------------------------------------------
    // QUESTION 12 — single (placeholder)
    // -------------------------------------------------

    {
        id: "Q12",
        label: "Question 12",
        context: null,
        stem: "You have a patient that has the following XR.",
        image: "images/question5.jpg",
        choices: [
            "Answer Choice 1",
            "Answer Choice 2",
            "Answer Choice 3",
            "Answer Choice 4"
        ]
    },

    // -------------------------------------------------
    // QUESTION 13 — single (placeholder)
    // -------------------------------------------------

    {
        id: "Q13",
        label: "Question 13",
        context: null,
        stem: "You have a patient that has the following XR.",
        image: "images/question6.jpg",
        choices: [
            "Answer Choice 1",
            "Answer Choice 2",
            "Answer Choice 3",
            "Answer Choice 4"
        ]
    },

    // -------------------------------------------------
    // QUESTION 14 — single (placeholder)
    // -------------------------------------------------

    {
        id: "Q14",
        label: "Question 14",
        context: null,
        stem: "You have a patient that has the following XR.",
        image: "images/question7.jpg",
        choices: [
            "Answer Choice 1",
            "Answer Choice 2",
            "Answer Choice 3",
            "Answer Choice 4"
        ]
    },

    // -------------------------------------------------
    // QUESTION 15 — single (placeholder)
    // -------------------------------------------------

    {
        id: "Q15",
        label: "Question 15",
        context: null,
        stem: "You have a patient that has the following XR.",
        image: "images/question8.jpg",
        choices: [
            "Answer Choice 1",
            "Answer Choice 2",
            "Answer Choice 3",
            "Answer Choice 4"
        ]
    },

    // -------------------------------------------------
    // QUESTION 16 — single (placeholder)
    // -------------------------------------------------

    {
        id: "Q16",
        label: "Question 16",
        context: null,
        stem: "You have a patient that has the following XR.",
        image: "images/question9.jpg",
        choices: [
            "Answer Choice 1",
            "Answer Choice 2",
            "Answer Choice 3",
            "Answer Choice 4"
        ]
    },

    // -------------------------------------------------
    // QUESTION 17 — single (placeholder)
    // -------------------------------------------------

    {
        id: "Q17",
        label: "Question 17",
        context: null,
        stem: "You have a patient that has the following XR.",
        image: "images/question10.jpg",
        choices: [
            "Answer Choice 1",
            "Answer Choice 2",
            "Answer Choice 3",
            "Answer Choice 4"
        ]
    }

];


// =====================================================
// GLOBAL SURVEY VARIABLES
// =====================================================

const TOTAL_QUESTIONS = questionBank.length;

let currentQuestionIndex = 0;
let selectedAnswers = {};
let questionStartTime = null;
let surveyResponses = [];


// =====================================================
// WAIT FOR PAGE TO LOAD
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    // =================================================
    // PAGES
    // =================================================

    const introductionPage =
        document.getElementById("introduction-page");
    const consentPage =
        document.getElementById("consent-page");
    const demographicsPage =
        document.getElementById("demographics-page");
    const surveyQuestionPage =
        document.getElementById("survey-question-page");

    // =================================================
    // NAVIGATION BUTTONS
    // =================================================

    const beginSurveyButton =
        document.getElementById("begin-survey-button");
    const consentNextButton =
        document.getElementById("consent-next-button");
    const demographicsNextButton =
        document.getElementById("demographics-next-button");

    // =================================================
    // INTRODUCTION → CONSENT
    // =================================================

    beginSurveyButton.addEventListener("click", function () {
        introductionPage.classList.remove("active");
        consentPage.classList.add("active");
        window.scrollTo(0, 0);
    });

    // =================================================
    // CONSENT → PERSONAL INFORMATION
    // =================================================

    consentNextButton.addEventListener("click", function () {
        consentPage.classList.remove("active");
        demographicsPage.classList.add("active");
        window.scrollTo(0, 0);
    });

    // =================================================
    // PERSONAL INFORMATION ELEMENTS
    // =================================================

    const anonymousCheckbox =
        document.getElementById("anonymous-checkbox");
    const demographicForm =
        document.getElementById("demographic-form");
    const anonymousMessage =
        document.getElementById("anonymous-message");
    const participantName =
        document.getElementById("participant-name");
    const participantEmail =
        document.getElementById("participant-email");
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
    const yearsExperienceSelect =
        document.getElementById("years-experience");
    const paNpFields =
        document.getElementById("pa-np-fields");
    const paNpYearsExperience =
        document.getElementById("pa-np-years-experience");
    const medicalStudentFields =
        document.getElementById("medical-student-fields");
    const medicalStudentYear =
        document.getElementById("medical-student-year");
    const residentFields =
        document.getElementById("resident-fields");
    const residentYear =
        document.getElementById("resident-year");
    const demographicsError =
        document.getElementById("demographics-error");

    // =================================================
    // ANONYMOUS PARTICIPATION
    // =================================================

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

    // =================================================
    // INSTITUTION → OTHER FIELD
    // =================================================

    institutionSelect.addEventListener("change", function () {
        if (institutionSelect.value === "Other") {
            otherInstitutionGroup.style.display = "block";
        } else {
            otherInstitutionGroup.style.display = "none";
            otherInstitution.value = "";
        }
    });

    // =================================================
    // HELPER: HIDE CONDITIONAL FIELDS
    // =================================================

    function hideConditionalFields() {
        attendingFields.style.display = "none";
        paNpFields.style.display = "none";
        medicalStudentFields.style.display = "none";
        residentFields.style.display = "none";
        yearsExperienceSelect.value = "";
        paNpYearsExperience.value = "";
        medicalStudentYear.value = "";
        residentYear.value = "";
    }

    // =================================================
    // ROLE → CONDITIONAL FIELDS
    // =================================================

    roleSelect.addEventListener("change", function () {
        hideConditionalFields();
        if (roleSelect.value === "Attending")
            attendingFields.style.display = "block";
        if (roleSelect.value === "Physician Assistant" ||
            roleSelect.value === "Nurse Practitioner")
            paNpFields.style.display = "block";
        if (roleSelect.value === "Medical Student")
            medicalStudentFields.style.display = "block";
        if (roleSelect.value === "Resident")
            residentFields.style.display = "block";
    });

    // =================================================
    // PERSONAL INFORMATION → START SURVEY
    // =================================================

    demographicsNextButton.addEventListener("click", function () {

        if (anonymousCheckbox.checked) {
            startSurvey();
            return;
        }

        let formIsValid = true;

        if (participantName.value.trim() === "")    formIsValid = false;
        if (participantEmail.value.trim() === "")   formIsValid = false;
        if (institutionSelect.value === "")         formIsValid = false;
        if (institutionSelect.value === "Other" &&
            otherInstitution.value.trim() === "")   formIsValid = false;
        if (roleSelect.value === "")                formIsValid = false;
        if (roleSelect.value === "Attending" &&
            yearsExperienceSelect.value === "")     formIsValid = false;
        if ((roleSelect.value === "Physician Assistant" ||
             roleSelect.value === "Nurse Practitioner") &&
            paNpYearsExperience.value === "")       formIsValid = false;
        if (roleSelect.value === "Medical Student" &&
            medicalStudentYear.value === "")        formIsValid = false;
        if (roleSelect.value === "Resident" &&
            residentYear.value === "")              formIsValid = false;

        if (!formIsValid) {
            demographicsError.style.display = "block";
            return;
        }

        demographicsError.style.display = "none";
        startSurvey();

    });

    // =================================================
    // START SURVEY
    // =================================================

    function startSurvey() {
        currentQuestionIndex = 0;
        selectedAnswers = {};
        surveyResponses = [];

        demographicsPage.classList.remove("active");
        surveyQuestionPage.classList.add("active");

        displayQuestion();
        window.scrollTo(0, 0);
    }

});


// =====================================================
// DISPLAY QUESTION
// =====================================================

function displayQuestion() {

    const question = questionBank[currentQuestionIndex];
    const isGrouped = !!question.subQuestions;
    const container =
        document.getElementById("survey-question-container");

    container.innerHTML = "";

    // -------------------------------------------------
    // QUESTION TITLE
    // -------------------------------------------------

    const title = document.createElement("h2");
    title.textContent = question.label;
    container.appendChild(title);

    // -------------------------------------------------
    // RENDER SUB-QUESTIONS OR SINGLE QUESTION
    // -------------------------------------------------

    if (isGrouped) {
        question.subQuestions.forEach(function (sub) {
            container.appendChild(buildQuestionBlock(sub, true));
        });
    } else {
        container.appendChild(buildQuestionBlock(question, false));
    }

    // -------------------------------------------------
    // NEXT BUTTON
    // -------------------------------------------------

    const btnWrapper = document.createElement("div");
    btnWrapper.className = "survey-next-button-container";

    const nextBtn = document.createElement("button");
    nextBtn.id = "next-question-button";
    nextBtn.className = "primary-button";
    nextBtn.type = "button";
    nextBtn.textContent =
        currentQuestionIndex === TOTAL_QUESTIONS - 1
            ? "Submit Survey"
            : "Next";

    nextBtn.addEventListener("click", function () {

        // Validate all answers are selected
        if (isGrouped) {
            const unanswered = question.subQuestions.some(
                function (sub) {
                    return selectedAnswers[sub.id] === undefined;
                }
            );
            if (unanswered) {
                alert("Please answer all parts before continuing.");
                return;
            }
        } else {
            if (selectedAnswers[question.id] === undefined) {
                alert("Please select an answer before continuing.");
                return;
            }
        }

        recordCurrentResponse();

        if (currentQuestionIndex === TOTAL_QUESTIONS - 1) {
            finishSurvey();
            return;
        }

        currentQuestionIndex++;
        selectedAnswers = {};
        displayQuestion();
        window.scrollTo(0, 0);

    });

    btnWrapper.appendChild(nextBtn);
    container.appendChild(btnWrapper);

    // -------------------------------------------------
    // PROGRESS BAR
    // -------------------------------------------------

    const progress = Math.round(
        ((currentQuestionIndex + 1) / TOTAL_QUESTIONS) * 100
    );

    const progressContainer = document.createElement("div");
    progressContainer.className = "survey-progress-container";
    progressContainer.innerHTML = `
        <div class="progress-bar-wrapper">
            <div class="survey-progress-bar"
                 style="width: ${progress}%">
            </div>
        </div>
        <span class="survey-progress-text">
            ${progress}%
        </span>
    `;
    container.appendChild(progressContainer);

    questionStartTime = performance.now();

}


// =====================================================
// BUILD A QUESTION BLOCK
// =====================================================

function buildQuestionBlock(q, showSubLabel) {

    const block = document.createElement("div");
    block.className = "sub-question-block";

    // Sub-label (e.g. "1.1") for grouped questions
    if (showSubLabel) {
        const subLabel = document.createElement("h3");
        subLabel.className = "sub-question-label";
        subLabel.textContent = q.label;
        block.appendChild(subLabel);
    }

    // Context
    if (q.context) {
        const context = document.createElement("p");
        context.className = "question-context";
        context.textContent = q.context;
        block.appendChild(context);
    }

    // Stem
    const stem = document.createElement("p");
    stem.className = "question-stem";
    stem.textContent = q.stem;
    block.appendChild(stem);

    // Image
    if (q.image) {
        const imgContainer = document.createElement("div");
        imgContainer.className = "question-image-container";
        const img = document.createElement("img");
        img.src = q.image;
        img.alt = "Radiographic image for survey question";
        imgContainer.appendChild(img);
        block.appendChild(imgContainer);
    }

    // Answer choices
    const answerGrid = document.createElement("div");
    answerGrid.className = "answer-grid";

    q.choices.forEach(function (choiceText, index) {

        const btn = document.createElement("button");
        btn.className = "answer-choice";
        btn.type = "button";
        btn.textContent = choiceText;

        btn.addEventListener("click", function () {
            answerGrid.querySelectorAll(".answer-choice")
                .forEach(function (b) {
                    b.classList.remove("selected");
                });
            btn.classList.add("selected");
            selectedAnswers[q.id] = index;
        });

        answerGrid.appendChild(btn);

    });

    block.appendChild(answerGrid);

    return block;

}


// =====================================================
// RECORD RESPONSE
// =====================================================

function recordCurrentResponse() {

    const question = questionBank[currentQuestionIndex];
    const isGrouped = !!question.subQuestions;
    const timeOnQuestion =
        (performance.now() - questionStartTime) / 1000;

    if (isGrouped) {

        question.subQuestions.forEach(function (sub) {
            const answerIndex = selectedAnswers[sub.id];
            surveyResponses.push({
                questionId:           sub.id,
                questionLabel:        sub.label,
                surveyQuestionNumber: currentQuestionIndex + 1,
                selectedAnswer:       sub.choices[answerIndex],
                timeSeconds:          Number(timeOnQuestion.toFixed(2))
            });
        });

    } else {

        const answerIndex = selectedAnswers[question.id];
        surveyResponses.push({
            questionId:           question.id,
            questionLabel:        question.label,
            surveyQuestionNumber: currentQuestionIndex + 1,
            selectedAnswer:       question.choices[answerIndex],
            timeSeconds:          Number(timeOnQuestion.toFixed(2))
        });

    }

    console.log("Recorded responses so far:", surveyResponses);

}


// =====================================================
// FINISH SURVEY
// =====================================================

function finishSurvey() {

    console.log("Complete survey data:", surveyResponses);

    document.getElementById("survey-question-page")
        .classList.remove("active");

    document.getElementById("completion-page")
        .classList.add("active");

    window.scrollTo(0, 0);

}
