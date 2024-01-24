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

  questionIcon.addEventListener("click", () => {
    let questionAnswer = document.createElement("p");
    questionAnswer.textContent = `${answer}`;
    questionDiv.appendChild(questionAnswer);
  });
}

export { questionsAndAnswers };
