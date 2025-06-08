
const mainPageButton = document.getElementById('interactiveButton');


function goToWebDevelopmentPage() {
    window.location.href = 'webdev.html';
}


if (mainPageButton) { 
    mainPageButton.addEventListener('click', goToWebDevelopmentPage);
}

const backButton = document.getElementById('back-button text-center');


function goBackToMainPage() {
    window.location.href = 'webpage.html'; 
}

if (backButton) { 
   backButton.addEventListener('click', goBackToMainPage);
}




