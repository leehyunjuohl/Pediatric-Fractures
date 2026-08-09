function showPage(pageId) {
    const pages = document.querySelectorAll(".survey-page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }
}


function goToConsent() {
    showPage("consent-page");
}


function goToWelcome() {
    showPage("intro-page");
}


function goToPersonalInfo() {
    showPage("personal-page");
}
