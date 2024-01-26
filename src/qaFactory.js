function questionsAndAnswers(question, icon, answer) {
  let questionSectionSelector = document.querySelector(".questions-section");

  let questionDiv = document.createElement("div");
  questionDiv.classList.add("question-div");

  let questionSubDiv = document.createElement("div");
  questionSubDiv.classList.add("question-sub-div");

  let questionTitle = document.createElement("h3");
  questionTitle.textContent = `${question}`;
  let questionIcon = new Image();
  questionIcon.src = icon;

  questionSubDiv.appendChild(questionTitle);
  questionSubDiv.appendChild(questionIcon);
  questionDiv.appendChild(questionSubDiv);
  questionSectionSelector.appendChild(questionDiv);

  // giving button function to open and close answers
  let answerOpen = false; // Variable to track answer state

  questionIcon.addEventListener("click", (e) => {
    const answerParagraph = document.querySelector(".answer-paragraph");

    if (!answerOpen) {
      // Answer is closed, create and append it
      let questionAnswer = document.createElement("p");
      questionAnswer.classList.add("answer-paragraph");
      questionAnswer.textContent = `${answer}`;
      questionDiv.appendChild(questionAnswer);
      e.target.id = "opened";
      answerOpen = true; // Set answer state to open
    } else {
      // Answer is open, remove it
      e.target.id = "";
      questionDiv.removeChild(answerParagraph);
      answerOpen = false; // Set answer state to closed
    }
  });
}

function clouseAnswer() {}

export { questionsAndAnswers };
