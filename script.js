// Select buttons
const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');
const okayBtn = document.querySelector('.okay');

// Select ALL pages
const pages = document.querySelectorAll(
    '.page1, .page2, .page3, .page4, .page5, .page6, .page7'
);

// Helper function to switch pages
function showPage(pageClass) {

    // hide all pages
    pages.forEach(page => page.classList.remove('active'));

    // show selected page
    document.querySelector(pageClass).classList.add('active');
}

// Initial page
showPage('.page1');

// First buttons
yesBtn.addEventListener('click', () => showPage('.page2'));
noBtn.addEventListener('click', () => showPage('.page3'));
okayBtn.addEventListener('click', () => showPage('.page1'));


// CONTENT BUTTONS
function openPictureViewer() {
    showPage('.page4');
}

function openYouTube() {
    showPage('.page5');
}

function openFlower() {
    showPage('.page6');
}

function openLoveLetter() {
    showPage('.page7');
}


// JavaScript to toggle expand/collapse
const albums = document.querySelectorAll('.album');

albums.forEach(album => {
    album.addEventListener('click', () => {
        album.classList.toggle('active');
    });
});


// Keep track of page history
const pageHistory = [];

// Helper function to switch pages
function showPage(pageClass) {
    // Find currently active page
    const currentPage = document.querySelector('.active');
    if (currentPage) {
        // Save current page to history before switching
        pageHistory.push(currentPage.classList[0]); // push the first class, e.g., 'page1'
    }

    // Hide all pages
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    document.querySelector(pageClass).classList.add('active');
}

// Back button
function goBack() {
    if (pageHistory.length > 0) {
        // Pop the last page from history
        const previousPageClass = '.' + pageHistory.pop();

        // Hide current page
        pages.forEach(page => page.classList.remove('active'));

        // Show previous page
        document.querySelector(previousPageClass).classList.add('active');
    }
}