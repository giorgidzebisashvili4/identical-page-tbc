/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cardFactory.js":
/*!****************************!*\
  !*** ./src/cardFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   card: () => (/* binding */ card)
/* harmony export */ });
function card(image, title, status, button, icon) {
  const coursesDiv = document.querySelector(".course-cards");
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  coursesDiv.appendChild(cardDiv);
  const cardContentDiv = document.createElement("div");
  const cardPhoto = new Image();
  cardPhoto.src = image;
  cardPhoto.classList.add("card-photo");
  const cardBtnIcon = new Image();
  cardBtnIcon.src = icon;
  const cardTitle = document.createElement("p");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = `${title}`;
  const cardStatus = document.createElement("p");
  cardStatus.classList.add("card-status");
  cardStatus.textContent = `${status}`;
  const cardButton = document.createElement("button");
  cardButton.textContent = `${button}`;
  const cardBtnDiv = document.createElement("div");
  cardBtnDiv.classList.add("card-btn-section");
  cardDiv.appendChild(cardContentDiv);
  cardContentDiv.appendChild(cardPhoto);
  cardContentDiv.appendChild(cardTitle);
  cardContentDiv.appendChild(cardStatus);
  cardDiv.appendChild(cardBtnDiv);
  cardBtnDiv.appendChild(cardBtnIcon);
  cardBtnDiv.appendChild(cardButton);
}


/***/ }),

/***/ "./src/domContent.js":
/*!***************************!*\
  !*** ./src/domContent.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DomContent: () => (/* binding */ DomContent)
/* harmony export */ });
/* harmony import */ var _photos_courses_iso_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photos/courses/iso.jpg */ "./src/photos/courses/iso.jpg");
/* harmony import */ var _photos_courses_react_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photos/courses/react.jpg */ "./src/photos/courses/react.jpg");
/* harmony import */ var _photos_courses_intro_python_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photos/courses/intro-python.jpg */ "./src/photos/courses/intro-python.jpg");
/* harmony import */ var _photos_courses_advan_python_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photos/courses/advan-python.jpg */ "./src/photos/courses/advan-python.jpg");
/* harmony import */ var _photos_courses_cybersecurity_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photos/courses/cybersecurity.jpg */ "./src/photos/courses/cybersecurity.jpg");
/* harmony import */ var _photos_courses_tot_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photos/courses/tot.jpg */ "./src/photos/courses/tot.jpg");
/* harmony import */ var _photos_courses_blockchain_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./photos/courses/blockchain.jpg */ "./src/photos/courses/blockchain.jpg");
/* harmony import */ var _photos_courses_devops_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./photos/courses/devops.jpg */ "./src/photos/courses/devops.jpg");
/* harmony import */ var _photos_courses_security_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./photos/courses/security.jpg */ "./src/photos/courses/security.jpg");
/* harmony import */ var _photos_card_btn_icon_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./photos/card-btn-icon.svg */ "./src/photos/card-btn-icon.svg");
/* harmony import */ var _cardFactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cardFactory */ "./src/cardFactory.js");
/* harmony import */ var _photos_footer_tbc_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./photos/footer/tbc.png */ "./src/photos/footer/tbc.png");
/* harmony import */ var _photos_footer_fb_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./photos/footer/fb.png */ "./src/photos/footer/fb.png");
/* harmony import */ var _photos_footer_youtube_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./photos/footer/youtube.png */ "./src/photos/footer/youtube.png");
/* harmony import */ var _photos_tbcAcdLogo_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./photos/tbcAcdLogo.svg */ "./src/photos/tbcAcdLogo.svg");
/* harmony import */ var _qaFactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./qaFactory */ "./src/qaFactory.js");
/* harmony import */ var _photos_question_expend_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./photos/question-expend.svg */ "./src/photos/question-expend.svg");
/* harmony import */ var _photos_sliderIcon_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./photos/sliderIcon.svg */ "./src/photos/sliderIcon.svg");
/* harmony import */ var _photos_slider_dot_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./photos/slider-dot.svg */ "./src/photos/slider-dot.svg");
/* harmony import */ var _sliderFunction__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sliderFunction */ "./src/sliderFunction.js");
/* harmony import */ var _photos_partners_slid1_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./photos/partners/slid1.png */ "./src/photos/partners/slid1.png");
/* harmony import */ var _photos_partners_slid2_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./photos/partners/slid2.png */ "./src/photos/partners/slid2.png");
/* harmony import */ var _photos_partners_slid3_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./photos/partners/slid3.png */ "./src/photos/partners/slid3.png");
/* harmony import */ var _photos_partners_slid4_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./photos/partners/slid4.png */ "./src/photos/partners/slid4.png");
/* harmony import */ var _photos_partners_slid5_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./photos/partners/slid5.png */ "./src/photos/partners/slid5.png");
/* harmony import */ var _photos_partners_slid6_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./photos/partners/slid6.png */ "./src/photos/partners/slid6.png");
/* harmony import */ var _photos_partners_slid7_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./photos/partners/slid7.png */ "./src/photos/partners/slid7.png");
// import titlePhotoImport from "./photos/title-photo.jpg";



























function DomContent() {
  const containerSelect = document.querySelector(".site-container");

  // making main divs
  const header = document.createElement("div");
  header.classList.add("header");
  const title = document.createElement("div");
  title.classList.add("title-section");
  const paragraph = document.createElement("div");
  paragraph.classList.add("paragraph-section");
  const courses = document.createElement("div");
  courses.classList.add("courses-section");
  const partners = document.createElement("div");
  partners.classList.add("partners-section");
  const questions = document.createElement("div");
  questions.classList.add("questions-section");
  const footer = document.createElement("div");
  footer.classList.add("footer");
  containerSelect.appendChild(header);
  containerSelect.appendChild(title);
  containerSelect.appendChild(paragraph);
  containerSelect.appendChild(courses);
  containerSelect.appendChild(partners);
  containerSelect.appendChild(questions);
  containerSelect.appendChild(footer);

  // dom header content
  const logo = new Image();
  logo.src = _photos_tbcAcdLogo_svg__WEBPACK_IMPORTED_MODULE_14__;
  const headerLinks = document.createElement("div");
  headerLinks.classList.add("header-links");
  header.appendChild(logo);
  header.appendChild(headerLinks);
  const main = document.createElement("button");
  main.textContent = "მთავარი";
  const tbcIt = document.createElement("button");
  tbcIt.textContent = "TBC IT";
  const tbcXusaid = document.createElement("button");
  tbcXusaid.textContent = "TBC x USAID";
  tbcXusaid.id = "selectid-menu";
  const risk = document.createElement("button");
  risk.textContent = "რისკები";
  headerLinks.appendChild(main);
  headerLinks.appendChild(tbcIt);
  headerLinks.appendChild(tbcXusaid);
  headerLinks.appendChild(risk);
  const titleText = document.createElement("p");
  titleText.textContent = "TBC x USAID";
  const titleText2 = document.createElement("p");
  titleText2.textContent = "ტექნოლოგიური განათლებისთვის";
  title.appendChild(titleText);
  title.appendChild(titleText2);

  // paragraph section dom
  const paragraphText = document.createElement("p");
  paragraphText.textContent = "„ TBC x USAID - ტექნოლოგიური განათლებისთვის “ პროგრამა  საინფორმაციო ტექნოლოგიებით დაინტერესებულ ადამიანებს გთავაზობთ სრულად დაფინანსებულ ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს  სხვადასხვა ICT მიმართულებით. წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა დასაქმდნენ თიბისისა და მის პარტნიორ კომპანიებში.";
  const paragraphLink = document.createElement("button");
  paragraphLink.textContent = "გაიგე მეტი";
  paragraph.appendChild(paragraphText);
  paragraph.appendChild(paragraphLink);

  // cards section
  const courseTitleDiv = document.createElement("span");
  courseTitleDiv.classList.add("courses-title");
  courseTitleDiv.textContent = "სასწავლო კურსები";
  courses.appendChild(courseTitleDiv);
  "./photos/partners/slid1.png";
  const courseCardDiv = document.createElement("div");
  courseCardDiv.classList.add("course-cards");
  courses.appendChild(courseCardDiv);
  const isoCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_10__.card)(_photos_courses_iso_jpg__WEBPACK_IMPORTED_MODULE_0__, "iOS Development", "რეგისტრაცია დასრულებულია", "კურსის დეტალები", _photos_card_btn_icon_svg__WEBPACK_IMPORTED_MODULE_9__);
  const reactCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_10__.card)(_photos_courses_react_jpg__WEBPACK_IMPORTED_MODULE_1__, "Reacte", "რეგისტრაცია დასრულებულია", "კურსის დეტალები", _photos_card_btn_icon_svg__WEBPACK_IMPORTED_MODULE_9__);
  const intrPythonCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_10__.card)(_photos_courses_intro_python_jpg__WEBPACK_IMPORTED_MODULE_2__, "Intro to Python", "რეგისტრაცია დასრულებულია", "კურსის დეტალები", _photos_card_btn_icon_svg__WEBPACK_IMPORTED_MODULE_9__);
  const advancedPythonCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_10__.card)(_photos_courses_advan_python_jpg__WEBPACK_IMPORTED_MODULE_3__, "Advanced Python", "რეგისტრაცია დასრულებულია", "კურსის დეტალები", _photos_card_btn_icon_svg__WEBPACK_IMPORTED_MODULE_9__);
  const cybersecurityCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_10__.card)(_photos_courses_cybersecurity_jpg__WEBPACK_IMPORTED_MODULE_4__, "Advanced Cybersecurity Course", "რეგისტრაცია დასრულებულია", "კურსის დეტალები", _photos_card_btn_icon_svg__WEBPACK_IMPORTED_MODULE_9__);
  const totCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_10__.card)(_photos_courses_tot_jpg__WEBPACK_IMPORTED_MODULE_5__, "ToT - Training of Trainers", "რეგისტრაცია დასრულებულია", "კურსის დეტალები", _photos_card_btn_icon_svg__WEBPACK_IMPORTED_MODULE_9__);
  const BlockchainCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_10__.card)(_photos_courses_blockchain_jpg__WEBPACK_IMPORTED_MODULE_6__, "Blockchain", "რეგისტრაცია დასრულებულია", "კურსის დეტალები", _photos_card_btn_icon_svg__WEBPACK_IMPORTED_MODULE_9__);
  const DevOpsCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_10__.card)(_photos_courses_devops_jpg__WEBPACK_IMPORTED_MODULE_7__, "DevOps", "რეგისტრაცია დასრულებულია", "კურსის დეტალები", _photos_card_btn_icon_svg__WEBPACK_IMPORTED_MODULE_9__);
  const SecurityCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_10__.card)(_photos_courses_security_jpg__WEBPACK_IMPORTED_MODULE_8__, "Information Security Governance", "რეგისტრაცია დასრულებულია", "კურსის დეტალები", _photos_card_btn_icon_svg__WEBPACK_IMPORTED_MODULE_9__);

  // slider section

  // Define image paths
  const slid1 = new Image();
  slid1.src = _photos_partners_slid1_png__WEBPACK_IMPORTED_MODULE_20__;
  const slid2 = new Image();
  slid2.src = _photos_partners_slid2_png__WEBPACK_IMPORTED_MODULE_21__;
  const slid3 = new Image();
  slid3.src = _photos_partners_slid3_png__WEBPACK_IMPORTED_MODULE_22__;
  const slid4 = new Image();
  slid4.src = _photos_partners_slid4_png__WEBPACK_IMPORTED_MODULE_23__;
  const slid5 = new Image();
  slid5.src = _photos_partners_slid5_png__WEBPACK_IMPORTED_MODULE_24__;
  const slid6 = new Image();
  slid6.src = _photos_partners_slid6_png__WEBPACK_IMPORTED_MODULE_25__;
  const slid7 = new Image();
  slid7.src = _photos_partners_slid7_png__WEBPACK_IMPORTED_MODULE_26__;
  const logos = [[slid1, slid2, slid3], [slid4, slid5, slid6], [slid7]];
  (0,_sliderFunction__WEBPACK_IMPORTED_MODULE_19__.slider)(logos, _photos_sliderIcon_svg__WEBPACK_IMPORTED_MODULE_17__, _photos_slider_dot_svg__WEBPACK_IMPORTED_MODULE_18__);

  // question section

  const questionTitleDiv = document.createElement("div");
  questionTitleDiv.classList.add("question-title-div");
  const questionTitle = document.createElement("p");
  questionTitle.textContent = "ხშირად დასმული კითხვები";
  const questionTitleBtn = document.createElement("button");
  questionTitleBtn.textContent = "ყველა კითხვა";
  questions.appendChild(questionTitleDiv);
  questionTitleDiv.appendChild(questionTitle);
  questionTitleDiv.appendChild(questionTitleBtn);
  const question1 = (0,_qaFactory__WEBPACK_IMPORTED_MODULE_15__.questionsAndAnswers)("როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?", _photos_question_expend_svg__WEBPACK_IMPORTED_MODULE_16__, "answer I");
  const question2 = (0,_qaFactory__WEBPACK_IMPORTED_MODULE_15__.questionsAndAnswers)("შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?", _photos_question_expend_svg__WEBPACK_IMPORTED_MODULE_16__, "TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე.");
  const question3 = (0,_qaFactory__WEBPACK_IMPORTED_MODULE_15__.questionsAndAnswers)("რა ღირს სწავლა პროგრამის ფარგლებში?", _photos_question_expend_svg__WEBPACK_IMPORTED_MODULE_16__, "პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ.");

  // footer section
  const footerTextDiv = document.createElement("div");
  footerTextDiv.classList.add("footer-text");
  const footerLogo = new Image();
  footerLogo.src = _photos_footer_tbc_png__WEBPACK_IMPORTED_MODULE_11__;
  const footerText = document.createElement("p");
  footerText.textContent = "© 2023 ყველა უფლება დაცულია";
  const footerTextBtn = document.createElement("button");
  footerTextBtn.textContent = "წესები და პირობები";
  footerTextDiv.appendChild(footerLogo);
  footerTextDiv.appendChild(footerText);
  footerTextDiv.appendChild(footerTextBtn);
  const footerLinksDiv = document.createElement("div");
  footerLinksDiv.classList.add("footer-links");
  const footerLinkSocDiv = document.createElement("div");
  const fbLink = new Image();
  fbLink.src = _photos_footer_fb_png__WEBPACK_IMPORTED_MODULE_12__;
  const youtubeLink = new Image();
  youtubeLink.src = _photos_footer_youtube_png__WEBPACK_IMPORTED_MODULE_13__;
  const textUsBtn = document.createElement("button");
  textUsBtn.textContent = "მოგვწერეთ";
  footerLinkSocDiv.appendChild(fbLink);
  footerLinkSocDiv.appendChild(youtubeLink);
  footerLinksDiv.appendChild(footerLinkSocDiv);
  footerLinksDiv.appendChild(textUsBtn);
  footer.appendChild(footerTextDiv);
  footer.appendChild(footerLinksDiv);
}


/***/ }),

/***/ "./src/qaFactory.js":
/*!**************************!*\
  !*** ./src/qaFactory.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   questionsAndAnswers: () => (/* binding */ questionsAndAnswers)
/* harmony export */ });
function questionsAndAnswers(question, icon, answer) {
  const questionSectionSelector = document.querySelector(".questions-section");
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question-div");
  const questionSubDiv = document.createElement("div");
  questionSubDiv.classList.add("question-sub-div");
  const questionTitle = document.createElement("p");
  questionTitle.textContent = `${question}`;
  const questionIcon = new Image();
  questionIcon.src = icon;
  questionSubDiv.appendChild(questionTitle);
  questionSubDiv.appendChild(questionIcon);
  questionDiv.appendChild(questionSubDiv);
  questionSectionSelector.appendChild(questionDiv);

  // giving button function to open and close answers
  let answerOpen = false; // Variable to track answer state
  let answerRemoved = false;
  questionSubDiv.addEventListener("click", () => {
    // eslint-disable-next-line prefer-const
    let answerParagraph = document.querySelector(".answer-paragraph");
    if (answerParagraph !== null) {
      console.log(answerParagraph);
      answerParagraph.remove();
      answerRemoved = true;
    }
    console.log(answerOpen);
    console.log(answerParagraph);
    if (!answerOpen || answerParagraph === null) {
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
        questionAnswertext.textContent = "კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:";
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
        createAndAppend("span", " - პირველ ეტაპზე საჭიროა, შეავსო სასურველი კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა.", stage1);
        const stage2 = createAndAppend("div", "", questionAnswerDiv);
        createAndAppend("strong", "II ეტაპი", stage2);
        createAndAppend("span", " - შერჩევის მეორე ეტაპი კურსების მიხედვით განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე.", stage2);
        const stage3 = createAndAppend("div", "", questionAnswerDiv);
        createAndAppend("strong", "III ეტაპი", stage3);
        createAndAppend("span", " - მესამე ეტაპი კურსების მიხედვით განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური დავალება, რაც", stage3);
        const stage4 = createAndAppend("div", "", questionAnswerDiv);
        createAndAppend("strong", "IV ეტაპი", stage4);
        createAndAppend("span", " - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით გავლის შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი ხელშეკრულება.", stage4);
        const questionAnswertext2 = document.createElement("p");
        questionAnswertext2.textContent = "* სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით წაიკითხო კურსის აღწერა, ნახო რას ისწავლი კურსის განმავლობაში და გაიგო გააჩნია თუ არა კურსს დასწრების წინაპირობა.";
        questionAnswer.appendChild(questionAnswertext2);
      }
      questionIcon.id = "opened";
      answerOpen = true; // Set answer state to open
    } else {
      const answerParagraph = document.querySelector(".answer-paragraph");
      // Answer is open, remove it
      questionIcon.id = "";
      if (answerParagraph !== null) {
        answerParagraph.remove();
      }
      console.log(questionDiv);
      console.log(answerParagraph);
      answerOpen = false; // Set answer state to closed
    }
  });
}


/***/ }),

/***/ "./src/sliderFunction.js":
/*!*******************************!*\
  !*** ./src/sliderFunction.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   slider: () => (/* binding */ slider)
/* harmony export */ });
function slider(logos, icon, dot) {
  let autoChangeInterval = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 8000;
  const container = document.querySelector(".partners-section");
  const sliderBtnLeft = new Image();
  sliderBtnLeft.src = icon;
  sliderBtnLeft.classList.add("slider-btn-left");
  const sliderBtnRight = new Image();
  sliderBtnRight.src = icon;
  sliderBtnRight.classList.add("slider-btn-right");
  const title = document.createElement("p");
  title.classList.add("partner-title");
  title.textContent = "პროექტის პარტნიორები";
  container.appendChild(title);
  const containerDisplay = document.createElement("div");
  containerDisplay.classList.add("partners-display");
  container.appendChild(containerDisplay);
  containerDisplay.appendChild(sliderBtnLeft);
  const sliderDisplayDiv = document.createElement("div");
  containerDisplay.appendChild(sliderDisplayDiv);
  let n = 0;
  sliderPage(n);
  containerDisplay.appendChild(sliderBtnRight);
  function sliderPage(n) {
    const sliderDiv = document.createElement("div");
    sliderDiv.classList.add(`slider-div-${n}`);
    sliderDiv.classList.add("slider-div"); // Adding a common class for styling
    sliderDisplayDiv.appendChild(sliderDiv);

    // Set initial opacity to 0 for fade-in effect
    sliderDiv.style.opacity = 0;
    if (n !== 2) {
      for (let i = 0; i <= 2; i++) {
        sliderDiv.appendChild(logos[n][i]);
      }
    } else {
      sliderDiv.appendChild(logos[2][0]);
    }

    // Triggering reflow to apply initial opacity
    sliderDiv.offsetHeight;

    // Set opacity to 1 for fade-in effect
    sliderDiv.style.opacity = 1;
  }

  // Function to change slide with fade-out and fade-in effect
  function changeSlide(btnRight) {
    const currentSlide = sliderDisplayDiv.lastElementChild;

    // Set opacity to 0 for fade-out effect
    currentSlide.style.opacity = 0;
    setTimeout(() => {
      // Remove the current slide after fade-out
      sliderDisplayDiv.removeChild(currentSlide);

      // Add the new slide with fade-in effect
      if (btnRight) {
        if (n !== 2) {
          n += 1;
        } else {
          n = 0;
        }
      } else if (n !== 0) {
        n -= 1;
      } else {
        n = 2;
      }
      sliderPage(n);
      dotId(n);
    }, 500); // 500ms is the duration of the fade-out transition
  }

  // Function to handle dot indicators
  function dotId(n) {
    for (let i = 0; i <= 2; ++i) {
      const selectedDot = document.querySelector(`.slider-dot-${i}`);
      selectedDot.id = i === n ? "dot-selected" : "";
    }
  }

  // Function to start auto change
  function startAutoChange() {
    return setInterval(() => {
      changeSlide(true); // Auto change to the next slide
    }, autoChangeInterval);
  }
  let autoChangeTimer = startAutoChange(); // Start auto change

  // Event listeners for manual navigation
  sliderBtnRight.addEventListener("click", () => {
    clearInterval(autoChangeTimer); // Stop auto change when manually navigating
    changeSlide(true);
    autoChangeTimer = startAutoChange(); // Resume auto change after manual navigation
  });
  sliderBtnLeft.addEventListener("click", () => {
    clearInterval(autoChangeTimer);
    changeSlide(false);
    autoChangeTimer = startAutoChange();
  });

  // Dot section
  const dotDiv = document.createElement("div");
  dotDiv.classList.add("dot-Div");
  containerDisplay.appendChild(dotDiv);
  for (let i = 0; i <= 2; i++) {
    const sliderDot = new Image();
    sliderDot.src = dot;
    sliderDot.classList.add(`slider-dot-${i}`);
    dotDiv.appendChild(sliderDot);
  }
  dotId(n);
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/tbc-bold.woff2 */ "./src/fonts/tbc-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/tbc-regular-bold.woff2 */ "./src/fonts/tbc-regular-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/tbc-regular.woff2 */ "./src/fonts/tbc-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/fallback.woff2 */ "./src/fonts/fallback.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./photos/title-photo3.jpg */ "./src/photos/title-photo3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "bold";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2");
  font-weight: 900;
  font-style: bold;
}

@font-face {
  font-family: "regular-bold";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff2");
}
@font-face {
  font-family: "regular";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff2");
}
@font-face {
  font-family: "regular";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff2");
}

@font-face {
  font-family: "fallback";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff2");
}

html,
body {
  margin: 0;
  padding: 0;
}

button:hover,
.question-div:hover,
.footer img:hover,
.header img:hover {
  cursor: pointer;
}
:root {
  --white: rgb(224, 224, 224);
  --dark: rgb(26, 30, 31);
  --grey: rgb(43, 43, 43);
  --blue: rgb(0, 163, 224);
  --black: rgb(22, 22, 22);
  --course-card-corner: 5px;
  --width: 980px;
}

.header {
  display: grid;
  grid-template-columns: repeat(2, 490px);
  align-items: center;
  justify-content: center;
  background-color: rgba(26, 30, 31, 0.98);
  color: var(--white);
  height: 100px;
  position: sticky;
  top: 0px;
}

.header img {
  height: 40px;
}
.header button {
  color: var(--white);
}
#selectid-menu {
  color: var(--blue);
}
.header-links {
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-items: end;
  gap: 30px;
}

.title-section {
  height: 352px;
  color: var(--white);
  display: grid;
  grid-template-columns: var(--width);
  align-content: center;
  justify-content: center;
  overflow: hidden;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  background-size: cover;
  background-position: center;
  font-family: "bold", "fallback";
  font-size: 40px;
}
.title-section p {
  margin: 0;
  margin-bottom: 10px;
}

.paragraph-section {
  background-color: var(--grey);
  display: grid;
  grid-template-columns: var(--width);
  justify-content: center;
  justify-items: start;
  color: var(--white);
  padding-top: 50px;
  padding-bottom: 50px;
  font-family: "regular", "fallback";
}
.paragraph-section p {
  font-size: 28px;
  margin: 0;
  padding-bottom: 50px;
}

button {
  transition-duration: 0.4s;
  border: none;
  text-decoration: none;
  background-color: transparent;
  padding: 0;
}

button:hover {
  color: var(--blue);
}

.paragraph-section button,
.question-title-div button {
  color: var(--blue);
  font-size: 20px;
  font-weight: bolder;
  font-family: "regular-bold", "fallback";
}

.paragraph-section button:hover {
  color: rgb(117, 117, 117);
}
.courses-section {
  background-color: var(--black);
  color: var(--white);
  display: grid;
  justify-content: center;
  grid-template-columns: var(--width);
  padding-top: 30px;
  padding-bottom: 35px;
}
.courses-section > span,
.partner-title {
  font-family: "regular", "fallback";
  font-size: 30px;
  padding-bottom: 70px;
}
.card-photo {
  width: 300px;
  border-top-left-radius: var(--course-card-corner);
  border-top-right-radius: var(--course-card-corner);
}
.course-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.course-cards > div {
  outline: 0.5px solid rgba(255, 255, 255, 0.362);
  border-radius: var(--course-card-corner);
  width: 300px;
  height: 414px;
  margin-bottom: 30px;
}

.card {
  display: grid;
  justify-items: start;
}
.card-title {
  font-family: "regular", "fallback";
  font-size: 17px;
  margin-top: 30px;
  margin-bottom: 25px;
}
.card-status {
  font-family: "regular", "fallback";
  font-size: 14px;
}
.card > div > p {
  margin-left: 20px;
}
.card-btn-section {
  padding: 20px;
  display: grid;
  grid-template-columns: 15px 190px;
  align-items: center;
}
.card-btn-section > button {
  color: var(--blue);
  transition-duration: 0.4s;
  border: none;
  text-decoration: none;
  font-family: "regular-bold", "fallback";
  font-size: 16px;
}
.card-btn-section > button:hover {
  color: rgb(71, 125, 200);
}
.card-btn-section > img {
  height: 15px;
}

.questions-section {
  background-color: var(--black);
  color: var(--white);
  padding-top: 50px;
  padding-bottom: 70px;
  display: grid;
  grid-template-columns: var(--width);
  justify-content: center;
}

.question-title-div {
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-items: center;
}
.question-sub-div {
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-items: center;
}
.question-title-div > p {
  font-family: "regular", "fallback";
  font-size: 25px;
}
.question-title-div button:hover {
  color: gray;
}
.question-div {
  border-bottom: 1px solid rgba(255, 255, 255, 0.135);
}

.question-div img,
.slider-btn-left,
.slider-btn-right,
.dot-Div {
  filter: invert(100%) sepia(0%) saturate(7439%) hue-rotate(105deg)
    brightness(113%) contrast(115%);
}
.question-sub-div > p {
  font-family: "regular", "fallback";
  font-size: 18px;
  padding-bottom: 20px;
}
.answer-paragraph {
  font-family: "regular", "fallback";
  line-height: 1.7;
  max-height: auto;
  overflow: hidden;
  transition: max-height 1s ease-in-out;
}

/* footer section */
.footer {
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 490px);
  justify-content: center;
  background-color: rgb(33, 33, 33);
  color: var(--white);
  height: 128px;
  padding-top: 50px;
  padding-bottom: 50px;
}
.footer button {
  color: var(--white);
}
.footer button:hover {
  color: gray;
}
.footer-links {
  display: grid;
  justify-items: end;
  gap: 25px;
}
.footer-links > div {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 15px;
}
.footer-links > button {
  padding: 7px 32px;
  background-color: var(--blue);
  border-radius: 4px;
  font-family: "regular", "fallback";
  font-size: 17px;
  color: var(--white);
}
.footer-links > button:hover {
  background-color: rgb(187, 187, 187);
  color: rgb(46, 46, 46);
}

#opened {
  transform: rotate(180deg);
}
.question-space {
  height: 15px;
}

.answer-paragraph-div {
  margin: 50px 0px 50px 20px;
}

/* slider section */
.partners-section {
  background-color: var(--grey);
  height: 250px;
  padding-bottom: 100px;
  width: 100%;
}
.partner-title {
  display: grid;
  grid-template-columns: var(--width);
  justify-content: center;
  margin: 0;
  padding-top: 50px;
  padding-bottom: 70px;
  color: var(--white);
}
.partners-display {
  display: grid;
  grid-template-columns: var(--width);
  justify-content: center;
  grid-template-columns: 40px 900px 40px;
  justify-items: center;
  align-items: center;
}

.slider-btn-right {
  transform: rotate(180deg);
}
.slider-btn-left {
  transform: rotate(0deg);
}

.slider-btn-left,
.slider-btn-right {
  height: 34px;
}
.slider-div {
  display: grid;
  grid-template-columns: repeat(3, 227px);
  grid-template-rows: 70px;
  align-items: center;
  gap: 100px;
  transition: opacity 0.5s ease-in-out;
}
.slider-div img {
  width: 227px;
}
.slider-div-2 img {
  grid-column: 2 / 3;
}

.dot-Div {
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 15px;
  margin-top: 25px;
}

.dot-Div > img {
  height: 10px;
}

#dot-selected {
  filter: invert(95%) sepia(2%) saturate(10%) hue-rotate(314deg) brightness(40%)
    contrast(92%);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,4DAAkD;EAClD,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;EAC3B,4DAA0D;AAC5D;AACA;EACE,sBAAsB;EACtB,4DAAqD;AACvD;AACA;EACE,sBAAsB;EACtB,4DAAqD;AACvD;;AAEA;EACE,uBAAuB;EACvB,4DAAkD;AACpD;;AAEA;;EAEE,SAAS;EACT,UAAU;AACZ;;AAEA;;;;EAIE,eAAe;AACjB;AACA;EACE,2BAA2B;EAC3B,uBAAuB;EACvB,uBAAuB;EACvB,wBAAwB;EACxB,wBAAwB;EACxB,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,mBAAmB;EACnB,uBAAuB;EACvB,wCAAwC;EACxC,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,QAAQ;AACV;;AAEA;EACE,YAAY;AACd;AACA;EACE,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,sCAAsC;EACtC,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,mCAAmC;EACnC,qBAAqB;EACrB,uBAAuB;EACvB,gBAAgB;EAChB,mDAA4C;EAC5C,sBAAsB;EACtB,2BAA2B;EAC3B,+BAA+B;EAC/B,eAAe;AACjB;AACA;EACE,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,aAAa;EACb,mCAAmC;EACnC,uBAAuB;EACvB,oBAAoB;EACpB,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB;EACpB,kCAAkC;AACpC;AACA;EACE,eAAe;EACf,SAAS;EACT,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;EACrB,6BAA6B;EAC7B,UAAU;AACZ;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,uCAAuC;AACzC;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,mCAAmC;EACnC,iBAAiB;EACjB,oBAAoB;AACtB;AACA;;EAEE,kCAAkC;EAClC,eAAe;EACf,oBAAoB;AACtB;AACA;EACE,YAAY;EACZ,iDAAiD;EACjD,kDAAkD;AACpD;AACA;EACE,aAAa;EACb,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,+CAA+C;EAC/C,wCAAwC;EACxC,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,oBAAoB;AACtB;AACA;EACE,kCAAkC;EAClC,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,kCAAkC;EAClC,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,aAAa;EACb,iCAAiC;EACjC,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;EACrB,uCAAuC;EACvC,eAAe;AACjB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,YAAY;AACd;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB;EACpB,aAAa;EACb,mCAAmC;EACnC,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sCAAsC;EACtC,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,kCAAkC;EAClC,eAAe;AACjB;AACA;EACE,WAAW;AACb;AACA;EACE,mDAAmD;AACrD;;AAEA;;;;EAIE;mCACiC;AACnC;AACA;EACE,kCAAkC;EAClC,eAAe;EACf,oBAAoB;AACtB;AACA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,qCAAqC;AACvC;;AAEA,mBAAmB;AACnB;EACE,mBAAmB;EACnB,aAAa;EACb,uCAAuC;EACvC,uBAAuB;EACvB,iCAAiC;EACjC,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,WAAW;AACb;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,SAAS;AACX;AACA;EACE,aAAa;EACb,sCAAsC;EACtC,SAAS;AACX;AACA;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,kBAAkB;EAClB,kCAAkC;EAClC,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,oCAAoC;EACpC,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,YAAY;AACd;;AAEA;EACE,0BAA0B;AAC5B;;AAEA,mBAAmB;AACnB;EACE,6BAA6B;EAC7B,aAAa;EACb,qBAAqB;EACrB,WAAW;AACb;AACA;EACE,aAAa;EACb,mCAAmC;EACnC,uBAAuB;EACvB,SAAS;EACT,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,mCAAmC;EACnC,uBAAuB;EACvB,sCAAsC;EACtC,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,uBAAuB;AACzB;;AAEA;;EAEE,YAAY;AACd;AACA;EACE,aAAa;EACb,uCAAuC;EACvC,wBAAwB;EACxB,mBAAmB;EACnB,UAAU;EACV,oCAAoC;AACtC;AACA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sCAAsC;EACtC,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE;iBACe;AACjB","sourcesContent":["@font-face {\n  font-family: \"bold\";\n  src: url(\"./fonts/tbc-bold.woff2\") format(\"woff2\");\n  font-weight: 900;\n  font-style: bold;\n}\n\n@font-face {\n  font-family: \"regular-bold\";\n  src: url(\"./fonts/tbc-regular-bold.woff2\") format(\"woff2\");\n}\n@font-face {\n  font-family: \"regular\";\n  src: url(\"./fonts/tbc-regular.woff2\") format(\"woff2\");\n}\n@font-face {\n  font-family: \"regular\";\n  src: url(\"./fonts/tbc-regular.woff2\") format(\"woff2\");\n}\n\n@font-face {\n  font-family: \"fallback\";\n  src: url(\"./fonts/fallback.woff2\") format(\"woff2\");\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbutton:hover,\n.question-div:hover,\n.footer img:hover,\n.header img:hover {\n  cursor: pointer;\n}\n:root {\n  --white: rgb(224, 224, 224);\n  --dark: rgb(26, 30, 31);\n  --grey: rgb(43, 43, 43);\n  --blue: rgb(0, 163, 224);\n  --black: rgb(22, 22, 22);\n  --course-card-corner: 5px;\n  --width: 980px;\n}\n\n.header {\n  display: grid;\n  grid-template-columns: repeat(2, 490px);\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(26, 30, 31, 0.98);\n  color: var(--white);\n  height: 100px;\n  position: sticky;\n  top: 0px;\n}\n\n.header img {\n  height: 40px;\n}\n.header button {\n  color: var(--white);\n}\n#selectid-menu {\n  color: var(--blue);\n}\n.header-links {\n  display: grid;\n  grid-template-columns: repeat(4, auto);\n  justify-items: end;\n  gap: 30px;\n}\n\n.title-section {\n  height: 352px;\n  color: var(--white);\n  display: grid;\n  grid-template-columns: var(--width);\n  align-content: center;\n  justify-content: center;\n  overflow: hidden;\n  background: url(\"./photos/title-photo3.jpg\");\n  background-size: cover;\n  background-position: center;\n  font-family: \"bold\", \"fallback\";\n  font-size: 40px;\n}\n.title-section p {\n  margin: 0;\n  margin-bottom: 10px;\n}\n\n.paragraph-section {\n  background-color: var(--grey);\n  display: grid;\n  grid-template-columns: var(--width);\n  justify-content: center;\n  justify-items: start;\n  color: var(--white);\n  padding-top: 50px;\n  padding-bottom: 50px;\n  font-family: \"regular\", \"fallback\";\n}\n.paragraph-section p {\n  font-size: 28px;\n  margin: 0;\n  padding-bottom: 50px;\n}\n\nbutton {\n  transition-duration: 0.4s;\n  border: none;\n  text-decoration: none;\n  background-color: transparent;\n  padding: 0;\n}\n\nbutton:hover {\n  color: var(--blue);\n}\n\n.paragraph-section button,\n.question-title-div button {\n  color: var(--blue);\n  font-size: 20px;\n  font-weight: bolder;\n  font-family: \"regular-bold\", \"fallback\";\n}\n\n.paragraph-section button:hover {\n  color: rgb(117, 117, 117);\n}\n.courses-section {\n  background-color: var(--black);\n  color: var(--white);\n  display: grid;\n  justify-content: center;\n  grid-template-columns: var(--width);\n  padding-top: 30px;\n  padding-bottom: 35px;\n}\n.courses-section > span,\n.partner-title {\n  font-family: \"regular\", \"fallback\";\n  font-size: 30px;\n  padding-bottom: 70px;\n}\n.card-photo {\n  width: 300px;\n  border-top-left-radius: var(--course-card-corner);\n  border-top-right-radius: var(--course-card-corner);\n}\n.course-cards {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.course-cards > div {\n  outline: 0.5px solid rgba(255, 255, 255, 0.362);\n  border-radius: var(--course-card-corner);\n  width: 300px;\n  height: 414px;\n  margin-bottom: 30px;\n}\n\n.card {\n  display: grid;\n  justify-items: start;\n}\n.card-title {\n  font-family: \"regular\", \"fallback\";\n  font-size: 17px;\n  margin-top: 30px;\n  margin-bottom: 25px;\n}\n.card-status {\n  font-family: \"regular\", \"fallback\";\n  font-size: 14px;\n}\n.card > div > p {\n  margin-left: 20px;\n}\n.card-btn-section {\n  padding: 20px;\n  display: grid;\n  grid-template-columns: 15px 190px;\n  align-items: center;\n}\n.card-btn-section > button {\n  color: var(--blue);\n  transition-duration: 0.4s;\n  border: none;\n  text-decoration: none;\n  font-family: \"regular-bold\", \"fallback\";\n  font-size: 16px;\n}\n.card-btn-section > button:hover {\n  color: rgb(71, 125, 200);\n}\n.card-btn-section > img {\n  height: 15px;\n}\n\n.questions-section {\n  background-color: var(--black);\n  color: var(--white);\n  padding-top: 50px;\n  padding-bottom: 70px;\n  display: grid;\n  grid-template-columns: var(--width);\n  justify-content: center;\n}\n\n.question-title-div {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  justify-content: space-between;\n  align-items: center;\n}\n.question-sub-div {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  justify-content: space-between;\n  align-items: center;\n}\n.question-title-div > p {\n  font-family: \"regular\", \"fallback\";\n  font-size: 25px;\n}\n.question-title-div button:hover {\n  color: gray;\n}\n.question-div {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.135);\n}\n\n.question-div img,\n.slider-btn-left,\n.slider-btn-right,\n.dot-Div {\n  filter: invert(100%) sepia(0%) saturate(7439%) hue-rotate(105deg)\n    brightness(113%) contrast(115%);\n}\n.question-sub-div > p {\n  font-family: \"regular\", \"fallback\";\n  font-size: 18px;\n  padding-bottom: 20px;\n}\n.answer-paragraph {\n  font-family: \"regular\", \"fallback\";\n  line-height: 1.7;\n  max-height: auto;\n  overflow: hidden;\n  transition: max-height 1s ease-in-out;\n}\n\n/* footer section */\n.footer {\n  align-items: center;\n  display: grid;\n  grid-template-columns: repeat(2, 490px);\n  justify-content: center;\n  background-color: rgb(33, 33, 33);\n  color: var(--white);\n  height: 128px;\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n.footer button {\n  color: var(--white);\n}\n.footer button:hover {\n  color: gray;\n}\n.footer-links {\n  display: grid;\n  justify-items: end;\n  gap: 25px;\n}\n.footer-links > div {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  gap: 15px;\n}\n.footer-links > button {\n  padding: 7px 32px;\n  background-color: var(--blue);\n  border-radius: 4px;\n  font-family: \"regular\", \"fallback\";\n  font-size: 17px;\n  color: var(--white);\n}\n.footer-links > button:hover {\n  background-color: rgb(187, 187, 187);\n  color: rgb(46, 46, 46);\n}\n\n#opened {\n  transform: rotate(180deg);\n}\n.question-space {\n  height: 15px;\n}\n\n.answer-paragraph-div {\n  margin: 50px 0px 50px 20px;\n}\n\n/* slider section */\n.partners-section {\n  background-color: var(--grey);\n  height: 250px;\n  padding-bottom: 100px;\n  width: 100%;\n}\n.partner-title {\n  display: grid;\n  grid-template-columns: var(--width);\n  justify-content: center;\n  margin: 0;\n  padding-top: 50px;\n  padding-bottom: 70px;\n  color: var(--white);\n}\n.partners-display {\n  display: grid;\n  grid-template-columns: var(--width);\n  justify-content: center;\n  grid-template-columns: 40px 900px 40px;\n  justify-items: center;\n  align-items: center;\n}\n\n.slider-btn-right {\n  transform: rotate(180deg);\n}\n.slider-btn-left {\n  transform: rotate(0deg);\n}\n\n.slider-btn-left,\n.slider-btn-right {\n  height: 34px;\n}\n.slider-div {\n  display: grid;\n  grid-template-columns: repeat(3, 227px);\n  grid-template-rows: 70px;\n  align-items: center;\n  gap: 100px;\n  transition: opacity 0.5s ease-in-out;\n}\n.slider-div img {\n  width: 227px;\n}\n.slider-div-2 img {\n  grid-column: 2 / 3;\n}\n\n.dot-Div {\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  gap: 15px;\n  margin-top: 25px;\n}\n\n.dot-Div > img {\n  height: 10px;\n}\n\n#dot-selected {\n  filter: invert(95%) sepia(2%) saturate(10%) hue-rotate(314deg) brightness(40%)\n    contrast(92%);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/fallback.woff2":
/*!**********************************!*\
  !*** ./src/fonts/fallback.woff2 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56dd44c8a616a8d7b053.woff2";

/***/ }),

/***/ "./src/fonts/tbc-bold.woff2":
/*!**********************************!*\
  !*** ./src/fonts/tbc-bold.woff2 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d96b096c64788298038.woff2";

/***/ }),

/***/ "./src/fonts/tbc-regular-bold.woff2":
/*!******************************************!*\
  !*** ./src/fonts/tbc-regular-bold.woff2 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce5bb2926208d4c5703f.woff2";

/***/ }),

/***/ "./src/fonts/tbc-regular.woff2":
/*!*************************************!*\
  !*** ./src/fonts/tbc-regular.woff2 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56dd44c8a616a8d7b053.woff2";

/***/ }),

/***/ "./src/photos/card-btn-icon.svg":
/*!**************************************!*\
  !*** ./src/photos/card-btn-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4180cfadb5b43b4f98ee.svg";

/***/ }),

/***/ "./src/photos/courses/advan-python.jpg":
/*!*********************************************!*\
  !*** ./src/photos/courses/advan-python.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dab633b24e74e3c46e4d.jpg";

/***/ }),

/***/ "./src/photos/courses/blockchain.jpg":
/*!*******************************************!*\
  !*** ./src/photos/courses/blockchain.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e449eaeda229f114138c.jpg";

/***/ }),

/***/ "./src/photos/courses/cybersecurity.jpg":
/*!**********************************************!*\
  !*** ./src/photos/courses/cybersecurity.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56d8268918d037b9d196.jpg";

/***/ }),

/***/ "./src/photos/courses/devops.jpg":
/*!***************************************!*\
  !*** ./src/photos/courses/devops.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d9c61ca08855466c84d.jpg";

/***/ }),

/***/ "./src/photos/courses/intro-python.jpg":
/*!*********************************************!*\
  !*** ./src/photos/courses/intro-python.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fca87e9d965c68b9be52.jpg";

/***/ }),

/***/ "./src/photos/courses/iso.jpg":
/*!************************************!*\
  !*** ./src/photos/courses/iso.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "755317f22dbef8034a72.jpg";

/***/ }),

/***/ "./src/photos/courses/react.jpg":
/*!**************************************!*\
  !*** ./src/photos/courses/react.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b05dca034a68a67b28c0.jpg";

/***/ }),

/***/ "./src/photos/courses/security.jpg":
/*!*****************************************!*\
  !*** ./src/photos/courses/security.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fad1b75994419d05e6f8.jpg";

/***/ }),

/***/ "./src/photos/courses/tot.jpg":
/*!************************************!*\
  !*** ./src/photos/courses/tot.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c46d8936bf8bcc9495d7.jpg";

/***/ }),

/***/ "./src/photos/footer/fb.png":
/*!**********************************!*\
  !*** ./src/photos/footer/fb.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad8284e4ad573a7c8e34.png";

/***/ }),

/***/ "./src/photos/footer/tbc.png":
/*!***********************************!*\
  !*** ./src/photos/footer/tbc.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5e45513fa690d90ca5d.png";

/***/ }),

/***/ "./src/photos/footer/youtube.png":
/*!***************************************!*\
  !*** ./src/photos/footer/youtube.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c9d12a72cdf417d71a3.png";

/***/ }),

/***/ "./src/photos/partners/slid1.png":
/*!***************************************!*\
  !*** ./src/photos/partners/slid1.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34b1b5f74cb20704a036.png";

/***/ }),

/***/ "./src/photos/partners/slid2.png":
/*!***************************************!*\
  !*** ./src/photos/partners/slid2.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a5db590373e53093b5a.png";

/***/ }),

/***/ "./src/photos/partners/slid3.png":
/*!***************************************!*\
  !*** ./src/photos/partners/slid3.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fe2d8cf54d3daad5a2a.png";

/***/ }),

/***/ "./src/photos/partners/slid4.png":
/*!***************************************!*\
  !*** ./src/photos/partners/slid4.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96d6bd224ecefbe813f0.png";

/***/ }),

/***/ "./src/photos/partners/slid5.png":
/*!***************************************!*\
  !*** ./src/photos/partners/slid5.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "444b5f15d7fd3aea563e.png";

/***/ }),

/***/ "./src/photos/partners/slid6.png":
/*!***************************************!*\
  !*** ./src/photos/partners/slid6.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "128e5ea7d0370b896cfd.png";

/***/ }),

/***/ "./src/photos/partners/slid7.png":
/*!***************************************!*\
  !*** ./src/photos/partners/slid7.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e537c0a21d849b64b191.png";

/***/ }),

/***/ "./src/photos/question-expend.svg":
/*!****************************************!*\
  !*** ./src/photos/question-expend.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "730839144c126385607b.svg";

/***/ }),

/***/ "./src/photos/slider-dot.svg":
/*!***********************************!*\
  !*** ./src/photos/slider-dot.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e15b8cffef131911431f.svg";

/***/ }),

/***/ "./src/photos/sliderIcon.svg":
/*!***********************************!*\
  !*** ./src/photos/sliderIcon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6a7a9f38da146eed22f9.svg";

/***/ }),

/***/ "./src/photos/tbcAcdLogo.svg":
/*!***********************************!*\
  !*** ./src/photos/tbcAcdLogo.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "484903aea8b060ccc935.svg";

/***/ }),

/***/ "./src/photos/title-photo3.jpg":
/*!*************************************!*\
  !*** ./src/photos/title-photo3.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de28d55ac0bf32737657.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domContent */ "./src/domContent.js");


(0,_domContent__WEBPACK_IMPORTED_MODULE_1__.DomContent)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLFFBQVEsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sUUFBUSxLQUFLLE9BQU8sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZ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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNxQjtBQUUxQ3hGLHVEQUFVLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvY2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZG9tQ29udGVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9xYUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc2xpZGVyRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2FyZChpbWFnZSwgdGl0bGUsIHN0YXR1cywgYnV0dG9uLCBpY29uKSB7XG4gIGNvbnN0IGNvdXJzZXNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdXJzZS1jYXJkc1wiKTtcbiAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmREaXYuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGNvdXJzZXNEaXYuYXBwZW5kQ2hpbGQoY2FyZERpdik7XG5cbiAgY29uc3QgY2FyZENvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IGNhcmRQaG90byA9IG5ldyBJbWFnZSgpO1xuICBjYXJkUGhvdG8uc3JjID0gaW1hZ2U7XG4gIGNhcmRQaG90by5jbGFzc0xpc3QuYWRkKFwiY2FyZC1waG90b1wiKTtcblxuICBjb25zdCBjYXJkQnRuSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBjYXJkQnRuSWNvbi5zcmMgPSBpY29uO1xuXG4gIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjYXJkVGl0bGUuY2xhc3NMaXN0LmFkZChcImNhcmQtdGl0bGVcIik7XG4gIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IGAke3RpdGxlfWA7XG4gIGNvbnN0IGNhcmRTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY2FyZFN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiY2FyZC1zdGF0dXNcIik7XG4gIGNhcmRTdGF0dXMudGV4dENvbnRlbnQgPSBgJHtzdGF0dXN9YDtcblxuICBjb25zdCBjYXJkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FyZEJ1dHRvbi50ZXh0Q29udGVudCA9IGAke2J1dHRvbn1gO1xuXG4gIGNvbnN0IGNhcmRCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkQnRuRGl2LmNsYXNzTGlzdC5hZGQoXCJjYXJkLWJ0bi1zZWN0aW9uXCIpO1xuXG4gIGNhcmREaXYuYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnREaXYpO1xuICBjYXJkQ29udGVudERpdi5hcHBlbmRDaGlsZChjYXJkUGhvdG8pO1xuICBjYXJkQ29udGVudERpdi5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xuICBjYXJkQ29udGVudERpdi5hcHBlbmRDaGlsZChjYXJkU3RhdHVzKTtcblxuICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmRCdG5EaXYpO1xuICBjYXJkQnRuRGl2LmFwcGVuZENoaWxkKGNhcmRCdG5JY29uKTtcbiAgY2FyZEJ0bkRpdi5hcHBlbmRDaGlsZChjYXJkQnV0dG9uKTtcbn1cblxuZXhwb3J0IHsgY2FyZCB9O1xuIiwiLy8gaW1wb3J0IHRpdGxlUGhvdG9JbXBvcnQgZnJvbSBcIi4vcGhvdG9zL3RpdGxlLXBob3RvLmpwZ1wiO1xuaW1wb3J0IGlvcyBmcm9tIFwiLi9waG90b3MvY291cnNlcy9pc28uanBnXCI7XG5pbXBvcnQgcmVhY3RlIGZyb20gXCIuL3Bob3Rvcy9jb3Vyc2VzL3JlYWN0LmpwZ1wiO1xuaW1wb3J0IGludFB5dGhvbiBmcm9tIFwiLi9waG90b3MvY291cnNlcy9pbnRyby1weXRob24uanBnXCI7XG5pbXBvcnQgYWR2UHl0aG9uIGZyb20gXCIuL3Bob3Rvcy9jb3Vyc2VzL2FkdmFuLXB5dGhvbi5qcGdcIjtcbmltcG9ydCBjeWJlcnNlY3VyaXR5IGZyb20gXCIuL3Bob3Rvcy9jb3Vyc2VzL2N5YmVyc2VjdXJpdHkuanBnXCI7XG5pbXBvcnQgdG90IGZyb20gXCIuL3Bob3Rvcy9jb3Vyc2VzL3RvdC5qcGdcIjtcbmltcG9ydCBibG9ja2NoYWluIGZyb20gXCIuL3Bob3Rvcy9jb3Vyc2VzL2Jsb2NrY2hhaW4uanBnXCI7XG5pbXBvcnQgZGV2b3BzIGZyb20gXCIuL3Bob3Rvcy9jb3Vyc2VzL2Rldm9wcy5qcGdcIjtcbmltcG9ydCBzZWN1cml0eSBmcm9tIFwiLi9waG90b3MvY291cnNlcy9zZWN1cml0eS5qcGdcIjtcbmltcG9ydCBjYXJkSWNvbiBmcm9tIFwiLi9waG90b3MvY2FyZC1idG4taWNvbi5zdmdcIjtcbmltcG9ydCB7IGNhcmQgfSBmcm9tIFwiLi9jYXJkRmFjdG9yeVwiO1xuaW1wb3J0IHRiYyBmcm9tIFwiLi9waG90b3MvZm9vdGVyL3RiYy5wbmdcIjtcbmltcG9ydCBmYiBmcm9tIFwiLi9waG90b3MvZm9vdGVyL2ZiLnBuZ1wiO1xuaW1wb3J0IHlvdXR1YmUgZnJvbSBcIi4vcGhvdG9zL2Zvb3Rlci95b3V0dWJlLnBuZ1wiO1xuaW1wb3J0IHRiY0FjZExvZ28gZnJvbSBcIi4vcGhvdG9zL3RiY0FjZExvZ28uc3ZnXCI7XG5pbXBvcnQgeyBxdWVzdGlvbnNBbmRBbnN3ZXJzIH0gZnJvbSBcIi4vcWFGYWN0b3J5XCI7XG5pbXBvcnQgcXVlc3Rpb25JY29uIGZyb20gXCIuL3Bob3Rvcy9xdWVzdGlvbi1leHBlbmQuc3ZnXCI7XG5pbXBvcnQgc2xpZGVySWNvbiBmcm9tIFwiLi9waG90b3Mvc2xpZGVySWNvbi5zdmdcIjtcbmltcG9ydCBzbGlkZXJEb3QgZnJvbSBcIi4vcGhvdG9zL3NsaWRlci1kb3Quc3ZnXCI7XG5pbXBvcnQgeyBzbGlkZXIgfSBmcm9tIFwiLi9zbGlkZXJGdW5jdGlvblwiO1xuaW1wb3J0IHNsaWRlMSBmcm9tIFwiLi9waG90b3MvcGFydG5lcnMvc2xpZDEucG5nXCI7XG5pbXBvcnQgc2xpZGUyIGZyb20gXCIuL3Bob3Rvcy9wYXJ0bmVycy9zbGlkMi5wbmdcIjtcbmltcG9ydCBzbGlkZTMgZnJvbSBcIi4vcGhvdG9zL3BhcnRuZXJzL3NsaWQzLnBuZ1wiO1xuaW1wb3J0IHNsaWRlNCBmcm9tIFwiLi9waG90b3MvcGFydG5lcnMvc2xpZDQucG5nXCI7XG5pbXBvcnQgc2xpZGU1IGZyb20gXCIuL3Bob3Rvcy9wYXJ0bmVycy9zbGlkNS5wbmdcIjtcbmltcG9ydCBzbGlkZTYgZnJvbSBcIi4vcGhvdG9zL3BhcnRuZXJzL3NsaWQ2LnBuZ1wiO1xuaW1wb3J0IHNsaWRlNyBmcm9tIFwiLi9waG90b3MvcGFydG5lcnMvc2xpZDcucG5nXCI7XG5cbmZ1bmN0aW9uIERvbUNvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRhaW5lclNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2l0ZS1jb250YWluZXJcIik7XG5cbiAgLy8gbWFraW5nIG1haW4gZGl2c1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1zZWN0aW9uXCIpO1xuXG4gIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKFwicGFyYWdyYXBoLXNlY3Rpb25cIik7XG5cbiAgY29uc3QgY291cnNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvdXJzZXMuY2xhc3NMaXN0LmFkZChcImNvdXJzZXMtc2VjdGlvblwiKTtcblxuICBjb25zdCBwYXJ0bmVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBhcnRuZXJzLmNsYXNzTGlzdC5hZGQoXCJwYXJ0bmVycy1zZWN0aW9uXCIpO1xuXG4gIGNvbnN0IHF1ZXN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHF1ZXN0aW9ucy5jbGFzc0xpc3QuYWRkKFwicXVlc3Rpb25zLXNlY3Rpb25cIik7XG5cbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5cbiAgY29udGFpbmVyU2VsZWN0LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRhaW5lclNlbGVjdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnRhaW5lclNlbGVjdC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICBjb250YWluZXJTZWxlY3QuYXBwZW5kQ2hpbGQoY291cnNlcyk7XG4gIGNvbnRhaW5lclNlbGVjdC5hcHBlbmRDaGlsZChwYXJ0bmVycyk7XG4gIGNvbnRhaW5lclNlbGVjdC5hcHBlbmRDaGlsZChxdWVzdGlvbnMpO1xuICBjb250YWluZXJTZWxlY3QuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAvLyBkb20gaGVhZGVyIGNvbnRlbnRcbiAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xuICBsb2dvLnNyYyA9IHRiY0FjZExvZ287XG5cbiAgY29uc3QgaGVhZGVyTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJMaW5rcy5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWxpbmtzXCIpO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckxpbmtzKTtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWFpbi50ZXh0Q29udGVudCA9IFwi4YOb4YOX4YOQ4YOV4YOQ4YOg4YOYXCI7XG5cbiAgY29uc3QgdGJjSXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0YmNJdC50ZXh0Q29udGVudCA9IFwiVEJDIElUXCI7XG5cbiAgY29uc3QgdGJjWHVzYWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGJjWHVzYWlkLnRleHRDb250ZW50ID0gXCJUQkMgeCBVU0FJRFwiO1xuICB0YmNYdXNhaWQuaWQgPSBcInNlbGVjdGlkLW1lbnVcIjtcblxuICBjb25zdCByaXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmlzay50ZXh0Q29udGVudCA9IFwi4YOg4YOY4YOh4YOZ4YOU4YOR4YOYXCI7XG5cbiAgaGVhZGVyTGlua3MuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGhlYWRlckxpbmtzLmFwcGVuZENoaWxkKHRiY0l0KTtcbiAgaGVhZGVyTGlua3MuYXBwZW5kQ2hpbGQodGJjWHVzYWlkKTtcbiAgaGVhZGVyTGlua3MuYXBwZW5kQ2hpbGQocmlzayk7XG5cbiAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRpdGxlVGV4dC50ZXh0Q29udGVudCA9IFwiVEJDIHggVVNBSURcIjtcblxuICBjb25zdCB0aXRsZVRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRpdGxlVGV4dDIudGV4dENvbnRlbnQgPSBcIuGDouGDlOGDpeGDnOGDneGDmuGDneGDkuGDmOGDo+GDoOGDmCDhg5Lhg5Dhg5zhg5Dhg5fhg5rhg5Thg5Hhg5jhg6Hhg5fhg5Xhg5jhg6FcIjtcblxuICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQyKTtcblxuICAvLyBwYXJhZ3JhcGggc2VjdGlvbiBkb21cbiAgY29uc3QgcGFyYWdyYXBoVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwYXJhZ3JhcGhUZXh0LnRleHRDb250ZW50ID1cbiAgICBcIuKAniBUQkMgeCBVU0FJRCAtIOGDouGDlOGDpeGDnOGDneGDmuGDneGDkuGDmOGDo+GDoOGDmCDhg5Lhg5Dhg5zhg5Dhg5fhg5rhg5Thg5Hhg5jhg6Hhg5fhg5Xhg5jhg6Eg4oCcIOGDnuGDoOGDneGDkuGDoOGDkOGDm+GDkCAg4YOh4YOQ4YOY4YOc4YOk4YOd4YOg4YOb4YOQ4YOq4YOY4YOdIOGDouGDlOGDpeGDnOGDneGDmuGDneGDkuGDmOGDlOGDkeGDmOGDlyDhg5Phg5Dhg5jhg5zhg6Lhg5Thg6Dhg5Thg6Hhg5Thg5Hhg6Phg5og4YOQ4YOT4YOQ4YOb4YOY4YOQ4YOc4YOU4YOR4YOhIOGDkuGDl+GDkOGDleGDkOGDluGDneGDkeGDlyDhg6Hhg6Dhg6Phg5rhg5Dhg5Mg4YOT4YOQ4YOk4YOY4YOc4YOQ4YOc4YOh4YOU4YOR4YOj4YOaIOGDneGDnOGDmuGDkOGDmOGDnCDhg6Hhg5Dhg5Lhg5Dhg5zhg5vhg5Dhg5zhg5Dhg5fhg5rhg5Thg5Hhg5rhg50g4YOe4YOg4YOQ4YOl4YOi4YOY4YOZ4YOj4YOaIOGDmeGDo+GDoOGDoeGDlOGDkeGDoSAg4YOh4YOu4YOV4YOQ4YOT4YOQ4YOh4YOu4YOV4YOQIElDVCDhg5vhg5jhg5vhg5Dhg6Dhg5fhg6Phg5rhg5Thg5Hhg5jhg5cuIOGDrOGDkOGDoOGDm+GDkOGDouGDlOGDkeGDo+GDmiDhg5nhg6Phg6Dhg6Hhg5Phg5Dhg5vhg5fhg5Dhg5Xhg6Dhg5Thg5Hhg6Phg5rhg5Thg5Hhg6Eg4YOU4YOr4YOa4YOU4YOV4YOQ4YOXIOGDqOGDlOGDoeGDkOGDq+GDmuGDlOGDkeGDmuGDneGDkeGDkCDhg5Phg5Dhg6Hhg5Dhg6Xhg5vhg5Phg5zhg5Thg5wg4YOX4YOY4YOR4YOY4YOh4YOY4YOh4YOQIOGDk+GDkCDhg5vhg5jhg6Eg4YOe4YOQ4YOg4YOi4YOc4YOY4YOd4YOgIOGDmeGDneGDm+GDnuGDkOGDnOGDmOGDlOGDkeGDqOGDmC5cIjtcblxuICBjb25zdCBwYXJhZ3JhcGhMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcGFyYWdyYXBoTGluay50ZXh0Q29udGVudCA9IFwi4YOS4YOQ4YOY4YOS4YOUIOGDm+GDlOGDouGDmFwiO1xuXG4gIHBhcmFncmFwaC5hcHBlbmRDaGlsZChwYXJhZ3JhcGhUZXh0KTtcbiAgcGFyYWdyYXBoLmFwcGVuZENoaWxkKHBhcmFncmFwaExpbmspO1xuXG4gIC8vIGNhcmRzIHNlY3Rpb25cbiAgY29uc3QgY291cnNlVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY291cnNlVGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcImNvdXJzZXMtdGl0bGVcIik7XG4gIGNvdXJzZVRpdGxlRGl2LnRleHRDb250ZW50ID0gXCLhg6Hhg5Dhg6Hhg6zhg5Dhg5Xhg5rhg50g4YOZ4YOj4YOg4YOh4YOU4YOR4YOYXCI7XG4gIGNvdXJzZXMuYXBwZW5kQ2hpbGQoY291cnNlVGl0bGVEaXYpO1xuICAoXCIuL3Bob3Rvcy9wYXJ0bmVycy9zbGlkMS5wbmdcIik7XG4gIGNvbnN0IGNvdXJzZUNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb3Vyc2VDYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJjb3Vyc2UtY2FyZHNcIik7XG4gIGNvdXJzZXMuYXBwZW5kQ2hpbGQoY291cnNlQ2FyZERpdik7XG5cbiAgY29uc3QgaXNvQ2FyZCA9IGNhcmQoXG4gICAgaW9zLFxuICAgIFwiaU9TIERldmVsb3BtZW50XCIsXG4gICAgXCLhg6Dhg5Thg5Lhg5jhg6Hhg6Lhg6Dhg5Dhg6rhg5jhg5Ag4YOT4YOQ4YOh4YOg4YOj4YOa4YOU4YOR4YOj4YOa4YOY4YOQXCIsXG4gICAgXCLhg5nhg6Phg6Dhg6Hhg5jhg6Eg4YOT4YOU4YOi4YOQ4YOa4YOU4YOR4YOYXCIsXG4gICAgY2FyZEljb24sXG4gICk7XG4gIGNvbnN0IHJlYWN0Q2FyZCA9IGNhcmQoXG4gICAgcmVhY3RlLFxuICAgIFwiUmVhY3RlXCIsXG4gICAgXCLhg6Dhg5Thg5Lhg5jhg6Hhg6Lhg6Dhg5Dhg6rhg5jhg5Ag4YOT4YOQ4YOh4YOg4YOj4YOa4YOU4YOR4YOj4YOa4YOY4YOQXCIsXG4gICAgXCLhg5nhg6Phg6Dhg6Hhg5jhg6Eg4YOT4YOU4YOi4YOQ4YOa4YOU4YOR4YOYXCIsXG4gICAgY2FyZEljb24sXG4gICk7XG4gIGNvbnN0IGludHJQeXRob25DYXJkID0gY2FyZChcbiAgICBpbnRQeXRob24sXG4gICAgXCJJbnRybyB0byBQeXRob25cIixcbiAgICBcIuGDoOGDlOGDkuGDmOGDoeGDouGDoOGDkOGDquGDmOGDkCDhg5Phg5Dhg6Hhg6Dhg6Phg5rhg5Thg5Hhg6Phg5rhg5jhg5BcIixcbiAgICBcIuGDmeGDo+GDoOGDoeGDmOGDoSDhg5Phg5Thg6Lhg5Dhg5rhg5Thg5Hhg5hcIixcbiAgICBjYXJkSWNvbixcbiAgKTtcbiAgY29uc3QgYWR2YW5jZWRQeXRob25DYXJkID0gY2FyZChcbiAgICBhZHZQeXRob24sXG4gICAgXCJBZHZhbmNlZCBQeXRob25cIixcbiAgICBcIuGDoOGDlOGDkuGDmOGDoeGDouGDoOGDkOGDquGDmOGDkCDhg5Phg5Dhg6Hhg6Dhg6Phg5rhg5Thg5Hhg6Phg5rhg5jhg5BcIixcbiAgICBcIuGDmeGDo+GDoOGDoeGDmOGDoSDhg5Phg5Thg6Lhg5Dhg5rhg5Thg5Hhg5hcIixcbiAgICBjYXJkSWNvbixcbiAgKTtcbiAgY29uc3QgY3liZXJzZWN1cml0eUNhcmQgPSBjYXJkKFxuICAgIGN5YmVyc2VjdXJpdHksXG4gICAgXCJBZHZhbmNlZCBDeWJlcnNlY3VyaXR5IENvdXJzZVwiLFxuICAgIFwi4YOg4YOU4YOS4YOY4YOh4YOi4YOg4YOQ4YOq4YOY4YOQIOGDk+GDkOGDoeGDoOGDo+GDmuGDlOGDkeGDo+GDmuGDmOGDkFwiLFxuICAgIFwi4YOZ4YOj4YOg4YOh4YOY4YOhIOGDk+GDlOGDouGDkOGDmuGDlOGDkeGDmFwiLFxuICAgIGNhcmRJY29uLFxuICApO1xuICBjb25zdCB0b3RDYXJkID0gY2FyZChcbiAgICB0b3QsXG4gICAgXCJUb1QgLSBUcmFpbmluZyBvZiBUcmFpbmVyc1wiLFxuICAgIFwi4YOg4YOU4YOS4YOY4YOh4YOi4YOg4YOQ4YOq4YOY4YOQIOGDk+GDkOGDoeGDoOGDo+GDmuGDlOGDkeGDo+GDmuGDmOGDkFwiLFxuICAgIFwi4YOZ4YOj4YOg4YOh4YOY4YOhIOGDk+GDlOGDouGDkOGDmuGDlOGDkeGDmFwiLFxuICAgIGNhcmRJY29uLFxuICApO1xuICBjb25zdCBCbG9ja2NoYWluQ2FyZCA9IGNhcmQoXG4gICAgYmxvY2tjaGFpbixcbiAgICBcIkJsb2NrY2hhaW5cIixcbiAgICBcIuGDoOGDlOGDkuGDmOGDoeGDouGDoOGDkOGDquGDmOGDkCDhg5Phg5Dhg6Hhg6Dhg6Phg5rhg5Thg5Hhg6Phg5rhg5jhg5BcIixcbiAgICBcIuGDmeGDo+GDoOGDoeGDmOGDoSDhg5Phg5Thg6Lhg5Dhg5rhg5Thg5Hhg5hcIixcbiAgICBjYXJkSWNvbixcbiAgKTtcbiAgY29uc3QgRGV2T3BzQ2FyZCA9IGNhcmQoXG4gICAgZGV2b3BzLFxuICAgIFwiRGV2T3BzXCIsXG4gICAgXCLhg6Dhg5Thg5Lhg5jhg6Hhg6Lhg6Dhg5Dhg6rhg5jhg5Ag4YOT4YOQ4YOh4YOg4YOj4YOa4YOU4YOR4YOj4YOa4YOY4YOQXCIsXG4gICAgXCLhg5nhg6Phg6Dhg6Hhg5jhg6Eg4YOT4YOU4YOi4YOQ4YOa4YOU4YOR4YOYXCIsXG4gICAgY2FyZEljb24sXG4gICk7XG4gIGNvbnN0IFNlY3VyaXR5Q2FyZCA9IGNhcmQoXG4gICAgc2VjdXJpdHksXG4gICAgXCJJbmZvcm1hdGlvbiBTZWN1cml0eSBHb3Zlcm5hbmNlXCIsXG4gICAgXCLhg6Dhg5Thg5Lhg5jhg6Hhg6Lhg6Dhg5Dhg6rhg5jhg5Ag4YOT4YOQ4YOh4YOg4YOj4YOa4YOU4YOR4YOj4YOa4YOY4YOQXCIsXG4gICAgXCLhg5nhg6Phg6Dhg6Hhg5jhg6Eg4YOT4YOU4YOi4YOQ4YOa4YOU4YOR4YOYXCIsXG4gICAgY2FyZEljb24sXG4gICk7XG5cbiAgLy8gc2xpZGVyIHNlY3Rpb25cblxuICAvLyBEZWZpbmUgaW1hZ2UgcGF0aHNcbiAgY29uc3Qgc2xpZDEgPSBuZXcgSW1hZ2UoKTtcbiAgc2xpZDEuc3JjID0gc2xpZGUxO1xuXG4gIGNvbnN0IHNsaWQyID0gbmV3IEltYWdlKCk7XG4gIHNsaWQyLnNyYyA9IHNsaWRlMjtcblxuICBjb25zdCBzbGlkMyA9IG5ldyBJbWFnZSgpO1xuICBzbGlkMy5zcmMgPSBzbGlkZTM7XG5cbiAgY29uc3Qgc2xpZDQgPSBuZXcgSW1hZ2UoKTtcbiAgc2xpZDQuc3JjID0gc2xpZGU0O1xuXG4gIGNvbnN0IHNsaWQ1ID0gbmV3IEltYWdlKCk7XG4gIHNsaWQ1LnNyYyA9IHNsaWRlNTtcblxuICBjb25zdCBzbGlkNiA9IG5ldyBJbWFnZSgpO1xuICBzbGlkNi5zcmMgPSBzbGlkZTY7XG5cbiAgY29uc3Qgc2xpZDcgPSBuZXcgSW1hZ2UoKTtcbiAgc2xpZDcuc3JjID0gc2xpZGU3O1xuXG4gIGNvbnN0IGxvZ29zID0gW1tzbGlkMSwgc2xpZDIsIHNsaWQzXSwgW3NsaWQ0LCBzbGlkNSwgc2xpZDZdLCBbc2xpZDddXTtcbiAgc2xpZGVyKGxvZ29zLCBzbGlkZXJJY29uLCBzbGlkZXJEb3QpO1xuXG4gIC8vIHF1ZXN0aW9uIHNlY3Rpb25cblxuICBjb25zdCBxdWVzdGlvblRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcXVlc3Rpb25UaXRsZURpdi5jbGFzc0xpc3QuYWRkKFwicXVlc3Rpb24tdGl0bGUtZGl2XCIpO1xuICBjb25zdCBxdWVzdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHF1ZXN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBcIuGDruGDqOGDmOGDoOGDkOGDkyDhg5Phg5Dhg6Hhg5vhg6Phg5rhg5gg4YOZ4YOY4YOX4YOu4YOV4YOU4YOR4YOYXCI7XG5cbiAgY29uc3QgcXVlc3Rpb25UaXRsZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHF1ZXN0aW9uVGl0bGVCdG4udGV4dENvbnRlbnQgPSBcIuGDp+GDleGDlOGDmuGDkCDhg5nhg5jhg5fhg67hg5Xhg5BcIjtcblxuICBxdWVzdGlvbnMuYXBwZW5kQ2hpbGQocXVlc3Rpb25UaXRsZURpdik7XG4gIHF1ZXN0aW9uVGl0bGVEaXYuYXBwZW5kQ2hpbGQocXVlc3Rpb25UaXRsZSk7XG4gIHF1ZXN0aW9uVGl0bGVEaXYuYXBwZW5kQ2hpbGQocXVlc3Rpb25UaXRsZUJ0bik7XG5cbiAgY29uc3QgcXVlc3Rpb24xID0gcXVlc3Rpb25zQW5kQW5zd2VycyhcbiAgICBcIuGDoOGDneGDkuGDneGDoCDhg67hg5Phg5Thg5Hhg5Ag4YOZ4YOj4YOg4YOh4YOU4YOR4YOW4YOUIOGDoOGDlOGDkuGDmOGDoeGDouGDoOGDkOGDquGDmOGDkCDhg5Phg5Ag4YOo4YOU4YOg4YOp4YOU4YOV4YOQP1wiLFxuICAgIHF1ZXN0aW9uSWNvbixcbiAgICBcImFuc3dlciBJXCIsXG4gICk7XG5cbiAgY29uc3QgcXVlc3Rpb24yID0gcXVlc3Rpb25zQW5kQW5zd2VycyhcbiAgICBcIuGDqOGDlOGDm+GDmOGDq+GDmuGDmOGDkCDhg5fhg6Mg4YOQ4YOg4YOQIOGDlOGDoOGDl+GDluGDlCDhg5vhg5Thg6Ig4YOZ4YOj4YOg4YOh4YOW4YOUIOGDoOGDlOGDkuGDmOGDoeGDouGDoOGDkOGDquGDmOGDkD9cIixcbiAgICBxdWVzdGlvbkljb24sXG4gICAgXCJUQkMgWCBVU0FJRCDhg6Lhg5Thg6Xhg5zhg53hg5rhg53hg5Lhg5jhg6Phg6Dhg5gg4YOS4YOQ4YOc4YOQ4YOX4YOa4YOU4YOR4YOY4YOh4YOX4YOV4YOY4YOhIOGDnuGDoOGDneGDkuGDoOGDkOGDm+GDkOGDqOGDmCDhg5fhg5jhg5fhg53hg5Thg6Phg5og4YOZ4YOQ4YOc4YOT4YOY4YOT4YOQ4YOi4YOhIOGDkOGDpeGDleGDoSDhg5vhg67hg53hg5rhg53hg5Mg4YOU4YOg4YOX4YOYIOGDmeGDo+GDoOGDoeGDmOGDoSDhg5Lhg5Dhg5Xhg5rhg5jhg6Eg4YOo4YOU4YOh4YOQ4YOr4YOa4YOU4YOR4YOa4YOd4YOR4YOQLiDhg5Lhg5Dhg6Dhg5Phg5AgSW5mb3JtYXRpb24gU2VjdXJpdHkg4YOT4YOQIFB5dGhvbiDhg5nhg6Phg6Dhg6Hhg5Thg5Hhg5jhg6Hhg5AsIOGDoeGDkOGDk+GDkOGDqiBCYXNpYyDhg5Phg53hg5zhg5jhg6Eg4YOS4YOQ4YOV4YOa4YOY4YOhIOGDqOGDlOGDm+GDk+GDlOGDkiDhg6jhg5Thg6Hhg5Dhg6vhg5rhg5Thg5Hhg5Thg5rhg5jhg5Ag4YOh4YOs4YOQ4YOV4YOa4YOY4YOhIOGDkuGDkOGDkuGDoOGDq+GDlOGDmuGDlOGDkeGDkCBBZHZhbmNlIOGDk+GDneGDnOGDlOGDluGDlC5cIixcbiAgKTtcbiAgY29uc3QgcXVlc3Rpb24zID0gcXVlc3Rpb25zQW5kQW5zd2VycyhcbiAgICBcIuGDoOGDkCDhg6bhg5jhg6Dhg6Eg4YOh4YOs4YOQ4YOV4YOa4YOQIOGDnuGDoOGDneGDkuGDoOGDkOGDm+GDmOGDoSDhg6Thg5Dhg6Dhg5Lhg5rhg5Thg5Hhg6jhg5g/XCIsXG4gICAgcXVlc3Rpb25JY29uLFxuICAgIFwi4YOe4YOg4YOd4YOS4YOg4YOQ4YOb4YOY4YOhIOGDpOGDkOGDoOGDkuGDmuGDlOGDkeGDqOGDmCDhg5nhg6Phg6Dhg6Hhg5Thg5Hhg5bhg5Qg4YOh4YOs4YOQ4YOV4YOa4YOQIOGDoeGDoOGDo+GDmuGDmOGDkOGDkyDhg5Phg5Dhg6Thg5jhg5zhg5Dhg5zhg6Hhg5Thg5Hhg6Phg5rhg5jhg5Ag4YOX4YOY4YOR4YOY4YOh4YOYIOGDkeGDkOGDnOGDmeGDmOGDoeGDkCDhg5Phg5AgVVNBSUQt4YOY4YOhIOGDm+GDmOGDlOGDoC5cIixcbiAgKTtcblxuICAvLyBmb290ZXIgc2VjdGlvblxuICBjb25zdCBmb290ZXJUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyVGV4dERpdi5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLXRleHRcIik7XG5cbiAgY29uc3QgZm9vdGVyTG9nbyA9IG5ldyBJbWFnZSgpO1xuICBmb290ZXJMb2dvLnNyYyA9IHRiYztcblxuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvb3RlclRleHQudGV4dENvbnRlbnQgPSBcIsKpIDIwMjMg4YOn4YOV4YOU4YOa4YOQIOGDo+GDpOGDmuGDlOGDkeGDkCDhg5Phg5Dhg6rhg6Phg5rhg5jhg5BcIjtcblxuICBjb25zdCBmb290ZXJUZXh0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZm9vdGVyVGV4dEJ0bi50ZXh0Q29udGVudCA9IFwi4YOs4YOU4YOh4YOU4YOR4YOYIOGDk+GDkCDhg57hg5jhg6Dhg53hg5Hhg5Thg5Hhg5hcIjtcblxuICBmb290ZXJUZXh0RGl2LmFwcGVuZENoaWxkKGZvb3RlckxvZ28pO1xuICBmb290ZXJUZXh0RGl2LmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuICBmb290ZXJUZXh0RGl2LmFwcGVuZENoaWxkKGZvb3RlclRleHRCdG4pO1xuXG4gIGNvbnN0IGZvb3RlckxpbmtzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyTGlua3NEaXYuY2xhc3NMaXN0LmFkZChcImZvb3Rlci1saW5rc1wiKTtcblxuICBjb25zdCBmb290ZXJMaW5rU29jRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBmYkxpbmsgPSBuZXcgSW1hZ2UoKTtcbiAgZmJMaW5rLnNyYyA9IGZiO1xuXG4gIGNvbnN0IHlvdXR1YmVMaW5rID0gbmV3IEltYWdlKCk7XG4gIHlvdXR1YmVMaW5rLnNyYyA9IHlvdXR1YmU7XG5cbiAgY29uc3QgdGV4dFVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGV4dFVzQnRuLnRleHRDb250ZW50ID0gXCLhg5vhg53hg5Lhg5Xhg6zhg5Thg6Dhg5Thg5dcIjtcblxuICBmb290ZXJMaW5rU29jRGl2LmFwcGVuZENoaWxkKGZiTGluayk7XG4gIGZvb3RlckxpbmtTb2NEaXYuYXBwZW5kQ2hpbGQoeW91dHViZUxpbmspO1xuXG4gIGZvb3RlckxpbmtzRGl2LmFwcGVuZENoaWxkKGZvb3RlckxpbmtTb2NEaXYpO1xuICBmb290ZXJMaW5rc0Rpdi5hcHBlbmRDaGlsZCh0ZXh0VXNCdG4pO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0RGl2KTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckxpbmtzRGl2KTtcbn1cblxuZXhwb3J0IHsgRG9tQ29udGVudCB9O1xuIiwiZnVuY3Rpb24gcXVlc3Rpb25zQW5kQW5zd2VycyhxdWVzdGlvbiwgaWNvbiwgYW5zd2VyKSB7XG4gIGNvbnN0IHF1ZXN0aW9uU2VjdGlvblNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdGlvbnMtc2VjdGlvblwiKTtcblxuICBjb25zdCBxdWVzdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHF1ZXN0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJxdWVzdGlvbi1kaXZcIik7XG5cbiAgY29uc3QgcXVlc3Rpb25TdWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBxdWVzdGlvblN1YkRpdi5jbGFzc0xpc3QuYWRkKFwicXVlc3Rpb24tc3ViLWRpdlwiKTtcblxuICBjb25zdCBxdWVzdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHF1ZXN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBgJHtxdWVzdGlvbn1gO1xuICBjb25zdCBxdWVzdGlvbkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgcXVlc3Rpb25JY29uLnNyYyA9IGljb247XG5cbiAgcXVlc3Rpb25TdWJEaXYuYXBwZW5kQ2hpbGQocXVlc3Rpb25UaXRsZSk7XG4gIHF1ZXN0aW9uU3ViRGl2LmFwcGVuZENoaWxkKHF1ZXN0aW9uSWNvbik7XG4gIHF1ZXN0aW9uRGl2LmFwcGVuZENoaWxkKHF1ZXN0aW9uU3ViRGl2KTtcbiAgcXVlc3Rpb25TZWN0aW9uU2VsZWN0b3IuYXBwZW5kQ2hpbGQocXVlc3Rpb25EaXYpO1xuXG4gIC8vIGdpdmluZyBidXR0b24gZnVuY3Rpb24gdG8gb3BlbiBhbmQgY2xvc2UgYW5zd2Vyc1xuICBsZXQgYW5zd2VyT3BlbiA9IGZhbHNlOyAvLyBWYXJpYWJsZSB0byB0cmFjayBhbnN3ZXIgc3RhdGVcbiAgbGV0IGFuc3dlclJlbW92ZWQgPSBmYWxzZTtcblxuICBxdWVzdGlvblN1YkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcbiAgICBsZXQgYW5zd2VyUGFyYWdyYXBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbnN3ZXItcGFyYWdyYXBoXCIpO1xuICAgIGlmIChhbnN3ZXJQYXJhZ3JhcGggIT09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKGFuc3dlclBhcmFncmFwaCk7XG4gICAgICBhbnN3ZXJQYXJhZ3JhcGgucmVtb3ZlKCk7XG4gICAgICBhbnN3ZXJSZW1vdmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYW5zd2VyT3Blbik7XG4gICAgY29uc29sZS5sb2coYW5zd2VyUGFyYWdyYXBoKTtcbiAgICBpZiAoIWFuc3dlck9wZW4gfHwgYW5zd2VyUGFyYWdyYXBoID09PSBudWxsKSB7XG4gICAgICAvLyBBbnN3ZXIgaXMgY2xvc2VkLCBjcmVhdGUgYW5kIGFwcGVuZCBpdFxuXG4gICAgICBpZiAoYW5zd2VyICE9PSBcImFuc3dlciBJXCIpIHtcbiAgICAgICAgY29uc3QgcXVlc3Rpb25BbnN3ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcXVlc3Rpb25BbnN3ZXIuY2xhc3NMaXN0LmFkZChcImFuc3dlci1wYXJhZ3JhcGhcIik7XG4gICAgICAgIHF1ZXN0aW9uQW5zd2VyLnRleHRDb250ZW50ID0gYCR7YW5zd2VyfWA7XG4gICAgICAgIHF1ZXN0aW9uRGl2LmFwcGVuZENoaWxkKHF1ZXN0aW9uQW5zd2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGFkZGluZyBmaXJ0cyBsb25nIHFlc3Rpb24gcGFyYWdyYXBoXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uQW5zd2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcXVlc3Rpb25BbnN3ZXIuY2xhc3NMaXN0LmFkZChcImFuc3dlci1wYXJhZ3JhcGhcIik7XG4gICAgICAgIHF1ZXN0aW9uRGl2LmFwcGVuZENoaWxkKHF1ZXN0aW9uQW5zd2VyKTtcblxuICAgICAgICBjb25zdCBxdWVzdGlvbkFuc3dlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHF1ZXN0aW9uQW5zd2VyRGl2LmNsYXNzTGlzdC5hZGQoXCJhbnN3ZXItcGFyYWdyYXBoLWRpdlwiKTtcblxuICAgICAgICBjb25zdCBxdWVzdGlvbkFuc3dlcnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcXVlc3Rpb25BbnN3ZXJ0ZXh0LnRleHRDb250ZW50ID1cbiAgICAgICAgICBcIuGDmeGDo+GDoOGDoeGDluGDlCDhg6Dhg5Thg5Lhg5jhg6Hhg6Lhg6Dhg5Dhg6rhg5jhg5jhg6Hhg5fhg5Xhg5jhg6Eg4YOj4YOc4YOT4YOQIOGDkuGDkOGDmOGDkOGDoOGDnSDhg6Dhg5Dhg5vhg5Phg5Thg5zhg5jhg5vhg5Qg4YOU4YOi4YOQ4YOe4YOYOlwiO1xuICAgICAgICBxdWVzdGlvbkFuc3dlci5hcHBlbmRDaGlsZChxdWVzdGlvbkFuc3dlcnRleHQpO1xuICAgICAgICBxdWVzdGlvbkFuc3dlci5hcHBlbmRDaGlsZChxdWVzdGlvbkFuc3dlckRpdik7XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlQW5kQXBwZW5kKHRhZywgdGV4dCwgcGFyZW50KSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RhZ2UxID0gY3JlYXRlQW5kQXBwZW5kKFwiZGl2XCIsIFwiXCIsIHF1ZXN0aW9uQW5zd2VyRGl2KTtcbiAgICAgICAgY3JlYXRlQW5kQXBwZW5kKFwic3Ryb25nXCIsIFwiSSDhg5Thg6Lhg5Dhg57hg5hcIiwgc3RhZ2UxKTtcbiAgICAgICAgY3JlYXRlQW5kQXBwZW5kKFxuICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgIFwiIC0g4YOe4YOY4YOg4YOV4YOU4YOaIOGDlOGDouGDkOGDnuGDluGDlCDhg6Hhg5Dhg63hg5jhg6Dhg53hg5AsIOGDqOGDlOGDkOGDleGDoeGDnSDhg6Hhg5Dhg6Hhg6Phg6Dhg5Xhg5Thg5rhg5gg4YOZ4YOj4YOg4YOh4YOY4YOh4YOX4YOV4YOY4YOhIOGDkuGDkOGDnOGDmeGDo+GDl+GDleGDnOGDmOGDmuGDmCDhg6Hhg5Dhg6Dhg5Thg5Lhg5jhg6Hhg6Lhg6Dhg5Dhg6rhg5jhg50g4YOk4YOd4YOg4YOb4YOQLCDhg6Dhg53hg5vhg5Thg5rhg5jhg6og4YOS4YOQ4YOc4YOX4YOQ4YOV4YOh4YOU4YOR4YOj4YOa4YOY4YOQIOGDmeGDo+GDoOGDoeGDmOGDoSDhg6jhg5jhg5Phg5Ag4YOS4YOV4YOU4YOg4YOT4YOW4YOULiDhg5nhg6Phg6Dhg6Hhg5bhg5Qg4YOg4YOU4YOS4YOY4YOh4YOi4YOg4YOQ4YOq4YOY4YOY4YOhIOGDk+GDkOGDoeGDoOGDo+GDmuGDlOGDkeGDmOGDoSDhg6jhg5Thg5vhg5Phg5Thg5Ig4YOT4YOQ4YOY4YOs4YOn4YOU4YOR4YOQIOGDqOGDlOGDm+GDneGDoeGDo+GDmuGDmCDhg5Lhg5Dhg5zhg6rhg67hg5Dhg5Phg5Thg5Hhg5Thg5Hhg5jhg6Eg4YOS4YOQ4YOT4YOQ4YOg4YOp4YOU4YOV4YOQLlwiLFxuICAgICAgICAgIHN0YWdlMSxcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBzdGFnZTIgPSBjcmVhdGVBbmRBcHBlbmQoXCJkaXZcIiwgXCJcIiwgcXVlc3Rpb25BbnN3ZXJEaXYpO1xuICAgICAgICBjcmVhdGVBbmRBcHBlbmQoXCJzdHJvbmdcIiwgXCJJSSDhg5Thg6Lhg5Dhg57hg5hcIiwgc3RhZ2UyKTtcbiAgICAgICAgY3JlYXRlQW5kQXBwZW5kKFxuICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgIFwiIC0g4YOo4YOU4YOg4YOp4YOU4YOV4YOY4YOhIOGDm+GDlOGDneGDoOGDlCDhg5Thg6Lhg5Dhg57hg5gg4YOZ4YOj4YOg4YOh4YOU4YOR4YOY4YOhIOGDm+GDmOGDruGDlOGDk+GDleGDmOGDlyDhg5Lhg5Dhg5zhg6Hhg67hg5Xhg5Dhg5Xhg5Thg5Hhg6Phg5rhg5jhg5AsIOGDluGDneGDkuGDmOGDlOGDoOGDl+GDmCDhg5nhg6Phg6Dhg6Hhg5jhg6Hhg5fhg5Xhg5jhg6Eg4YOb4YOd4YOY4YOq4YOQ4YOV4YOhIOGDnuGDoOGDlC3hg6Lhg5Thg6Hhg6Lhg6EsIOGDluGDneGDkuGDmOGDlOGDoOGDlyDhg5nhg6Phg6Dhg6Hhg5bhg5Qg4YOZ4YOYIOGDo+GDnOGDkOGDoOGDlOGDkeGDmOGDoSDhg6Lhg5Thg6Hhg6Lhg6EsIOGDoeGDkOGDk+GDkOGDqiDhg5vhg5jhg5zhg5jhg5vhg5Dhg5rhg6Phg6Dhg5gg4YOW4YOm4YOV4YOQ4YOg4YOY4YOhIOGDkuGDkOGDk+GDkOGDmuGDkOGDruGDleGDmOGDoSDhg6jhg5Thg5vhg5fhg67hg5Xhg5Thg5Xhg5Dhg6jhg5gg4YOS4YOQ4YOT4YOQ4YOu4YOV4YOQ4YOaIOGDqOGDlOGDoOGDqeGDlOGDleGDmOGDoSDhg6jhg5Thg5vhg5Phg5Thg5Ig4YOU4YOi4YOQ4YOe4YOW4YOULlwiLFxuICAgICAgICAgIHN0YWdlMixcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBzdGFnZTMgPSBjcmVhdGVBbmRBcHBlbmQoXCJkaXZcIiwgXCJcIiwgcXVlc3Rpb25BbnN3ZXJEaXYpO1xuICAgICAgICBjcmVhdGVBbmRBcHBlbmQoXCJzdHJvbmdcIiwgXCJJSUkg4YOU4YOi4YOQ4YOe4YOYXCIsIHN0YWdlMyk7XG4gICAgICAgIGNyZWF0ZUFuZEFwcGVuZChcbiAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICBcIiAtIOGDm+GDlOGDoeGDkOGDm+GDlCDhg5Thg6Lhg5Dhg57hg5gg4YOZ4YOj4YOg4YOh4YOU4YOR4YOY4YOhIOGDm+GDmOGDruGDlOGDk+GDleGDmOGDlyDhg5Lhg5Dhg5zhg6Hhg67hg5Xhg5Dhg5Xhg5Phg5Thg5Hhg5A6IEFkdmFuY2Ug4YOZ4YOj4YOg4YOh4YOU4YOR4YOW4YOULCDhg6Hhg5Dhg5Phg5Dhg6og4YOb4YOd4YOY4YOX4YOu4YOd4YOV4YOU4YOR4YOQIOGDkuGDkOGDoOGDmeGDleGDlOGDo+GDmuGDmCDhg6Lhg5Thg6Xhg5zhg5jhg5nhg6Phg6Dhg5gg4YOq4YOd4YOT4YOc4YOQLCDhg5vhg53hg5zhg5Dhg6zhg5jhg5rhg5Thg5Thg5Hhg5vhg5Ag4YOj4YOc4YOT4YOQIOGDk+GDkOGDrOGDlOGDoOGDneGDnCDhg6Lhg5Thg6Xhg5zhg5jhg5nhg6Phg6Dhg5gg4YOi4YOU4YOh4YOi4YOYIOGDquGDneGDk+GDnOGDmOGDoSDhg5Phg53hg5zhg5jhg6Eg4YOo4YOU4YOh4YOQ4YOb4YOd4YOs4YOb4YOU4YOR4YOa4YOQ4YOTLCDhg67hg53hg5rhg50g4YOZ4YOj4YOg4YOh4YOU4YOR4YOW4YOULCDhg6Hhg5Dhg5Phg5Dhg6og4YOg4YOQ4YOY4YOb4YOUIOGDouGDmOGDnuGDmOGDoSDhg6zhg5jhg5zhg5Dhg6Hhg6zhg5Dhg6Dhg5gg4YOq4YOd4YOT4YOc4YOQIOGDm+GDneGDl+GDruGDneGDleGDnOGDmOGDmuGDmCDhg5Dhg6Ag4YOQ4YOg4YOY4YOhIOGDo+GDnOGDk+GDkCDhg6jhg5Thg5Dhg6Hhg6Dhg6Phg5rhg53hg5cg4YOi4YOU4YOl4YOc4YOY4YOZ4YOj4YOg4YOYIOGDk+GDkOGDleGDkOGDmuGDlOGDkeGDkCwg4YOg4YOQ4YOqXCIsXG4gICAgICAgICAgc3RhZ2UzLFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHN0YWdlNCA9IGNyZWF0ZUFuZEFwcGVuZChcImRpdlwiLCBcIlwiLCBxdWVzdGlvbkFuc3dlckRpdik7XG4gICAgICAgIGNyZWF0ZUFuZEFwcGVuZChcInN0cm9uZ1wiLCBcIklWIOGDlOGDouGDkOGDnuGDmFwiLCBzdGFnZTQpO1xuICAgICAgICBjcmVhdGVBbmRBcHBlbmQoXG4gICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgXCIgLSDhg6jhg5Thg6Dhg6nhg5Thg5Xhg5jhg6Eg4YOR4YOd4YOa4YOdIOGDm+GDlOGDneGDl+GDruGDlCDhg5Thg6Lhg5Dhg57hg5gg4YOb4YOd4YOY4YOq4YOQ4YOV4YOhIOGDkuGDkOGDoeGDkOGDo+GDkeGDoOGDlOGDkeGDkOGDoSDhg6jhg5Thg6Hhg5Dhg6Dhg6nhg5Thg5Ug4YOZ4YOd4YOb4YOY4YOh4YOY4YOQ4YOh4YOX4YOQ4YOcLiDhg5Lhg5Dhg6Hhg5Dhg6Phg5Hhg6Dhg5Thg5Hhg5jhg6Eg4YOs4YOQ4YOg4YOb4YOQ4YOi4YOU4YOR4YOY4YOXIOGDkuGDkOGDleGDmuGDmOGDoSDhg6jhg5Thg5vhg5fhg67hg5Xhg5Thg5Xhg5Dhg6jhg5gg4YOp4YOQ4YOY4YOg4YOY4YOq4YOu4YOU4YOR4YOY4YOXIOGDmeGDo+GDoOGDoeGDluGDlCDhg5Phg5Ag4YOS4YOQ4YOk4YOd4YOg4YOb4YOT4YOU4YOR4YOQIOGDqOGDlOGDoeGDkOGDkeGDkOGDm+GDmOGDoeGDmCDhg67hg5Thg5rhg6jhg5Thg5nhg6Dhg6Phg5rhg5Thg5Hhg5AuXCIsXG4gICAgICAgICAgc3RhZ2U0LFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uQW5zd2VydGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcXVlc3Rpb25BbnN3ZXJ0ZXh0Mi50ZXh0Q29udGVudCA9XG4gICAgICAgICAgXCIqIOGDoeGDkOGDnOGDkOGDmyDhg5nhg6Phg6Dhg6Hhg5bhg5Qg4YOT4YOQ4YOg4YOU4YOS4YOY4YOh4YOi4YOg4YOY4YOg4YOT4YOU4YOR4YOYIOGDm+GDnOGDmOGDqOGDleGDnOGDlOGDmuGDneGDleGDkOGDnOGDmOGDkCwg4YOn4YOj4YOg4YOQ4YOT4YOm4YOU4YOR4YOY4YOXIOGDrOGDkOGDmOGDmeGDmOGDl+GDruGDnSDhg5nhg6Phg6Dhg6Hhg5jhg6Eg4YOQ4YOm4YOs4YOU4YOg4YOQLCDhg5zhg5Dhg67hg50g4YOg4YOQ4YOhIOGDmOGDoeGDrOGDkOGDleGDmuGDmCDhg5nhg6Phg6Dhg6Hhg5jhg6Eg4YOS4YOQ4YOc4YOb4YOQ4YOV4YOa4YOd4YOR4YOQ4YOo4YOYIOGDk+GDkCDhg5Lhg5Dhg5jhg5Lhg50g4YOS4YOQ4YOQ4YOp4YOc4YOY4YOQIOGDl+GDoyDhg5Dhg6Dhg5Ag4YOZ4YOj4YOg4YOh4YOhIOGDk+GDkOGDoeGDrOGDoOGDlOGDkeGDmOGDoSDhg6zhg5jhg5zhg5Dhg57hg5jhg6Dhg53hg5Hhg5AuXCI7XG4gICAgICAgIHF1ZXN0aW9uQW5zd2VyLmFwcGVuZENoaWxkKHF1ZXN0aW9uQW5zd2VydGV4dDIpO1xuICAgICAgfVxuXG4gICAgICBxdWVzdGlvbkljb24uaWQgPSBcIm9wZW5lZFwiO1xuICAgICAgYW5zd2VyT3BlbiA9IHRydWU7IC8vIFNldCBhbnN3ZXIgc3RhdGUgdG8gb3BlblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhbnN3ZXJQYXJhZ3JhcGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFuc3dlci1wYXJhZ3JhcGhcIik7XG4gICAgICAvLyBBbnN3ZXIgaXMgb3BlbiwgcmVtb3ZlIGl0XG4gICAgICBxdWVzdGlvbkljb24uaWQgPSBcIlwiO1xuICAgICAgaWYgKGFuc3dlclBhcmFncmFwaCAhPT0gbnVsbCkge1xuICAgICAgICBhbnN3ZXJQYXJhZ3JhcGgucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhxdWVzdGlvbkRpdik7XG4gICAgICBjb25zb2xlLmxvZyhhbnN3ZXJQYXJhZ3JhcGgpO1xuICAgICAgYW5zd2VyT3BlbiA9IGZhbHNlOyAvLyBTZXQgYW5zd2VyIHN0YXRlIHRvIGNsb3NlZFxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IHF1ZXN0aW9uc0FuZEFuc3dlcnMgfTtcbiIsImZ1bmN0aW9uIHNsaWRlcihsb2dvcywgaWNvbiwgZG90LCBhdXRvQ2hhbmdlSW50ZXJ2YWwgPSA4MDAwKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFydG5lcnMtc2VjdGlvblwiKTtcblxuICBjb25zdCBzbGlkZXJCdG5MZWZ0ID0gbmV3IEltYWdlKCk7XG4gIHNsaWRlckJ0bkxlZnQuc3JjID0gaWNvbjtcbiAgc2xpZGVyQnRuTGVmdC5jbGFzc0xpc3QuYWRkKFwic2xpZGVyLWJ0bi1sZWZ0XCIpO1xuXG4gIGNvbnN0IHNsaWRlckJ0blJpZ2h0ID0gbmV3IEltYWdlKCk7XG4gIHNsaWRlckJ0blJpZ2h0LnNyYyA9IGljb247XG4gIHNsaWRlckJ0blJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJzbGlkZXItYnRuLXJpZ2h0XCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwYXJ0bmVyLXRpdGxlXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwi4YOe4YOg4YOd4YOU4YOl4YOi4YOY4YOhIOGDnuGDkOGDoOGDouGDnOGDmOGDneGDoOGDlOGDkeGDmFwiO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgY29udGFpbmVyRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lckRpc3BsYXkuY2xhc3NMaXN0LmFkZChcInBhcnRuZXJzLWRpc3BsYXlcIik7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckRpc3BsYXkpO1xuICBjb250YWluZXJEaXNwbGF5LmFwcGVuZENoaWxkKHNsaWRlckJ0bkxlZnQpO1xuXG4gIGNvbnN0IHNsaWRlckRpc3BsYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXJEaXNwbGF5LmFwcGVuZENoaWxkKHNsaWRlckRpc3BsYXlEaXYpO1xuICBsZXQgbiA9IDA7XG4gIHNsaWRlclBhZ2Uobik7XG5cbiAgY29udGFpbmVyRGlzcGxheS5hcHBlbmRDaGlsZChzbGlkZXJCdG5SaWdodCk7XG5cbiAgZnVuY3Rpb24gc2xpZGVyUGFnZShuKSB7XG4gICAgY29uc3Qgc2xpZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzbGlkZXJEaXYuY2xhc3NMaXN0LmFkZChgc2xpZGVyLWRpdi0ke259YCk7XG4gICAgc2xpZGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJzbGlkZXItZGl2XCIpOyAvLyBBZGRpbmcgYSBjb21tb24gY2xhc3MgZm9yIHN0eWxpbmdcbiAgICBzbGlkZXJEaXNwbGF5RGl2LmFwcGVuZENoaWxkKHNsaWRlckRpdik7XG5cbiAgICAvLyBTZXQgaW5pdGlhbCBvcGFjaXR5IHRvIDAgZm9yIGZhZGUtaW4gZWZmZWN0XG4gICAgc2xpZGVyRGl2LnN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gICAgaWYgKG4gIT09IDIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDI7IGkrKykge1xuICAgICAgICBzbGlkZXJEaXYuYXBwZW5kQ2hpbGQobG9nb3Nbbl1baV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzbGlkZXJEaXYuYXBwZW5kQ2hpbGQobG9nb3NbMl1bMF0pO1xuICAgIH1cblxuICAgIC8vIFRyaWdnZXJpbmcgcmVmbG93IHRvIGFwcGx5IGluaXRpYWwgb3BhY2l0eVxuICAgIHNsaWRlckRpdi5vZmZzZXRIZWlnaHQ7XG5cbiAgICAvLyBTZXQgb3BhY2l0eSB0byAxIGZvciBmYWRlLWluIGVmZmVjdFxuICAgIHNsaWRlckRpdi5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIHRvIGNoYW5nZSBzbGlkZSB3aXRoIGZhZGUtb3V0IGFuZCBmYWRlLWluIGVmZmVjdFxuICBmdW5jdGlvbiBjaGFuZ2VTbGlkZShidG5SaWdodCkge1xuICAgIGNvbnN0IGN1cnJlbnRTbGlkZSA9IHNsaWRlckRpc3BsYXlEaXYubGFzdEVsZW1lbnRDaGlsZDtcblxuICAgIC8vIFNldCBvcGFjaXR5IHRvIDAgZm9yIGZhZGUtb3V0IGVmZmVjdFxuICAgIGN1cnJlbnRTbGlkZS5zdHlsZS5vcGFjaXR5ID0gMDtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gUmVtb3ZlIHRoZSBjdXJyZW50IHNsaWRlIGFmdGVyIGZhZGUtb3V0XG4gICAgICBzbGlkZXJEaXNwbGF5RGl2LnJlbW92ZUNoaWxkKGN1cnJlbnRTbGlkZSk7XG5cbiAgICAgIC8vIEFkZCB0aGUgbmV3IHNsaWRlIHdpdGggZmFkZS1pbiBlZmZlY3RcbiAgICAgIGlmIChidG5SaWdodCkge1xuICAgICAgICBpZiAobiAhPT0gMikge1xuICAgICAgICAgIG4gKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChuICE9PSAwKSB7XG4gICAgICAgIG4gLT0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG4gPSAyO1xuICAgICAgfVxuICAgICAgc2xpZGVyUGFnZShuKTtcbiAgICAgIGRvdElkKG4pO1xuICAgIH0sIDUwMCk7IC8vIDUwMG1zIGlzIHRoZSBkdXJhdGlvbiBvZiB0aGUgZmFkZS1vdXQgdHJhbnNpdGlvblxuICB9XG5cbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGRvdCBpbmRpY2F0b3JzXG4gIGZ1bmN0aW9uIGRvdElkKG4pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAyOyArK2kpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNsaWRlci1kb3QtJHtpfWApO1xuICAgICAgc2VsZWN0ZWREb3QuaWQgPSBpID09PSBuID8gXCJkb3Qtc2VsZWN0ZWRcIiA6IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgLy8gRnVuY3Rpb24gdG8gc3RhcnQgYXV0byBjaGFuZ2VcbiAgZnVuY3Rpb24gc3RhcnRBdXRvQ2hhbmdlKCkge1xuICAgIHJldHVybiBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjaGFuZ2VTbGlkZSh0cnVlKTsgLy8gQXV0byBjaGFuZ2UgdG8gdGhlIG5leHQgc2xpZGVcbiAgICB9LCBhdXRvQ2hhbmdlSW50ZXJ2YWwpO1xuICB9XG5cbiAgbGV0IGF1dG9DaGFuZ2VUaW1lciA9IHN0YXJ0QXV0b0NoYW5nZSgpOyAvLyBTdGFydCBhdXRvIGNoYW5nZVxuXG4gIC8vIEV2ZW50IGxpc3RlbmVycyBmb3IgbWFudWFsIG5hdmlnYXRpb25cbiAgc2xpZGVyQnRuUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhckludGVydmFsKGF1dG9DaGFuZ2VUaW1lcik7IC8vIFN0b3AgYXV0byBjaGFuZ2Ugd2hlbiBtYW51YWxseSBuYXZpZ2F0aW5nXG4gICAgY2hhbmdlU2xpZGUodHJ1ZSk7XG4gICAgYXV0b0NoYW5nZVRpbWVyID0gc3RhcnRBdXRvQ2hhbmdlKCk7IC8vIFJlc3VtZSBhdXRvIGNoYW5nZSBhZnRlciBtYW51YWwgbmF2aWdhdGlvblxuICB9KTtcblxuICBzbGlkZXJCdG5MZWZ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJJbnRlcnZhbChhdXRvQ2hhbmdlVGltZXIpO1xuICAgIGNoYW5nZVNsaWRlKGZhbHNlKTtcbiAgICBhdXRvQ2hhbmdlVGltZXIgPSBzdGFydEF1dG9DaGFuZ2UoKTtcbiAgfSk7XG5cbiAgLy8gRG90IHNlY3Rpb25cbiAgY29uc3QgZG90RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZG90RGl2LmNsYXNzTGlzdC5hZGQoXCJkb3QtRGl2XCIpO1xuICBjb250YWluZXJEaXNwbGF5LmFwcGVuZENoaWxkKGRvdERpdik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMjsgaSsrKSB7XG4gICAgY29uc3Qgc2xpZGVyRG90ID0gbmV3IEltYWdlKCk7XG4gICAgc2xpZGVyRG90LnNyYyA9IGRvdDtcbiAgICBzbGlkZXJEb3QuY2xhc3NMaXN0LmFkZChgc2xpZGVyLWRvdC0ke2l9YCk7XG4gICAgZG90RGl2LmFwcGVuZENoaWxkKHNsaWRlckRvdCk7XG4gIH1cblxuICBkb3RJZChuKTtcbn1cblxuZXhwb3J0IHsgc2xpZGVyIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy90YmMtYm9sZC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvdGJjLXJlZ3VsYXItYm9sZC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvdGJjLXJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL2ZhbGxiYWNrLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9waG90b3MvdGl0bGUtcGhvdG8zLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJib2xkXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXN0eWxlOiBib2xkO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhci1ib2xkXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcIndvZmYyXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KFwid29mZjJcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImZhbGxiYWNrXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdChcIndvZmYyXCIpO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYnV0dG9uOmhvdmVyLFxuLnF1ZXN0aW9uLWRpdjpob3Zlcixcbi5mb290ZXIgaW1nOmhvdmVyLFxuLmhlYWRlciBpbWc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46cm9vdCB7XG4gIC0td2hpdGU6IHJnYigyMjQsIDIyNCwgMjI0KTtcbiAgLS1kYXJrOiByZ2IoMjYsIDMwLCAzMSk7XG4gIC0tZ3JleTogcmdiKDQzLCA0MywgNDMpO1xuICAtLWJsdWU6IHJnYigwLCAxNjMsIDIyNCk7XG4gIC0tYmxhY2s6IHJnYigyMiwgMjIsIDIyKTtcbiAgLS1jb3Vyc2UtY2FyZC1jb3JuZXI6IDVweDtcbiAgLS13aWR0aDogOTgwcHg7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA0OTBweCk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAzMCwgMzEsIDAuOTgpO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDBweDtcbn1cblxuLmhlYWRlciBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uaGVhZGVyIGJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG4jc2VsZWN0aWQtbWVudSB7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cbi5oZWFkZXItbGlua3Mge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBhdXRvKTtcbiAganVzdGlmeS1pdGVtczogZW5kO1xuICBnYXA6IDMwcHg7XG59XG5cbi50aXRsZS1zZWN0aW9uIHtcbiAgaGVpZ2h0OiAzNTJweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS13aWR0aCk7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJib2xkXCIsIFwiZmFsbGJhY2tcIjtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuLnRpdGxlLXNlY3Rpb24gcCB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnBhcmFncmFwaC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0td2lkdGgpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiLCBcImZhbGxiYWNrXCI7XG59XG4ucGFyYWdyYXBoLXNlY3Rpb24gcCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuYnV0dG9uIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwO1xufVxuXG5idXR0b246aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG59XG5cbi5wYXJhZ3JhcGgtc2VjdGlvbiBidXR0b24sXG4ucXVlc3Rpb24tdGl0bGUtZGl2IGJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyLWJvbGRcIiwgXCJmYWxsYmFja1wiO1xufVxuXG4ucGFyYWdyYXBoLXNlY3Rpb24gYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHJnYigxMTcsIDExNywgMTE3KTtcbn1cbi5jb3Vyc2VzLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXdpZHRoKTtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xufVxuLmNvdXJzZXMtc2VjdGlvbiA+IHNwYW4sXG4ucGFydG5lci10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIiwgXCJmYWxsYmFja1wiO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuLmNhcmQtcGhvdG8ge1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWNvdXJzZS1jYXJkLWNvcm5lcik7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1jb3Vyc2UtY2FyZC1jb3JuZXIpO1xufVxuLmNvdXJzZS1jYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY291cnNlLWNhcmRzID4gZGl2IHtcbiAgb3V0bGluZTogMC41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM2Mik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvdXJzZS1jYXJkLWNvcm5lcik7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA0MTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmNhcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcbn1cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiLCBcImZhbGxiYWNrXCI7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5jYXJkLXN0YXR1cyB7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIiwgXCJmYWxsYmFja1wiO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2FyZCA+IGRpdiA+IHAge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5jYXJkLWJ0bi1zZWN0aW9uIHtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNXB4IDE5MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNhcmQtYnRuLXNlY3Rpb24gPiBidXR0b24ge1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyLWJvbGRcIiwgXCJmYWxsYmFja1wiO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY2FyZC1idG4tc2VjdGlvbiA+IGJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiByZ2IoNzEsIDEyNSwgMjAwKTtcbn1cbi5jYXJkLWJ0bi1zZWN0aW9uID4gaW1nIHtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuXG4ucXVlc3Rpb25zLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS13aWR0aCk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucXVlc3Rpb24tdGl0bGUtZGl2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5xdWVzdGlvbi1zdWItZGl2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5xdWVzdGlvbi10aXRsZS1kaXYgPiBwIHtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiLCBcImZhbGxiYWNrXCI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5xdWVzdGlvbi10aXRsZS1kaXYgYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IGdyYXk7XG59XG4ucXVlc3Rpb24tZGl2IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMzUpO1xufVxuXG4ucXVlc3Rpb24tZGl2IGltZyxcbi5zbGlkZXItYnRuLWxlZnQsXG4uc2xpZGVyLWJ0bi1yaWdodCxcbi5kb3QtRGl2IHtcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0MzklKSBodWUtcm90YXRlKDEwNWRlZylcbiAgICBicmlnaHRuZXNzKDExMyUpIGNvbnRyYXN0KDExNSUpO1xufVxuLnF1ZXN0aW9uLXN1Yi1kaXYgPiBwIHtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiLCBcImZhbGxiYWNrXCI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uYW5zd2VyLXBhcmFncmFwaCB7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIiwgXCJmYWxsYmFja1wiO1xuICBsaW5lLWhlaWdodDogMS43O1xuICBtYXgtaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzIGVhc2UtaW4tb3V0O1xufVxuXG4vKiBmb290ZXIgc2VjdGlvbiAqL1xuLmZvb3RlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDQ5MHB4KTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMywgMzMsIDMzKTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgaGVpZ2h0OiAxMjhweDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuLmZvb3RlciBidXR0b24ge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuLmZvb3RlciBidXR0b246aG92ZXIge1xuICBjb2xvcjogZ3JheTtcbn1cbi5mb290ZXItbGlua3Mge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XG4gIGdhcDogMjVweDtcbn1cbi5mb290ZXItbGlua3MgPiBkaXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcbiAgZ2FwOiAxNXB4O1xufVxuLmZvb3Rlci1saW5rcyA+IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDdweCAzMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCIsIFwiZmFsbGJhY2tcIjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuLmZvb3Rlci1saW5rcyA+IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODcsIDE4NywgMTg3KTtcbiAgY29sb3I6IHJnYig0NiwgNDYsIDQ2KTtcbn1cblxuI29wZW5lZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4ucXVlc3Rpb24tc3BhY2Uge1xuICBoZWlnaHQ6IDE1cHg7XG59XG5cbi5hbnN3ZXItcGFyYWdyYXBoLWRpdiB7XG4gIG1hcmdpbjogNTBweCAwcHggNTBweCAyMHB4O1xufVxuXG4vKiBzbGlkZXIgc2VjdGlvbiAqL1xuLnBhcnRuZXJzLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5wYXJ0bmVyLXRpdGxlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS13aWR0aCk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbi5wYXJ0bmVycy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS13aWR0aCk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggOTAwcHggNDBweDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2xpZGVyLWJ0bi1yaWdodCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4uc2xpZGVyLWJ0bi1sZWZ0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG5cbi5zbGlkZXItYnRuLWxlZnQsXG4uc2xpZGVyLWJ0bi1yaWdodCB7XG4gIGhlaWdodDogMzRweDtcbn1cbi5zbGlkZXItZGl2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMjI3cHgpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTAwcHg7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcbn1cbi5zbGlkZXItZGl2IGltZyB7XG4gIHdpZHRoOiAyMjdweDtcbn1cbi5zbGlkZXItZGl2LTIgaW1nIHtcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xufVxuXG4uZG90LURpdiB7XG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XG4gIGdhcDogMTVweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmRvdC1EaXYgPiBpbWcge1xuICBoZWlnaHQ6IDEwcHg7XG59XG5cbiNkb3Qtc2VsZWN0ZWQge1xuICBmaWx0ZXI6IGludmVydCg5NSUpIHNlcGlhKDIlKSBzYXR1cmF0ZSgxMCUpIGh1ZS1yb3RhdGUoMzE0ZGVnKSBicmlnaHRuZXNzKDQwJSlcbiAgICBjb250cmFzdCg5MiUpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLDREQUFrRDtFQUNsRCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDREQUEwRDtBQUM1RDtBQUNBO0VB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QWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLHNDQUFzQztFQUN0QyxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0U7aUJBQ2U7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImJvbGRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvdGJjLWJvbGQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zdHlsZTogYm9sZDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcInJlZ3VsYXItYm9sZFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy90YmMtcmVndWxhci1ib2xkLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy90YmMtcmVndWxhci53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcInJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvdGJjLXJlZ3VsYXIud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJmYWxsYmFja1xcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9mYWxsYmFjay53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG4ucXVlc3Rpb24tZGl2OmhvdmVyLFxcbi5mb290ZXIgaW1nOmhvdmVyLFxcbi5oZWFkZXIgaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuOnJvb3Qge1xcbiAgLS13aGl0ZTogcmdiKDIyNCwgMjI0LCAyMjQpO1xcbiAgLS1kYXJrOiByZ2IoMjYsIDMwLCAzMSk7XFxuICAtLWdyZXk6IHJnYig0MywgNDMsIDQzKTtcXG4gIC0tYmx1ZTogcmdiKDAsIDE2MywgMjI0KTtcXG4gIC0tYmxhY2s6IHJnYigyMiwgMjIsIDIyKTtcXG4gIC0tY291cnNlLWNhcmQtY29ybmVyOiA1cHg7XFxuICAtLXdpZHRoOiA5ODBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNDkwcHgpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMzAsIDMxLCAwLjk4KTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMHB4O1xcbn1cXG5cXG4uaGVhZGVyIGltZyB7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcbi5oZWFkZXIgYnV0dG9uIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcbiNzZWxlY3RpZC1tZW51IHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuLmhlYWRlci1saW5rcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgYXV0byk7XFxuICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIHtcXG4gIGhlaWdodDogMzUycHg7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0td2lkdGgpO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuL3Bob3Rvcy90aXRsZS1waG90bzMuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJib2xkXFxcIiwgXFxcImZhbGxiYWNrXFxcIjtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuLnRpdGxlLXNlY3Rpb24gcCB7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ucGFyYWdyYXBoLXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS13aWR0aCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxuICBmb250LWZhbWlseTogXFxcInJlZ3VsYXJcXFwiLCBcXFwiZmFsbGJhY2tcXFwiO1xcbn1cXG4ucGFyYWdyYXBoLXNlY3Rpb24gcCB7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5wYXJhZ3JhcGgtc2VjdGlvbiBidXR0b24sXFxuLnF1ZXN0aW9uLXRpdGxlLWRpdiBidXR0b24ge1xcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicmVndWxhci1ib2xkXFxcIiwgXFxcImZhbGxiYWNrXFxcIjtcXG59XFxuXFxuLnBhcmFncmFwaC1zZWN0aW9uIGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogcmdiKDExNywgMTE3LCAxMTcpO1xcbn1cXG4uY291cnNlcy1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXdpZHRoKTtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7XFxufVxcbi5jb3Vyc2VzLXNlY3Rpb24gPiBzcGFuLFxcbi5wYXJ0bmVyLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicmVndWxhclxcXCIsIFxcXCJmYWxsYmFja1xcXCI7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcXG59XFxuLmNhcmQtcGhvdG8ge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tY291cnNlLWNhcmQtY29ybmVyKTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1jb3Vyc2UtY2FyZC1jb3JuZXIpO1xcbn1cXG4uY291cnNlLWNhcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jb3Vyc2UtY2FyZHMgPiBkaXYge1xcbiAgb3V0bGluZTogMC41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM2Mik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb3Vyc2UtY2FyZC1jb3JuZXIpO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiA0MTRweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG59XFxuLmNhcmQtdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyZWd1bGFyXFxcIiwgXFxcImZhbGxiYWNrXFxcIjtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbn1cXG4uY2FyZC1zdGF0dXMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyZWd1bGFyXFxcIiwgXFxcImZhbGxiYWNrXFxcIjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmNhcmQgPiBkaXYgPiBwIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG4uY2FyZC1idG4tc2VjdGlvbiB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTVweCAxOTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jYXJkLWJ0bi1zZWN0aW9uID4gYnV0dG9uIHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcInJlZ3VsYXItYm9sZFxcXCIsIFxcXCJmYWxsYmFja1xcXCI7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5jYXJkLWJ0bi1zZWN0aW9uID4gYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoNzEsIDEyNSwgMjAwKTtcXG59XFxuLmNhcmQtYnRuLXNlY3Rpb24gPiBpbWcge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbn1cXG5cXG4ucXVlc3Rpb25zLXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS13aWR0aCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnF1ZXN0aW9uLXRpdGxlLWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucXVlc3Rpb24tc3ViLWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucXVlc3Rpb24tdGl0bGUtZGl2ID4gcCB7XFxuICBmb250LWZhbWlseTogXFxcInJlZ3VsYXJcXFwiLCBcXFwiZmFsbGJhY2tcXFwiO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG4ucXVlc3Rpb24tdGl0bGUtZGl2IGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuLnF1ZXN0aW9uLWRpdiB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzNSk7XFxufVxcblxcbi5xdWVzdGlvbi1kaXYgaW1nLFxcbi5zbGlkZXItYnRuLWxlZnQsXFxuLnNsaWRlci1idG4tcmlnaHQsXFxuLmRvdC1EaXYge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0MzklKSBodWUtcm90YXRlKDEwNWRlZylcXG4gICAgYnJpZ2h0bmVzcygxMTMlKSBjb250cmFzdCgxMTUlKTtcXG59XFxuLnF1ZXN0aW9uLXN1Yi1kaXYgPiBwIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicmVndWxhclxcXCIsIFxcXCJmYWxsYmFja1xcXCI7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuLmFuc3dlci1wYXJhZ3JhcGgge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyZWd1bGFyXFxcIiwgXFxcImZhbGxiYWNrXFxcIjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XFxuICBtYXgtaGVpZ2h0OiBhdXRvO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi8qIGZvb3RlciBzZWN0aW9uICovXFxuLmZvb3RlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDQ5MHB4KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMzLCAzMywgMzMpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGhlaWdodDogMTI4cHg7XFxuICBwYWRkaW5nLXRvcDogNTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbn1cXG4uZm9vdGVyIGJ1dHRvbiB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG4uZm9vdGVyIGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuLmZvb3Rlci1saW5rcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogZW5kO1xcbiAgZ2FwOiAyNXB4O1xcbn1cXG4uZm9vdGVyLWxpbmtzID4gZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXG4gIGdhcDogMTVweDtcXG59XFxuLmZvb3Rlci1saW5rcyA+IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA3cHggMzJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyZWd1bGFyXFxcIiwgXFxcImZhbGxiYWNrXFxcIjtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcbi5mb290ZXItbGlua3MgPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgMTg3LCAxODcpO1xcbiAgY29sb3I6IHJnYig0NiwgNDYsIDQ2KTtcXG59XFxuXFxuI29wZW5lZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG4ucXVlc3Rpb24tc3BhY2Uge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbn1cXG5cXG4uYW5zd2VyLXBhcmFncmFwaC1kaXYge1xcbiAgbWFyZ2luOiA1MHB4IDBweCA1MHB4IDIwcHg7XFxufVxcblxcbi8qIHNsaWRlciBzZWN0aW9uICovXFxuLnBhcnRuZXJzLXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5wYXJ0bmVyLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXdpZHRoKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcbi5wYXJ0bmVycy1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXdpZHRoKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDkwMHB4IDQwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2xpZGVyLWJ0bi1yaWdodCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG4uc2xpZGVyLWJ0bi1sZWZ0IHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbn1cXG5cXG4uc2xpZGVyLWJ0bi1sZWZ0LFxcbi5zbGlkZXItYnRuLXJpZ2h0IHtcXG4gIGhlaWdodDogMzRweDtcXG59XFxuLnNsaWRlci1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDIyN3B4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwMHB4O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG4uc2xpZGVyLWRpdiBpbWcge1xcbiAgd2lkdGg6IDIyN3B4O1xcbn1cXG4uc2xpZGVyLWRpdi0yIGltZyB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxufVxcblxcbi5kb3QtRGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcXG4gIGdhcDogMTVweDtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbi5kb3QtRGl2ID4gaW1nIHtcXG4gIGhlaWdodDogMTBweDtcXG59XFxuXFxuI2RvdC1zZWxlY3RlZCB7XFxuICBmaWx0ZXI6IGludmVydCg5NSUpIHNlcGlhKDIlKSBzYXR1cmF0ZSgxMCUpIGh1ZS1yb3RhdGUoMzE0ZGVnKSBicmlnaHRuZXNzKDQwJSlcXG4gICAgY29udHJhc3QoOTIlKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBEb21Db250ZW50IH0gZnJvbSBcIi4vZG9tQ29udGVudFwiO1xuXG5Eb21Db250ZW50KCk7XG4iXSwibmFtZXMiOlsiY2FyZCIsImltYWdlIiwidGl0bGUiLCJzdGF0dXMiLCJidXR0b24iLCJpY29uIiwiY291cnNlc0RpdiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNhcmREaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJjYXJkQ29udGVudERpdiIsImNhcmRQaG90byIsIkltYWdlIiwic3JjIiwiY2FyZEJ0bkljb24iLCJjYXJkVGl0bGUiLCJ0ZXh0Q29udGVudCIsImNhcmRTdGF0dXMiLCJjYXJkQnV0dG9uIiwiY2FyZEJ0bkRpdiIsImlvcyIsInJlYWN0ZSIsImludFB5dGhvbiIsImFkdlB5dGhvbiIsImN5YmVyc2VjdXJpdHkiLCJ0b3QiLCJibG9ja2NoYWluIiwiZGV2b3BzIiwic2VjdXJpdHkiLCJjYXJkSWNvbiIsInRiYyIsImZiIiwieW91dHViZSIsInRiY0FjZExvZ28iLCJxdWVzdGlvbnNBbmRBbnN3ZXJzIiwicXVlc3Rpb25JY29uIiwic2xpZGVySWNvbiIsInNsaWRlckRvdCIsInNsaWRlciIsInNsaWRlMSIsInNsaWRlMiIsInNsaWRlMyIsInNsaWRlNCIsInNsaWRlNSIsInNsaWRlNiIsInNsaWRlNyIsIkRvbUNvbnRlbnQiLCJjb250YWluZXJTZWxlY3QiLCJoZWFkZXIiLCJwYXJhZ3JhcGgiLCJjb3Vyc2VzIiwicGFydG5lcnMiLCJxdWVzdGlvbnMiLCJmb290ZXIiLCJsb2dvIiwiaGVhZGVyTGlua3MiLCJtYWluIiwidGJjSXQiLCJ0YmNYdXNhaWQiLCJpZCIsInJpc2siLCJ0aXRsZVRleHQiLCJ0aXRsZVRleHQyIiwicGFyYWdyYXBoVGV4dCIsInBhcmFncmFwaExpbmsiLCJjb3Vyc2VUaXRsZURpdiIsImNvdXJzZUNhcmREaXYiLCJpc29DYXJkIiwicmVhY3RDYXJkIiwiaW50clB5dGhvbkNhcmQiLCJhZHZhbmNlZFB5dGhvbkNhcmQiLCJjeWJlcnNlY3VyaXR5Q2FyZCIsInRvdENhcmQiLCJCbG9ja2NoYWluQ2FyZCIsIkRldk9wc0NhcmQiLCJTZWN1cml0eUNhcmQiLCJzbGlkMSIsInNsaWQyIiwic2xpZDMiLCJzbGlkNCIsInNsaWQ1Iiwic2xpZDYiLCJzbGlkNyIsImxvZ29zIiwicXVlc3Rpb25UaXRsZURpdiIsInF1ZXN0aW9uVGl0bGUiLCJxdWVzdGlvblRpdGxlQnRuIiwicXVlc3Rpb24xIiwicXVlc3Rpb24yIiwicXVlc3Rpb24zIiwiZm9vdGVyVGV4dERpdiIsImZvb3RlckxvZ28iLCJmb290ZXJUZXh0IiwiZm9vdGVyVGV4dEJ0biIsImZvb3RlckxpbmtzRGl2IiwiZm9vdGVyTGlua1NvY0RpdiIsImZiTGluayIsInlvdXR1YmVMaW5rIiwidGV4dFVzQnRuIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJxdWVzdGlvblNlY3Rpb25TZWxlY3RvciIsInF1ZXN0aW9uRGl2IiwicXVlc3Rpb25TdWJEaXYiLCJhbnN3ZXJPcGVuIiwiYW5zd2VyUmVtb3ZlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbnN3ZXJQYXJhZ3JhcGgiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlIiwicXVlc3Rpb25BbnN3ZXIiLCJxdWVzdGlvbkFuc3dlckRpdiIsInF1ZXN0aW9uQW5zd2VydGV4dCIsImNyZWF0ZUFuZEFwcGVuZCIsInRhZyIsInRleHQiLCJwYXJlbnQiLCJlbGVtZW50Iiwic3RhZ2UxIiwic3RhZ2UyIiwic3RhZ2UzIiwic3RhZ2U0IiwicXVlc3Rpb25BbnN3ZXJ0ZXh0MiIsImRvdCIsImF1dG9DaGFuZ2VJbnRlcnZhbCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNvbnRhaW5lciIsInNsaWRlckJ0bkxlZnQiLCJzbGlkZXJCdG5SaWdodCIsImNvbnRhaW5lckRpc3BsYXkiLCJzbGlkZXJEaXNwbGF5RGl2IiwibiIsInNsaWRlclBhZ2UiLCJzbGlkZXJEaXYiLCJzdHlsZSIsIm9wYWNpdHkiLCJpIiwib2Zmc2V0SGVpZ2h0IiwiY2hhbmdlU2xpZGUiLCJidG5SaWdodCIsImN1cnJlbnRTbGlkZSIsImxhc3RFbGVtZW50Q2hpbGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2hpbGQiLCJkb3RJZCIsInNlbGVjdGVkRG90Iiwic3RhcnRBdXRvQ2hhbmdlIiwic2V0SW50ZXJ2YWwiLCJhdXRvQ2hhbmdlVGltZXIiLCJjbGVhckludGVydmFsIiwiZG90RGl2Il0sInNvdXJjZVJvb3QiOiIifQ==