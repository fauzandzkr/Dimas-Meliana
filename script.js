document.addEventListener('DOMContentLoaded', () => {
    // Show loading screen
    const loadingElement = document.getElementById('loading');
    const wrapperElement = document.getElementById('wrapper');

    // Set nama tamu undangan
    const params = new URLSearchParams(window.location.search);
    const guestName = params.get('name');
    const guestNameElement = document.getElementById('guestName');
    
    if (guestName) {
        guestNameElement.textContent = guestName;
    } else {
        guestNameElement.textContent = 'Tamu Undangan';
    }

    // Once all content is loaded, hide loading and show wrapper
    window.addEventListener('load', () => {
        loadingElement.style.display = 'none';
        wrapperElement.style.display = 'block';
    });
}); 


document.getElementById('openButton').addEventListener('click', function() {
    window.location.href = 'main.html';
});




window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
        method: 'POST',
        body: data,
        })
        .then(() => {
        alert("Success!");
        })
    });
    });





