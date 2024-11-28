// F* Sparx: Sparx Reader
// Made by Zin
// Heavily recommend SenAI for maths

let copiedText = ''; // Store copied text globally
let lastCheckedTime = 0;


const CHECK_INTERVAL = 5000;


const overlayButton = document.createElement('button');
overlayButton.textContent = "ANSWER";
overlayButton.style.position = 'fixed';
overlayButton.style.bottom = '10px';
overlayButton.style.right = '10px';
overlayButton.style.zIndex = '9999';
overlayButton.style.padding = '10px 20px';
overlayButton.style.backgroundColor = '#007BFF';
overlayButton.style.color = 'white';
overlayButton.style.border = 'none';
overlayButton.style.borderRadius = '5px';
overlayButton.style.cursor = 'pointer';
overlayButton.style.fontSize = '16px';


overlayButton.addEventListener('click', () => {
    console.log("Manual answer triggered.");
    autoAnswer();
});

document.querySelectorAll('*').forEach(element => {
    element.oncopy = null;
    element.oncut = null;
    element.onpaste = null;
    element.style.userSelect = 'text'; // Allow text selection
    element.style.webkitUserSelect = 'text'; 
    element.style.msUserSelect = 'text';
    element.style.mozUserSelect = 'text';
});


document.addEventListener('copy', (event) => {
    copiedText = window.getSelection().toString();
    console.log('Text copied:', copiedText);
});


document.body.appendChild(overlayButton);


const answerPane = document.createElement('div');
answerPane.style.position = 'fixed';
answerPane.style.top = '50px';
answerPane.style.right = '10px';
answerPane.style.zIndex = '9999';
answerPane.style.padding = '15px';
answerPane.style.backgroundColor = '#f0f0f0';
answerPane.style.border = '2px solid #007BFF';
answerPane.style.borderRadius = '8px';
answerPane.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
answerPane.style.width = '300px';
answerPane.style.maxHeight = '200px';
answerPane.style.overflowY = 'auto';
answerPane.style.fontSize = '14px';
answerPane.innerHTML = '<strong>Answer:</strong><p id="answerText">No answer yet</p>';

document.body.appendChild(answerPane);

async function queryCohere(question, options, context) {
    const apiKey = 'KEY-HERE'; // !!!!!~ YOUR API KEY GOES IN THE "KEY-HERE" SECTION !!!!!!
    const response = await fetch('https://api.cohere.ai/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "command-xlarge-nightly",
            prompt: `Context: ${context}\n\nQuestion: ${question}\nOptions: ${options.join(', ')}\nAnswer:`,
            max_tokens: 50,
            temperature: 0.0
        })
    });

    if (!response.ok) {
        console.error("Cohere API Error:", response.statusText);
        return null;
    }

    const data = await response.json();
    console.log("Cohere Response:", data);


    return data?.text?.trim() || "No answer found";
}

function extractQuestionAndOptions() {
    const questionElement = document.querySelector('div[class*="_PanelQuestionContent_"]');
    const optionElements = document.querySelectorAll('div[class*="_Buttons_"] button');

    if (!questionElement || optionElements.length === 0) {
        console.error('Question or options not found');
        return null;
    }

    const question = questionElement.innerText.trim();
    const options = Array.from(optionElements).map(option => option.querySelector('div').innerText.trim());

    return { question, options };
}

async function autoAnswer() {
    const questionData = extractQuestionAndOptions();

    if (!questionData) {
        console.log("Failed to extract question or options");
        return;
    }

    const { question, options } = questionData;

    if (!copiedText) {
        console.log("No copied text available, cannot proceed with AI query.");
        return;
    }

    console.log("Question:", question);
    console.log("Options:", options);
    console.log("Copied Text (Context):", copiedText);

    const answer = await queryCohere(question, options, copiedText);
    if (!answer) {
        console.error("Failed to get an answer from Cohere.");
        return;
    }

    console.log("AI Answer:", answer);

    const answerTextElement = document.getElementById('answerText');
    answerTextElement.textContent = answer;

    const optionToSelect = options.findIndex(option => answer.includes(option));
    if (optionToSelect >= 0) {
        document.querySelectorAll('div[class*="_Buttons_"] button')[optionToSelect].click();
        console.log(`Selected Option: ${options[optionToSelect]}`);
    } else {
        console.log("AI Answer does not match any options.");
    }
}





observer.observe(document.body, {
    childList: true,
    subtree: true
});

console.log("MutationObserver is now watching for changes.");
