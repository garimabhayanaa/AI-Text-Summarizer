const textArea = document.getElementById("text_to_summarize");
const submitButton = document.getElementById("submit-button");
const summarizedTextArea = document.getElementById("summary");
const toneSelect = document.getElementById("tone");
const functionSelect = document.getElementById("function");

submitButton.disabled = true;

textArea.addEventListener("input", verifyTextLength);
submitButton.addEventListener("click", submitData);

function verifyTextLength(e) {
  const textarea = e.target;

  if (textarea.value.length > 200 && textarea.value.length < 100000) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

function submitData(e) {
  submitButton.classList.add("submit-button--loading");

  const text_to_summarize = textArea.value;
  const tone = toneSelect.value;
  const func = functionSelect.value;

  const payload = JSON.stringify({
    text_to_summarize,
    tone,
    function: func // summarize or paraphrase
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: payload,
    redirect: 'follow'
  };

  fetch('/summarize', requestOptions)
    .then(response => response.text())
    .then(summary => {
      summarizedTextArea.value = summary;
      submitButton.classList.remove("submit-button--loading");
    })
    .catch(error => {
      console.log(error.message);
      submitButton.classList.remove("submit-button--loading");
    });
}


