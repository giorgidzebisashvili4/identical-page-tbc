function questionsAndAnswers(question, icon, answer) {
  const questionSectionSelector = document.querySelector(".questions-section");

  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question-div");

  const questionSubDiv = document.createElement("div");
  questionSubDiv.classList.add("question-sub-div");

  const questionTitle = document.createElement("h3");
  questionTitle.textContent = `${question}`;
  const questionIcon = new Image();
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

      if (answer !== "answer I") {
        const questionAnswer = document.createElement("p");
        questionAnswer.classList.add("answer-paragraph");
        questionAnswer.textContent = `${answer}`;
        questionDiv.appendChild(questionAnswer);
      } else {
        // adding firts long qestion paragraph
        const questionAnswer = document.createElement("div");
        questionAnswer.classList.add("answer-paragraph");
        questionDiv.appendChild(questionAnswer);

        const questionAnswerDiv = document.createElement("div");
        questionAnswerDiv.classList.add("answer-paragraph-div");

        const questionAnswertext = document.createElement("p");
        questionAnswertext.textContent = `ურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:`;
        questionAnswer.appendChild(questionAnswertext);
        questionAnswer.appendChild(questionAnswerDiv);

        function createAndAppend(tag, text, parent) {
          const element = document.createElement(tag);
          element.textContent = text;
          if (parent) {
            parent.appendChild(element);
          }
          return element;
        }

        const stage1 = createAndAppend("div", "", questionAnswerDiv);
        createAndAppend("strong", "I ეტაპი", stage1);
        createAndAppend(
          "span",
          " - პირველ ეტაპზე საჭიროა, შეავსო სასურველი კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა.",
          stage1,
        );

        const stage2 = createAndAppend("div", "", questionAnswerDiv);
        createAndAppend("strong", "II ეტაპი", stage2);
        createAndAppend(
          "span",
          " - შერჩევის მეორე ეტაპი კურსების მიხედვით განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე.",
          stage2,
        );

        const stage3 = createAndAppend("div", "", questionAnswerDiv);
        createAndAppend("strong", "III ეტაპი", stage3);
        createAndAppend(
          "span",
          " - მესამე ეტაპი კურსების მიხედვით განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური დავალება, რაც",
          stage3,
        );

        const stage4 = createAndAppend("div", "", questionAnswerDiv);
        createAndAppend("strong", "IV ეტაპი", stage4);
        createAndAppend(
          "span",
          " - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით გავლის შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი ხელშეკრულება.",
          stage4,
        );

        const questionAnswertext2 = document.createElement("p");
        questionAnswertext2.textContent = `* სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით წაიკითხო კურსის აღწერა, ნახო რას ისწავლი კურსის განმავლობაში და გაიგო გააჩნია თუ არა კურსს დასწრების წინაპირობა.`;
        questionAnswer.appendChild(questionAnswertext2);
      }

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

export { questionsAndAnswers };
