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

        [
            shuffled[i],
            shuffled[j]
        ] =
        [
            shuffled[j],
            shuffled[i]
        ];

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
        // FIND PAGES
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

        const instructionsPage =
            document.getElementById(
                "instructions-page"
            );

        const surveyQuestionPage =
            document.getElementById(
                "survey-question-page"
            );

        const completionPage =
            document.getElementById(
                "completion-page"
            );


        // =================================================
        // FIND BUTTONS
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

        const startSurveyButton =
            document.getElementById(
                "start-survey-button"
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

                introductionPage
                    .classList
                    .remove("active");

                consentPage
                    .classList
                    .add("active");

                window.scrollTo(0, 0);

            }
        );


        // =================================================
        // CONSENT → PERSONAL INFORMATION
        // =================================================

        consentNextButton.addEventListener(
            "click",
            function () {

                consentPage
                    .classList
                    .remove("active");

                demographicsPage
                    .classList
                    .add("active");

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

        const fellowshipSelect =
            document.getElementById(
                "fellowship"
            );

        const yearsPracticeSelect =
            document.getElementById(
                "years-practice"
            );

        const demographicsError =
            document.getElementById(
                "demographics-error"
            );


        // =================================================
        // ANONYMOUS CHECKBOX
        // =================================================

        anonymousCheckbox.addEventListener(
            "change",
            function () {

                if (
                    anonymousCheckbox.checked
                ) {

                    demographicForm.style.display =
                        "none";

                    anonymousMessage.style.display =
                        "block";

                    demographicsError.style.display =
                        "none";

                } else {

                    demographicForm.style.display =
                        "block";

                    anonymousMessage.style.display =
                        "none";

                }

            }
        );


        // =================================================
        // INSTITUTION → OTHER
        // =================================================

        institutionSelect.addEventListener(
            "change",
            function () {

                if (
                    institutionSelect.value ===
                    "Other"
                ) {

                    otherInstitutionGroup
                        .style
                        .display = "block";

                } else {

                    otherInstitutionGroup
                        .style
                        .display = "none";

                    otherInstitution.value = "";

                }

            }
        );


        // =================================================
        // ROLE → ATTENDING
        // =================================================

        roleSelect.addEventListener(
            "change",
            function () {

                if (
                    roleSelect.value ===
                    "Attending"
                ) {

                    attendingFields
                        .style
                        .display = "block";

                } else {

                    attendingFields
                        .style
                        .display = "none";

                    fellowshipSelect.value = "";

                    yearsPracticeSelect.value = "";

                }

            }
        );


        // =================================================
        // PERSONAL INFORMATION → INSTRUCTIONS
        // =================================================

        demographicsNextButton.addEventListener(
            "click",
            function () {


                // Anonymous participants
                if (
                    anonymousCheckbox.checked
                ) {

                    demographicsPage
                        .classList
                        .remove("active");

                    instructionsPage
                        .classList
                        .add("active");

                    demographicsError
                        .style
                        .display = "none";

                    window.scrollTo(0, 0);

                    return;

                }


                let formIsValid = true;


                // Name
                if (
                    participantName.value.trim() === ""
                ) {

                    formIsValid = false;

                }


                // Institution
                if (
                    institutionSelect.value === ""
                ) {

                    formIsValid = false;

                }


                // Other institution
                if (
                    institutionSelect.value ===
                    "Other" &&
                    otherInstitution.value.trim() === ""
                ) {

                    formIsValid = false;

                }


                // Role
                if (
                    roleSelect.value === ""
                ) {

                    formIsValid = false;

                }


                // Attending requirements
                if (
                    roleSelect.value ===
                    "Attending"
                ) {

                    if (
                        fellowshipSelect.value === ""
                    ) {

                        formIsValid = false;

                    }

                    if (
                        yearsExperienceSelect.value === ""
                    ) {

                        formIsValid = false;

                    }

                }


                // Invalid
                if (!formIsValid) {

                    demographicsError
                        .style
                        .display = "block";

                    return;

                }


                // Valid
                demographicsError
                    .style
                    .display = "none";

                demographicsPage
                    .classList
                    .remove("active");

                instructionsPage
                    .classList
                    .add("active");

                window.scrollTo(0, 0);

            }
        );


        // =================================================
        // START SURVEY
        // =================================================

        startSurveyButton.addEventListener(
            "click",
            function () {

                // Randomize question order
                randomizedQuestions =
                    shuffleArray(
                        questionBank
                    );

                // Start at question 1
                currentQuestionIndex = 0;

                // Clear previous responses
                surveyResponses = [];

                // Display survey
                instructionsPage
                    .classList
                    .remove("active");

                surveyQuestionPage
                    .classList
                    .add("active");

                // Display first question
                displayQuestion();

                window.scrollTo(0, 0);

            }
        );


        // =================================================
        // ANSWER CHOICE BUTTONS
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

                        // Remove previous selection
                        answerButtons.forEach(
                            function (otherButton) {

                                otherButton
                                    .classList
                                    .remove(
                                        "selected"
                                    );

                            }
                        );


                        // Select this answer
                        button
                            .classList
                            .add("selected");


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

                // Don't allow proceeding
                // without an answer
                if (
                    selectedAnswer === null
                ) {

                    alert(
                        "Please select an answer before continuing."
                    );

                    return;

                }


                // Record response
                recordCurrentResponse();


                // Is this the last question?
                if (
                    currentQuestionIndex ===
                    TOTAL_QUESTIONS - 1
                ) {

                    finishSurvey();

                    return;

                }


                // Move to next question
                currentQuestionIndex++;

                displayQuestion();

                window.scrollTo(0, 0);

            }
        );


    }
);


// =====================================================
// DISPLAY CURRENT QUESTION
// =====================================================

function displayQuestion() {

    const question =
        randomizedQuestions[
            currentQuestionIndex
        ];


    // Reset selected answer
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

    image.src =
        question.image;

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

            button.classList.remove(
                "selected"
            );

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
                (currentQuestionIndex + 1)
                /
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
// RECORD CURRENT RESPONSE
// =====================================================

function recordCurrentResponse() {

    const question =
        randomizedQuestions[
            currentQuestionIndex
        ];


    const endTime =
        performance.now();


    const timeOnQuestion =
        (
            endTime -
            questionStartTime
        ) / 1000;


    const isCorrect =
        selectedAnswer ===
        question.correctAnswer;


    const response = {

        questionId:
            question.id,

        surveyQuestionNumber:
            currentQuestionIndex + 1,

        selectedAnswer:
            question.choices[
                selectedAnswer
            ],

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


    surveyResponses.push(
        response
    );


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


    // Later, this is where we will
    // send the data to Google Sheets.

}
