// =====================================================
// SURVEY QUESTION BANK
// =====================================================

const questionBank = [

    {
        id: "Q01",
        stem: "You have a patient that has the following XR.",
        image: "images/question1.jpg",
        choices: [
            "Answer Choice 1",
            "Answer Choice 2",
            "Answer Choice 3",
            "Answer Choice 4"
        ],
        correctAnswer: 1
    },

    {
        id: "Q02",
        stem: "You have a patient that has the following XR.",
        image: "images/question2.jpg",
        choices: [
            "Answer Choice 1",
            "Answer Choice 2",
            "Answer Choice 3",
            "Answer Choice 4"
        ],
        correctAnswer: 2
    },

    {
        id: "Q03",
        stem: "You have a patient that has the following XR.",
        image: "images/question3.jpg",
        choices: [
            "Answer Choice 1",
            "Answer Choice 2",
            "Answer Choice 3",
            "Answer Choice 4"
        ],
        correctAnswer: 0
    },

    {
        id: "Q04",
        stem: "You have a patient that has the following XR.",
        image: "images/question4.jpg",
        choices: [
            "Answer Choice 1",
            "Answer Choice 2",
            "Answer Choice 3",
            "Answer Choice 4"
        ],
        correctAnswer: 3
    },

    {
        id: "Q05",
        stem: "You have a patient that has the following XR.",
        image: "images/question5.jpg",
        choices: [
            "Answer Choice 1",
            "Answer Choice 2",
            "Answer Choice 3",
            "Answer Choice 4"
        ],
        correctAnswer: 1
    },

    {
        id: "Q06",
        stem: "You have a patient that has the following XR.",
        image: "images/question6.jpg",
        choices: [
            "Answer Choice 1",
            "Answer Choice 2",
            "Answer Choice 3",
            "Answer Choice 4"
        ],
        correctAnswer: 2
    },

    {
        id: "Q07",
        stem: "You have a patient that has the following XR.",
        image: "images/question7.jpg",
        choices: [
            "Answer Choice 1",
            "Answer Choice 2",
            "Answer Choice 3",
            "Answer Choice 4"
        ],
        correctAnswer: 0
    },

    {
        id: "Q08",
        stem: "You have a patient that has the following XR.",
        image: "images/question8.jpg",
        choices: [
            "Answer Choice 1",
            "Answer Choice 2",
            "Answer Choice 3",
            "Answer Choice 4"
        ],
        correctAnswer: 3
    },

    {
        id: "Q09",
        stem: "You have a patient that has the following XR.",
        image: "images/question9.jpg",
        choices: [
            "Answer Choice 1",
            "Answer Choice 2",
            "Answer Choice 3",
            "Answer Choice 4"
        ],
        correctAnswer: 1
    },

    {
        id: "Q10",
        stem: "You have a patient that has the following XR.",
        image: "images/question10.jpg",
        choices: [
            "Answer Choice 1",
            "Answer Choice 2",
            "Answer Choice 3",
            "Answer Choice 4"
        ],
        correctAnswer: 2
    }

];


// =====================================================
// GLOBAL SURVEY VARIABLES
// =====================================================

const TOTAL_QUESTIONS = questionBank.length;

let randomizedQuestions = [];
let currentQuestionIndex = 0;
let selectedAnswer = null;
let questionStartTime = null;
let surveyResponses = [];


// =====================================================
// SHUFFLE FUNCTION
// =====================================================

function shuffleArray(array) {

    const shuffled = [...array];

    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];

    }

    return shuffled;

}


// =====================================================
// WAIT FOR PAGE TO LOAD
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {


        // =================================================
        // PAGES
        // =================================================

        const introductionPage =
            document.getElementById(
                "introduction-page"
            );

        const consentPage =
            document.getElementById(
                "consent-page"
            );

        const demographicsPage =
            document.getElementById(
                "demographics-page"
            );

        const surveyQuestionPage =
            document.getElementById(
                "survey-question-page"
            );


        // =================================================
        // NAVIGATION BUTTONS
        // =================================================

        const beginSurveyButton =
            document.getElementById(
                "begin-survey-button"
            );

        const consentNextButton =
            document.getElementById(
                "consent-next-button"
            );

        const demographicsNextButton =
            document.getElementById(
                "demographics-next-button"
            );

        const nextQuestionButton =
            document.getElementById(
                "next-question-button"
            );


        // =================================================
        // INTRODUCTION → CONSENT
        // =================================================

        beginSurveyButton.addEventListener(
            "click",
            function () {

                introductionPage.classList.remove("active");
                consentPage.classList.add("active");

                window.scrollTo(0, 0);

            }
        );


        // =================================================
        // CONSENT → PERSONAL INFORMATION
        // =================================================

        consentNextButton.addEventListener(
            "click",
            function () {

                consentPage.classList.remove("active");
                demographicsPage.classList.add("active");

                window.scrollTo(0, 0);

            }
        );


        // =================================================
        // PERSONAL INFORMATION ELEMENTS
        // =================================================

        const anonymousCheckbox =
            document.getElementById(
                "anonymous-checkbox"
            );

        const demographicForm =
            document.getElementById(
                "demographic-form"
            );

        const anonymousMessage =
            document.getElementById(
                "anonymous-message"
            );

        const participantName =
            document.getElementById(
                "participant-name"
            );

        const participantEmail =
            document.getElementById(
                "participant-email"
            );

        const institutionSelect =
            document.getElementById(
                "institution"
            );

        const otherInstitutionGroup =
            document.getElementById(
                "other-institution-group"
            );

        const otherInstitution =
            document.getElementById(
                "other-institution"
            );

        const roleSelect =
            document.getElementById(
                "role"
            );

        const attendingFields =
            document.getElementById(
                "attending-fields"
            );

        const yearsExperienceSelect =
            document.getElementById(
                "years-experience"
            );

        const paNpFields =
            document.getElementById(
                "pa-np-fields"
            );

        const paNpYearsExperience =
            document.getElementById(
                "pa-np-years-experience"
            );

        const medicalStudentFields =
            document.getElementById(
                "medical-student-fields"
            );

        const medicalStudentYear =
            document.getElementById(
                "medical-student-year"
            );

        const residentFields =
            document.getElementById(
                "resident-fields"
            );

        const residentYear =
            document.getElementById(
                "resident-year"
            );

        const demographicsError =
            document.getElementById(
                "demographics-error"
            );


        // =================================================
        // ANONYMOUS PARTICIPATION
        // =================================================

        anonymousCheckbox.addEventListener(
            "change",
            function () {

                if (anonymousCheckbox.checked) {

                    demographicForm.style.display = "none";
                    anonymousMessage.style.display = "block";
                    demographicsError.style.display = "none";

                } else {

                    demographicForm.style.display = "block";
                    anonymousMessage.style.display = "none";

                }

            }
        );


        // =================================================
        // INSTITUTION → OTHER FIELD
        // =================================================

        institutionSelect.addEventListener(
            "change",
            function () {

                if (institutionSelect.value === "Other") {

                    otherInstitutionGroup.style.display =
                        "block";

                } else {

                    otherInstitutionGroup.style.display =
                        "none";

                    otherInstitution.value = "";

                }

            }
        );


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

        roleSelect.addEventListener(
            "change",
            function () {

                hideConditionalFields();


                if (
                    roleSelect.value === "Attending"
                ) {

                    attendingFields.style.display =
                        "block";

                }


                if (
                    roleSelect.value ===
                        "Physician Assistant" ||
                    roleSelect.value ===
                        "Nurse Practitioner"
                ) {

                    paNpFields.style.display =
                        "block";

                }


                if (
                    roleSelect.value ===
                    "Medical Student"
                ) {

                    medicalStudentFields.style.display =
                        "block";

                }


                if (
                    roleSelect.value === "Resident"
                ) {

                    residentFields.style.display =
                        "block";

                }

            }
        );


        // =================================================
        // PERSONAL INFORMATION → START SURVEY
        // =================================================

        demographicsNextButton.addEventListener(
            "click",
            function () {


                // ---------------------------------------------
                // ANONYMOUS PARTICIPANT
                // ---------------------------------------------

                if (anonymousCheckbox.checked) {

                    startSurveyFromPersonalInfo();

                    return;

                }


                let formIsValid = true;


                // ---------------------------------------------
                // REQUIRED: NAME
                // ---------------------------------------------

                if (
                    participantName.value.trim() === ""
                ) {

                    formIsValid = false;

                }


                // ---------------------------------------------
                // REQUIRED: EMAIL
                // ---------------------------------------------

                if (
                    participantEmail.value.trim() === ""
                ) {

                    formIsValid = false;

                }


                // ---------------------------------------------
                // REQUIRED: INSTITUTION
                // ---------------------------------------------

                if (
                    institutionSelect.value === ""
                ) {

                    formIsValid = false;

                }


                // ---------------------------------------------
                // REQUIRED: OTHER INSTITUTION
                // ---------------------------------------------

                if (
                    institutionSelect.value === "Other" &&
                    otherInstitution.value.trim() === ""
                ) {

                    formIsValid = false;

                }


                // ---------------------------------------------
                // REQUIRED: ROLE
                // ---------------------------------------------

                if (
                    roleSelect.value === ""
                ) {

                    formIsValid = false;

                }


                // ---------------------------------------------
                // ATTENDING
                // Fellowship is optional
                // Years of Experience is required
                // ---------------------------------------------

                if (
                    roleSelect.value === "Attending" &&
                    yearsExperienceSelect.value === ""
                ) {

                    formIsValid = false;

                }


                // ---------------------------------------------
                // PA / NP
                // ---------------------------------------------

                if (
                    (
                        roleSelect.value ===
                            "Physician Assistant" ||
                        roleSelect.value ===
                            "Nurse Practitioner"
                    ) &&
                    paNpYearsExperience.value === ""
                ) {

                    formIsValid = false;

                }


                // ---------------------------------------------
                // MEDICAL STUDENT
                // ---------------------------------------------

                if (
                    roleSelect.value ===
                        "Medical Student" &&
                    medicalStudentYear.value === ""
                ) {

                    formIsValid = false;

                }


                // ---------------------------------------------
                // RESIDENT
                // ---------------------------------------------

                if (
                    roleSelect.value === "Resident" &&
                    residentYear.value === ""
                ) {

                    formIsValid = false;

                }


                // ---------------------------------------------
                // SHOW ERROR
                // ---------------------------------------------

                if (!formIsValid) {

                    demographicsError.style.display =
                        "block";

                    return;

                }


                demographicsError.style.display =
                    "none";


                startSurveyFromPersonalInfo();

            }
        );


        // =================================================
        // START SURVEY DIRECTLY FROM PERSONAL INFORMATION
        // =================================================

        function startSurveyFromPersonalInfo() {

            // Randomize questions
            randomizedQuestions =
                shuffleArray(questionBank);


            // Reset survey
            currentQuestionIndex = 0;
            selectedAnswer = null;
            surveyResponses = [];


            // Change pages
            demographicsPage.classList.remove("active");

            surveyQuestionPage.classList.add("active");


            // Display Question 1
            displayQuestion();

            window.scrollTo(0, 0);

        }


        // =================================================
        // ANSWER CHOICES
        // =================================================

        const answerButtons =
            document.querySelectorAll(
                ".answer-choice"
            );


        answerButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        answerButtons.forEach(
                            function (otherButton) {

                                otherButton
                                    .classList
                                    .remove("selected");

                            }
                        );


                        button.classList.add(
                            "selected"
                        );


                        selectedAnswer =
                            Number(
                                button.dataset.answer
                            );

                    }
                );

            }
        );


        // =================================================
        // NEXT QUESTION
        // =================================================

        nextQuestionButton.addEventListener(
            "click",
            function () {

                if (selectedAnswer === null) {

                    alert(
                        "Please select an answer before continuing."
                    );

                    return;

                }


                // Record answer
                recordCurrentResponse();


                // Last question
                if (
                    currentQuestionIndex ===
                    TOTAL_QUESTIONS - 1
                ) {

                    finishSurvey();

                    return;

                }


                // Next question
                currentQuestionIndex++;

                displayQuestion();

                window.scrollTo(0, 0);

            }
        );

    }
);


// =====================================================
// DISPLAY QUESTION
// =====================================================

function displayQuestion() {

    const question =
        randomizedQuestions[
            currentQuestionIndex
        ];


    selectedAnswer = null;


    // Question number
    document.getElementById(
        "survey-question-title"
    ).textContent =
        "Question " +
        (currentQuestionIndex + 1);


    // Question stem
    document.getElementById(
        "question-stem"
    ).textContent =
        question.stem;


    // Image
    const image =
        document.getElementById(
            "question-image"
        );

    image.src = question.image;

    image.alt =
        "Radiographic image for survey question";


    // Answer choices
    const answerButtons =
        document.querySelectorAll(
            ".answer-choice"
        );


    answerButtons.forEach(
        function (button, index) {

            button.textContent =
                question.choices[index];

            button.classList.remove("selected");

        }
    );


    // Button text
    const nextButton =
        document.getElementById(
            "next-question-button"
        );


    if (
        currentQuestionIndex ===
        TOTAL_QUESTIONS - 1
    ) {

        nextButton.textContent =
            "Last Question - Submit Survey";

    } else {

        nextButton.textContent =
            "Next Question";

    }


    // Progress
    const progress =
        Math.round(
            (
                (currentQuestionIndex + 1) /
                TOTAL_QUESTIONS
            ) * 100
        );


    document.getElementById(
        "survey-progress-bar"
    ).style.width =
        progress + "%";


    document.getElementById(
        "survey-progress-text"
    ).textContent =
        progress + "%";


    // Start timer
    questionStartTime =
        performance.now();

}


// =====================================================
// RECORD RESPONSE
// =====================================================

function recordCurrentResponse() {

    const question =
        randomizedQuestions[
            currentQuestionIndex
        ];

    const endTime =
        performance.now();

    const timeOnQuestion =
        (endTime - questionStartTime) / 1000;

    const isCorrect =
        selectedAnswer ===
        question.correctAnswer;


    const response = {

        questionId: question.id,

        surveyQuestionNumber:
            currentQuestionIndex + 1,

        selectedAnswer:
            question.choices[selectedAnswer],

        correctAnswer:
            question.choices[
                question.correctAnswer
            ],

        correct:
            isCorrect
                ? "Correct"
                : "Incorrect",

        timeSeconds:
            Number(
                timeOnQuestion.toFixed(2)
            )

    };


    surveyResponses.push(response);


    console.log(
        "Recorded response:",
        response
    );

}


// =====================================================
// FINISH SURVEY
// =====================================================

function finishSurvey() {

    console.log(
        "Complete survey data:",
        surveyResponses
    );


    document.getElementById(
        "survey-question-page"
    )
        .classList
        .remove("active");


    document.getElementById(
        "completion-page"
    )
        .classList
        .add("active");


    window.scrollTo(0, 0);

}
