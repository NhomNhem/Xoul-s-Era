// Initializing the lightbox gallery.
// Available options: https://github.com/feimosi/baguetteBox.js?tab=readme-ov-file#customization

if ('baguetteBox' in window && document.querySelectorAll('[data-bss-baguettebox]').length > 0) {
   baguetteBox.run('[data-bss-baguettebox]', { animation: 'slideIn' });
}

// Gắn sự kiện vào button có ID 'roadmapButton'
const roadmapButton = document.getElementById('roadmapButton');
if (roadmapButton) {
    roadmapButton.addEventListener('click', () => {
        window.location.href = 'roadmap.html'; // Chuyển hướng đến roadmap.html
    });
}

// Gắn sự kiện vào button có ID 'xylosButton'
const xylosButton = document.getElementById('xylosButton');
if (xylosButton) {
    xylosButton.addEventListener('click', () => {
        window.location.href = 'articles/xylos.html'; // Chuyển hướng đến xylos.html
    });
}

// Gắn sự kiện vào button có ID 'originButton'
const originButton = document.getElementById('originButton');
if (originButton) {
    originButton.addEventListener('click', () => {
        window.location.href = 'articles/origin.html'; // Chuyển hướng đến origin.html
    });
}


// Gắn sự kiện vào button có ID 'uranastraButton'
const uranastraButton = document.getElementById('uranastraButton');
if (uranastraButton) {
    uranastraButton.addEventListener('click', () => {
        window.location.href = 'articles/uranastra.html'; // Chuyển hướng đến uranastra.html
    });
}

// Gắn sự kiện vào button có ID 'letoButton'
const letoButton = document.getElementById('letoButton');
if (letoButton) {
    letoButton.addEventListener('click', () => {
        window.location.href = 'articles/leto.html'; // Chuyển hướng đến leto.html
    });
}