```javascript
/* =========================================================
   WRIST FRACTURE MORPHOLOGY STUDY
   CL-IOH SCORE 2026

   script.js
   ========================================================= */


/* =========================================================
   1. SURVEY QUESTIONS
   ========================================================= */

const questions = [

    {
        id: 1,
        prompt: "How would you classify the fracture shown in this radiograph?",
        image: "images/question-1.jpg",
        alt: "Radiographic image of wrist fracture for Question 1",
        choices: [
            "Choice A",
            "Choice B",
            "Choice C",
            "Choice D"
        ]
    },

    {
        id: 2,
        prompt: "What fracture morphology best describes this image?",
        image: "images/question-2.jpg",
        alt: "Radiographic image of wrist fracture for Question 2",
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
        prompt: "Which classification would you assign to this fracture?",
        image: "images/question-3.jpg",
        alt: "Radiographic image of wrist fracture for Question 3",
        choices: [
            "Choice A",
            "Choice B",
            "Choice C",
            "Choice D"
        ]
    },

    {
        id: 4,
        prompt: "Which treatment approach would you recommend for this fracture?",
        image: "images/question-4.jpg",
        alt: "Radiographic image of wrist fracture for Question 4",
        choices: [
            "Choice A",
            "Choice B",
            "Choice C",
            "Choice D"
        ]
    },

    {
        id: 5,
        prompt: "How would you describe the fracture morphology shown?",
        image: "images/question-5.jpg",
        alt: "Radiographic image of wrist fracture for Question 5",
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
        prompt: "Which classification best represents this fracture?",
        image: "images/question-6.jpg",
        alt: "Radiographic image of wrist fracture for Question 6",
        choices: [
            "Choice A",
            "Choice B",
            "Choice C",
            "Choice D"
        ]
    },

    {
        id: 7,
        prompt: "What treatment method would you select for this fracture?",
        image: "images/question-7.jpg",
        alt: "Radiographic image of wrist fracture for Question 7",
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
        prompt: "Which description most accurately characterizes this fracture?",
        image: "images/question-8.jpg",
        alt: "Radiographic image of wrist fracture for Question 8",
        choices: [
            "Choice A",
            "Choice B",
            "Choice C",
            "Choice D"
        ]
    },

    {
        id: 9,
        prompt: "How would you classify this wrist fracture?",
        image: "images/question-9.jpg",
        alt: "Radiographic image of wrist fracture for Question 9",
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
        prompt: "Which treatment approach would you recommend for this fracture?",
        image: "images/question-10.jpg",
        alt: "Radiographic image of wrist fracture for Question 10",
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

let responses = new Array(questions.length).fill(null);

let participantInfo = {
    name: "",
    institution: "",
    contact: "",
    anonymous: false
};


/* =========================================================
   3. PAGE NAVIGATION
   ========================================================= */

function showPage(pageId) {

    const pages = document.querySelectorAll(".survey-page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

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

    const nameElement =
        document.getElementById("participant-name");

    const institutionElement =
        document.getElementById("participant-institution");

    const contactElement =
        document.getElementById("participant-contact");

    const anonymousElement =
        document.getElementById("anonymous-participant");


    const name =
        nameElement ? nameElement.value.trim() : "";

    const institution =
        institutionElement ? institutionElement.value.trim() : "";

    const contact =
        contactElement ? contactElement.value.trim() : "";

    const anonymous =
        anonymousElement ? anonymousElement.checked : false;


    participantInfo = {
        name: name,
        institution: institution,
        contact: contact,
        anonymous: anonymous
    };


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


    currentQuestion = 0;

    showQuestion();

    showPage("question-page");

    updateProgress(3);
}


/* =========================================================
   8. DISPLAY QUESTION
   ========================================================= */

function showQuestion() {

    const question = questions[currentQuestion];


    const questionNumber =
        document.getElementById("question-number");

    if (questionNumber) {

        questionNumber.textContent =
            `Question ${currentQuestion + 1} of ${questions.length}`;
    }


    const questionPrompt =
        document.getElementById("question-prompt");

    if (questionPrompt) {

        questionPrompt.textContent =
            question.prompt;
    }


    const image =
        document.getElementById("question-image");

    if (image) {

        image.src = question.image;

        image.alt = question.alt;
    }


    const answerContainer =
        document.getElementById("answer-choices");


    if (!answerContainer) {
        return;
    }


    answerContainer.innerHTML = "";


    question.choices.forEach(function(choice) {

        const choiceButton =
            document.createElement("button");


        choiceButton.type = "button";

        choiceButton.className = "answer-choice";

        choiceButton.textContent = choice;

        choiceButton.dataset.answer = choice;


        choiceButton.addEventListener(
            "click",
            function() {

                selectAnswer(
                    choice,
                    choiceButton
                );

            }
        );


        if (
            responses[currentQuestion] === choice
        ) {

            choiceButton.classList.add("selected");
        }


        answerContainer.appendChild(choiceButton);

    });


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

        } else {

            backButton.textContent =
                "Back";
        }


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
}


/* =========================================================
   9. SELECT ANSWER
   ========================================================= */

function selectAnswer(
    answer,
    selectedButton
) {

    responses[currentQuestion] = answer;


    const buttons =
        document.querySelectorAll(".answer-choice");


    buttons.forEach(function(button) {

        button.classList.remove("selected");

    });


    selectedButton.classList.add("selected");
}


/* =========================================================
   10. NEXT QUESTION
   ========================================================= */

function nextQuestion() {

    if (
        responses[currentQuestion] === null
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
            3 + currentQuestion
        );

        return;
    }


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

    if (currentQuestion === 0) {

        showPage("personal-page");

        updateProgress(2);

        return;
    }


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
        document.getElementById("summary-container");


    if (!container) {
        return;
    }


    container.innerHTML = "";


    const participantHeading =
        document.createElement("h3");

    participantHeading.textContent =
        "Participant Information";

    container.appendChild(
        participantHeading
    );


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

    } else {

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


    const responseHeading =
        document.createElement("h3");

    responseHeading.textContent =
        "Survey Responses";

    container.appendChild(
        responseHeading
    );


    questions.forEach(function(question, index) {

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

    });
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

    const unanswered =
        responses.some(function(response) {

            return response === null;

        });


    if (unanswered) {

        alert(
            "Please answer all questions before submitting."
        );

        return;
    }


    const surveyData = {

        timestamp:
            new Date().toISOString(),

        participant:
            participantInfo,

        responses:
            responses

    };


    console.log(
        "Survey submission:",
        surveyData
    );


    showPage("thank-you-page");

    updateProgress(
        questions.length + 4
    );
}


/* =========================================================
   15. UPDATE PROGRESS BAR
   ========================================================= */

function updateProgress(step) {

    const totalSteps =
        questions.length + 4;


    const percentage =
        (step / totalSteps) * 100;


    const progressBar =
        document.getElementById("progress-bar");


    if (progressBar) {

        progressBar.style.width =
            `${percentage}%`;
    }


    const progressText =
        document.getElementById("progress-text");


    if (!progressText) {
        return;
    }


    if (step === 0) {

        progressText.textContent =
            "Introduction";

    } else if (step === 1) {

        progressText.textContent =
            "Research Participation";

    } else if (step === 2) {

        progressText.textContent =
            "Participant Information";

    } else if (
        step >= 3 &&
        step < questions.length + 3
    ) {

        progressText.textContent =
            `Question ${currentQuestion + 1} of ${questions.length}`;

    } else if (
        step === questions.length + 3
    ) {

        progressText.textContent =
            "Review Responses";

    } else {

        progressText.textContent =
            "Complete";
    }
}


/* =========================================================
   16. ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";
    }


    return String(value)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");
}


/* =========================================================
   17. INITIALIZE SURVEY
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        showPage("intro-page");

        updateProgress(0);


        const progressBar =
            document.getElementById("progress-bar");


        if (progressBar) {

            progressBar.style.width = "0%";
        }

    }
);
```


