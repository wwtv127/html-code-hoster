function hostCode() {
    const code = document.getElementById('htmlCodeInput').value;
    const outputDiv = document.getElementById('linkOutput');
    
    if (!code.trim()) {
        alert("Please paste some HTML code first!");
        return;
    }

    // 1. Prepare the data for CodePen
    // CodePen's API expects the HTML content as a JSON object.
    const data = {
        title: "User-Pasted Code Snippet",
        html: code,
        editors: "001" // Ensures only the HTML editor is visible initially
    };

    // 2. Create a hidden form element to submit the data
    const form = document.createElement('form');
    form.setAttribute('method', 'POST');
    // This is the specific CodePen endpoint for creating a new pen
    form.setAttribute('action', 'https://codepen.io/pen/define/');
    form.setAttribute('target', '_blank'); // Opens the result in a new tab

    // 3. Create a hidden input field to hold the JSON data
    const input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', 'data');
    input.setAttribute('value', JSON.stringify(data));

    // 4. Attach the input to the form, and the form to the body
    form.appendChild(input);
    document.body.appendChild(form);

    // 5. Submit the form, which redirects the user to their live hosted code on CodePen
    form.submit();
    
    // 6. Optional: Provide a message to the user while the new tab opens
    outputDiv.style.display = 'block';
    document.getElementById('liveLink').textContent = "Your link is opening in a new tab...";
    document.getElementById('liveLink').href = "#"; // Reset for safety
    
    // Clean up the hidden form after a short delay
    setTimeout(() => {
        document.body.removeChild(form);
    }, 1000);
}
