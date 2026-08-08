/* =========================================================
   WRIST FRACTURE MORPHOLOGY STUDY
   CL-IOH SCORE 2026

   script.js

   This file controls the behavior of the survey.

   HTML  = structure
   CSS   = appearance
   JS    = behavior/functionality
   ========================================================= */


/* =========================================================
   1. SURVEY QUESTIONS
   =========================================================

   Replace the placeholder questions and answers below
   with your actual survey questions.

   Each question contains:

   id
   prompt
   image
   alt
   choices

   You can have 3, 4, or 5 choices per question.
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
   =========================================================

   These variables keep track of where the participant is
   and what they have selected.
   ========================================================= */


let currentQuestion = 0;


/*
   Stores the participant's answers.

   Example:

   responses[0] = "Choice A";
   responses[1] = "Choice C";
   responses[2] = "Choice B";
*/


let responses = new Array(
    questions.length
).fill(null);


/*
   Stores participant information.
*/


let participantInfo = {

    name: "",

    institution: "",

    contact: "",

    anonymous: false

};



/* =========================================================
   3. PAGE NAVIGATION
   =========================================================

   This function hides every survey page and then
   displays the page we request.
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


    /*
       Move the participant back to the top of the page.
    */

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
   6. CONSENT → PERSONAL INFORMATION
   ========================================================= */


function goToPersonalInfo() {

    showPage("personal-page");

    updateProgress(2);

}



/* =========================================================
   7. PERSONAL INFORMATION → FIRST QUESTION
   ========================================================= */


function startSurvey() {

    /*
       Get participant information from the form.
    */


    const name =
        document.getElementById(
            "participant-name"
        ).value.trim();


    const institution =
        document.getElementById(
            "participant-institution"
        ).value.trim();


    const contact =
        document.getElementById(
            "participant-contact"
        ).value.trim();


    const anonymous =
        document.getElementById(
            "anonymous-participant"
        ).checked;



    /*
       Store participant information.
    */


    participantInfo = {

        name: name,

        institution: institution,

        contact: contact,

        anonymous: anonymous

    };



    /*
       If the participant selected anonymous,
       we don't require name or contact information.
    */


    if (!anonymous) {

        if (name === "") {

            alert(
                "Please enter your name or select anonymous participation."
            );

            return;

        }


        if (institution === "") {

            alert(
                "Please enter your institution."
            );

            return;

        }


        if (contact === "") {

            alert(
                "Please enter your contact information."
            );

            return;

        }

    }



    /*
       Begin with Question 1.
    */


    currentQuestion = 0;


    showQuestion();


    showPage("question-page");


    updateProgress(3);

}



/* =========================================================
   8. DISPLAY QUESTION
   ========================================================= */


function showQuestion() {

    const question =
        questions[currentQuestion];



    /*
       Question number
    */


    document.getElementById(
        "question-number"
    ).textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;



    /*
       Question prompt
    */


    document.getElementById(
        "question-prompt"
    ).textContent =
        question.prompt;



    /*
       Question image
    */


    const image =
        document.getElementById(
            "question-image"
        );


    image.src =
        question.image;


    image.alt =
        question.alt;



    /*
       Answer choices
    */


    const answerContainer =
        document.getElementById(
            "answer-choices"
        );


    /*
       Remove previous choices.
    */


    answerContainer.innerHTML = "";



    /*
       Create a button for each answer.
    */


    question.choices.forEach(
        function(choice, index) {


            const choiceButton =
                document.createElement("button");


            choiceButton.type =
                "button";


            choiceButton.className =
                "answer-choice";


            choiceButton.textContent =
                choice;



            /*
               Store which answer this button represents.
            */


            choiceButton.dataset.answer =
                choice;



            /*
               When clicked, save the answer.
            */


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
               If the participant previously selected
               this answer, show it as selected.
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
       Change the Back button depending on
       which question we're on.
    */


    const questionButtons =
        document.querySelectorAll(
            ".question-actions .button"
        );


    if (questionButtons.length >= 2) {

        const backButton =
            questionButtons[0];


        const nextButton =
            questionButtons[1];



        if (currentQuestion === 0) {

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
   9. SELECT ANSWER
   ========================================================= */


function selectAnswer(
    answer,
    selectedButton
) {


    /*
       Save the answer.
    */


    responses[currentQuestion] =
        answer;



    /*
       Remove the selected state from
       all answer buttons.
    */


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



    /*
       Highlight the selected answer.
    */


    selectedButton.classList.add(
        "selected"
    );

}



/* =========================================================
   10. NEXT QUESTION
   ========================================================= */


function nextQuestion() {


    /*
       Make sure the participant selected
       an answer.
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
       If this is not the last question,
       move to the next question.
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
       If this IS the last question,
       show the summary page.
    */


    showSummary();

    showPage("summary-page");

    updateProgress(
        questions.length + 3
    );

}



/* =========================================================
   11. PREVIOUS QUESTION
   ========================================================= */


function previousQuestion() {


    /*
       If we're on Question 1,
       go back to participant information.
    */


    if (currentQuestion === 0) {

        showPage("personal-page");

        updateProgress(2);

        return;

    }



    /*
       Otherwise move to the previous question.
    */


    currentQuestion--;

    showQuestion();


    updateProgress(
        3 + currentQuestion
    );

}



/* =========================================================
   12. CREATE SUMMARY
   ========================================================= */


function showSummary() {

    const container =
        document.getElementById(
            "summary-container"
        );


    /*
       Clear existing summary.
    */


    container.innerHTML = "";



    /*
       Participant information section.
    */


    const participantHeading =
        document.createElement("h3");


    participantHeading.textContent =
        "Participant Information";


    container.appendChild(
        participantHeading
    );



    /*
       Participant information.
    */


    const participantList =
        document.createElement("div");


    participantList.className =
        "summary-participant";



    if (participantInfo.anonymous) {

        participantList.innerHTML = `
            <p>
                <strong>Participation:</strong>
                Anonymous
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
                <strong>Institution:</strong>
                ${escapeHTML(participantInfo.institution)}
            </p>

            <p>
                <strong>Contact:</strong>
                ${escapeHTML(participantInfo.contact)}
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
        document.createElement("h3");


    responseHeading.textContent =
        "Survey Responses";


    container.appendChild(
        responseHeading
    );



    /*
       Display every question and answer.
    */


    questions.forEach(
        function(question, index) {


            const responseCard =
                document.createElement("div");


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
                    ${escapeHTML(responses[index])}
                </div>

            `;


            container.appendChild(
                responseCard
            );

        }
    );

}



/* =========================================================
   13. RETURN TO LAST QUESTION
   ========================================================= */


function returnToLastQuestion() {

    currentQuestion =
        questions.length - 1;


    showQuestion();


    showPage("question-page");


    updateProgress(
        3 + currentQuestion
    );

}



/* =========================================================
   14. SUBMIT SURVEY
   ========================================================= */


function submitSurvey() {


    /*
       Make sure every question has an answer.
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
       Create the complete survey data object.
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
       For now, display the data in the browser console.

       Later, this is where we will connect the survey
       to Google Apps Script and Google Sheets.
    */


    console.log(
        "Survey submission:",
        surveyData
    );



    /*
       Move to the Thank You page.
    */


    showPage("thank-you-page");


    updateProgress(
        questions.length + 4
    );

}



/* =========================================================
   15. UPDATE PROGRESS BAR
   ========================================================= */


function updateProgress(step) {


    /*
       Total pages/steps:

       0 = Welcome
       1 = Consent
       2 = Personal Information
       3 = Question 1
       ...
       12 = Question 10
       13 = Summary
       14 = Thank You

       Therefore:
       questions.length + 4 = 14
    */


    const totalSteps =
        questions.length + 4;



    const percentage =
        (step / totalSteps) * 100;



    /*
       Update visual progress bar.
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
       Update progress text.
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
   16. ESCAPE HTML
   =========================================================

   This prevents participant-entered information from
   being interpreted as HTML when displayed on the
   summary page.
   ========================================================= */


function escapeHTML(value) {

    if (value === null || value === undefined) {

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
   17. INITIALIZE SURVEY
   =========================================================

   This runs when the webpage first loads.
   ========================================================= */


document.addEventListener(
    "DOMContentLoaded",
    function() {


        /*
           Make sure the welcome page is visible.
        */


        showPage("intro-page");


        updateProgress(0);


        /*
           Make sure the progress bar starts empty.
        */


        const progressBar =
            document.getElementById(
                "progress-bar"
            );


        if (progressBar) {

            progressBar.style.width =
                "0%";

        }

    }
);
```

