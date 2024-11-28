document.getElementById('submitButton').addEventListener('click', () => {
    const passageText = document.getElementById('passageInput').value;

    if (passageText.trim()) {
        // Send the passage text to content script
        chrome.storage.local.set({ passage: passageText }, () => {
            console.log("Passage text saved!");
            window.close();
        });
    } else {
        alert('Please enter the passage text.');
    }
});
