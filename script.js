/* =========================================================
   SURVEY QUESTIONS
   =========================================================

   This is where you will eventually put your
   actual 10 questions.

   Each question contains:

   - question
   - image
   - choices

   ========================================================= */

const questions = [

    {
        question:
            "Which option best describes the finding shown in the image?",

        image:
            "images/question-1.jpg",

        choices: [
            "Answer choice A",
            "Answer choice B",
            "Answer choice C",
            "Answer choice D"
        ]
    },


    {
        question:
            "Which of the following would you select based on this image?",

        image:
            "images/question-2.jpg",

        choices: [
            "Answer choice A",
            "Answer choice B",
            "Answer choice C"
        ]
    },


    {
        question:
            "What is the most appropriate interpretation of this image?",

        image:
            "images/question-3.jpg",

        choices: [
            "Answer choice A",
            "Answer choice B",
            "Answer choice C",
            "Answer choice D",
            "Answer choice E"
        ]
    },


    {
        question:
            "Which response best matches what you see?",

        image:
            "images/question-4.jpg",

        choices: [
            "Answer choice A",
            "Answer choice B",
            "Answer choice C",
            "Answer choice D"
        ]
    },


    {
        question:
            "Which option would you choose for this scenario?",

        image:
            "images/question-5.jpg",

        choices: [
            "Answer choice A",
            "Answer choice B",
            "Answer choice C"
        ]
    },


    {
        question:
            "What is your interpretation of the following image?",

        image:
            "images/question-6.jpg",

        choices: [
            "Answer choice A",
            "Answer choice B",
            "Answer choice C",
            "Answer choice D"
        ]
    },


    {
        question:
            "Which answer best describes this finding?",

        image:
            "images/question-7.jpg",

        choices: [
            "Answer choice A",
            "Answer choice B",
            "Answer choice C",
            "Answer choice D",
            "Answer choice E"
        ]
    },


    {
        question:
            "Which option would you select?",

        image:
            "images/question-8.jpg",

        choices: [
            "Answer choice A",
            "Answer choice B",
            "Answer choice C"
        ]
    },


    {
        question:
            "What is the most appropriate response?",

        image:
            "images/question-9.jpg",

        choices: [
            "Answer choice A",
            "Answer choice B",
            "Answer choice C",
            "Answer choice D"
        ]
    },


    {
        question:
            "Which of the following best represents your answer?",

        image:
            "images/question-10.jpg",

        choices: [
            "Answer choice A",
            "Answer choice B",
            "Answer choice C",
            "Answer choice D"
        ]
    }

];


/* =========================================================
   SURVEY STATE
   ========================================================= */

let currentQuestion = 0;

let responses = [];

let personalInformation = {

    name: "",

    institution: "",

    contact: ""

};


/* =========================================================
   PAGE MANAGEMENT
   ========================================================= */

function showPage(pageId) {

    const pages =
        document.querySelectorAll(".survey-page");


    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    document
        .getElementById(pageId)
        .classList.add("active");


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================================
   INTRO
   ========================================================= */

function goToPersonalInfo() {

    showPage("personal-page");

    updateProgress(1);

}


function goToIntro() {

    showPage("intro-page");

    updateProgress(0);

}


/* =========================================================
   PERSONAL INFORMATION
   ========================================================= */

document
    .getElementById("personal-form")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        personalInformation.name =
            document.getElementById("name").value.trim();


        personalInformation.institution =
            document.getElementById("institution").value.trim();


        personalInformation.contact =
            document.getElementById("contact").value.trim();


        currentQuestion = 0;


        showQuestion();

        updateProgress(2);

    });


/* =========================================================
   DISPLAY QUESTION
   ========================================================= */

function showQuestion() {

    const question =
        questions[currentQuestion];


    document
        .getElementById("current-question-number")
        .textContent =
        currentQuestion + 1;


    document
        .getElementById("total-question-number")
        .textContent =
        questions.length;


    document
        .getElementById("question-text")
        .textContent =
        question.question;


    document
        .getElementById("question-image")
        .src =
        question.image;


    const answerContainer =
        document.getElementById("answer-options");


    answerContainer.innerHTML = "";


    question.choices.forEach(
        function(choice, index) {

            const label =
                document.createElement("label");


            label.className =
                "answer-option";


            if (
                responses[currentQuestion] === choice
            ) {

                label.classList.add("selected");

            }


            const radio =
                document.createElement("input");


            radio.type = "radio";

            radio.name = "survey-answer";

            radio.value = choice;


            if (
                responses[currentQuestion] === choice
            ) {

                radio.checked = true;

            }


            radio.addEventListener(
                "change",
                function() {

                    selectAnswer(choice);

                }
            );


            label.appendChild(radio);

            label.appendChild(
                document.createTextNode(choice)
            );


            answerContainer.appendChild(label);

        }
    );


    updateQuestionButtons();

}


/* =========================================================
   SELECT ANSWER
   ========================================================= */

function selectAnswer(answer) {

    responses[currentQuestion] = answer;


    const options =
        document.querySelectorAll(
            ".answer-option"
        );


    options.forEach(function(option) {

        option.classList.remove("selected");

    });


    event.target
        .closest(".answer-option")
        .classList.add("selected");

}


/* =========================================================
   NEXT QUESTION
   ========================================================= */

function nextQuestion() {

    if (
        !responses[currentQuestion]
    ) {

        alert(
            "Please select an answer before continuing."
        );

        return;

    }


    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        showQuestion();

        updateProgress(
            2 + currentQuestion
        );

    } else {

        showSummary();

    }

}


/* =========================================================
   PREVIOUS QUESTION
   ========================================================= */

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

        updateProgress(
            2 + currentQuestion
        );

    } else {

        showPage("personal-page");

        updateProgress(1);

    }

}


/* =========================================================
   QUESTION BUTTON
   ========================================================= */

function updateQuestionButtons() {

    const backButton =
        document.getElementById(
            "question-back-button"
        );


    if (currentQuestion === 0) {

        backButton.textContent =
            "Back to Personal Information";

    } else {

        backButton.textContent =
            "Back";

    }


    const nextButton =
        document.getElementById(
            "question-next-button"
        );


    if (
        currentQuestion ===
        questions.length - 1
    ) {

        nextButton.textContent =
            "Review Responses";

    } else {

        nextButton.textContent =
            "Next";

    }

}


/* =========================================================
   SUMMARY
   ========================================================= */

function showSummary() {

    document
        .getElementById("summary-name")
        .textContent =
        personalInformation.name;


    document
        .getElementById("summary-institution")
        .textContent =
        personalInformation.institution;


    document
        .getElementById("summary-contact")
        .textContent =
        personalInformation.contact;


    const summary =
        document.getElementById(
            "response-summary"
        );


    summary.innerHTML = "";


    questions.forEach(
        function(question, index) {

            const item =
                document.createElement("div");


            item.className =
                "response-summary-item";


            const questionText =
                document.createElement("strong");


            questionText.textContent =
                `${index + 1}. ${question.question}`;


            const answer =
                document.createElement("div");


            answer.className =
                "response-answer";


            answer.textContent =
                responses[index] ||
                "No response";


            item.appendChild(questionText);

            item.appendChild(answer);


            summary.appendChild(item);

        }
    );


    showPage("summary-page");

    updateProgress(
        questions.length + 2
    );

}


/* =========================================================
   RETURN TO LAST QUESTION
   ========================================================= */

function returnToLastQuestion() {

    currentQuestion =
        questions.length - 1;


    showQuestion();

    updateProgress(
        2 + currentQuestion
    );

}


/* =========================================================
   SUBMIT SURVEY
   ========================================================= */

function submitSurvey() {

    /*
       IMPORTANT:

       At this point the survey exists only in the browser.

       The function below can later be connected to:

       - Google Apps Script
       - Google Sheets
       - Firebase
       - Supabase
       - Your own server/database

    */


    const surveyData = {

        personalInformation:
            personalInformation,

        responses:
            responses,

        submittedAt:
            new Date().toISOString()

    };


    console.log(
        "Survey submission:",
        surveyData
    );


    /*
       For now, show the thank-you page.
    */

    showPage("thank-you-page");

    updateProgress(
        questions.length + 3
    );

}


/* =========================================================
   RESTART SURVEY
   ========================================================= */

function restartSurvey() {

    currentQuestion = 0;

    responses = [];


    personalInformation = {

        name: "",

        institution: "",

        contact: ""

    };


    document
        .getElementById("personal-form")
        .reset();


    showPage("intro-page");

    updateProgress(0);

}


/* =========================================================
   PROGRESS BAR
   ========================================================= */

function updateProgress(step) {

    const totalSteps =
        questions.length + 3;


    const percentage =
        (step / totalSteps) * 100;


    document
        .getElementById("progress-bar")
        .style.width =
        `${percentage}%`;


    const progressText =
        document.getElementById(
            "progress-text"
        );


    if (step === 0) {

        progressText.textContent =
            "Introduction";

    }

    else if (step === 1) {

        progressText.textContent =
            "Personal Information";

    }

    else if (
        step >= 2 &&
        step < questions.length + 2
    ) {

        progressText.textContent =
            `Question ${currentQuestion + 1} of ${questions.length}`;

    }

    else if (
        step === questions.length + 2
    ) {

        progressText.textContent =
            "Review Responses";

    }

    else {

        progressText.textContent =
            "Complete";

    }

}
