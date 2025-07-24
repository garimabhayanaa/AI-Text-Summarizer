const textArea = document.getElementById("text_to_summarize");
const submitButton = document.getElementById("submit-button");
const summarizedTextArea = document.getElementById("summary");

// Initialize submit button state
submitButton.disabled = true;

// Add event listeners
textArea.addEventListener("input", verifyTextLength);
submitButton.addEventListener("click", submitData);

// Function to verify text length and enable/disable submit button
function verifyTextLength(e) {
  const textarea = e.target;
  if (textarea.value.length > 200 && textarea.value.length < 100000) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

// Get selected function and tone from the new UI
function getSelectedFunction() {
  const activeBtn = document.querySelector('.function-btn.active');
  return activeBtn ? activeBtn.dataset.function : 'summarize';
}

function getSelectedTone() {
  const activeBtn = document.querySelector('.tone-btn.active');
  return activeBtn ? activeBtn.dataset.tone : 'standard';
}

// Main submit function
function submitData(e) {
  e.preventDefault();
  
  // Add loading state
  submitButton.classList.add("submit-button--loading");
  
  // Get values from the new UI
  const text_to_summarize = textArea.value;
  const tone = getSelectedTone();
  const func = getSelectedFunction();
  
  // Create payload with correct keys to match backend expectations
  const payload = JSON.stringify({
    text: text_to_summarize,  // ✅ Changed from 'text_to_summarize' to 'text'
    task: func,               // ✅ Changed from 'function' to 'task'
    tone: tone
  });
  
  // Request options
  const requestOptions = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: payload,
    redirect: 'follow'
  };
  
  // Make API call
  fetch('/inference', requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(summary => {
      summarizedTextArea.value = summary;
      submitButton.classList.remove("submit-button--loading");
    })
    .catch(error => {
      console.error('Error:', error.message);
      // Show user-friendly error message
      summarizedTextArea.value = 'Sorry, there was an error processing your request. Please try again.';
      submitButton.classList.remove("submit-button--loading");
    });
}

// Handle function button clicks (Summarize/Paraphrase)
document.querySelectorAll('.function-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove active class from all function buttons
    document.querySelectorAll('.function-btn').forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    this.classList.add('active');
    
    // Update placeholder text based on selected function
    const selectedFunction = this.dataset.function;
    
    if (selectedFunction === 'summarize') {
      textArea.placeholder = 'Paste text to summarize. (Minimum length is 200 chars. Maximum length is 100,000 chars.)';
      summarizedTextArea.placeholder = 'Summarized text will appear here';
    } else {
      textArea.placeholder = 'Paste text to paraphrase. (Minimum length is 200 chars. Maximum length is 100,000 chars.)';
      summarizedTextArea.placeholder = 'Paraphrased text will appear here';
    }
    
    // Clear previous results when switching functions
    summarizedTextArea.value = '';
  });
});

// Handle tone button clicks
document.querySelectorAll('.tone-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove active class from all tone buttons
    document.querySelectorAll('.tone-btn').forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    this.classList.add('active');
    
    // Clear previous results when switching tones
    summarizedTextArea.value = '';
  });
});

// Initialize UI state on page load
document.addEventListener('DOMContentLoaded', function() {
  // Ensure default selections are active
  const defaultFunctionBtn = document.querySelector('.function-btn[data-function="summarize"]');
  const defaultToneBtn = document.querySelector('.tone-btn[data-tone="standard"]');
  
  if (defaultFunctionBtn && !document.querySelector('.function-btn.active')) {
    defaultFunctionBtn.classList.add('active');
  }
  
  if (defaultToneBtn && !document.querySelector('.tone-btn.active')) {
    defaultToneBtn.classList.add('active');
  }
  
  // Set initial placeholder text
  textArea.placeholder = 'Paste text to summarize. (Minimum length is 200 chars. Maximum length is 100,000 chars.)';
  summarizedTextArea.placeholder = 'Summarized text will appear here';
});
