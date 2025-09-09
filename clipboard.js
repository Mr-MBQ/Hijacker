document.addEventListener('copy', function(event) {
    let selectedText = window.getSelection().toString();
    if (selectedText === "Hacker") {
        event.clipboardData.setData('text/plain', 'CustomCTF');
        event.preventDefault();
    }
});
document.addEventListener('copy', function(event) {
    let selectedText = window.getSelection().toString();
    if (selectedText === "means") {
        event.clipboardData.setData('text/plain', '{cl1pb04rd_');
        event.preventDefault();
    }
});
document.addEventListener('copy', function(event) {
    let selectedText = window.getSelection().toString();
    if (selectedText === "Hijacker") {
        event.clipboardData.setData('text/plain', 'h1j4ck1ng}');
        event.preventDefault();
    }
});

