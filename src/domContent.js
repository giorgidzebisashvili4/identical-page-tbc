// import titlePhotoImport from "./photos/title-photo.jpg";
import ios from "./photos/courses/iso.jpg";
import reacte from "./photos/courses/react.jpg";
import intPython from "./photos/courses/intro-python.jpg";
import advPython from "./photos/courses/advan-python.jpg";
import cybersecurity from "./photos/courses/cybersecurity.jpg";
import tot from "./photos/courses/tot.jpg";
import blockchain from "./photos/courses/blockchain.jpg";
import devops from "./photos/courses/devops.jpg";
import security from "./photos/courses/security.jpg";
import cardIcon from "./photos/card-btn-icon.svg";
import { card } from "./cardFactory";
import tbc from "./photos/footer/tbc.png";
import fb from "./photos/footer/fb.png";
import youtube from "./photos/footer/youtube.png";
import tbcAcdLogo from "./photos/tbcAcdLogo.svg";
import { questionsAndAnswers } from "./qaFactory";
import questionIcon from "./photos/question-expend.svg";
import sliderIcon from "./photos/sliderIcon.svg";
import sliderDot from "./photos/slider-dot.svg";
import { slider } from "./sliderFunction";
import slide1 from "./photos/partners/slid1.png";
import slide2 from "./photos/partners/slid2.png";
import slide3 from "./photos/partners/slid3.png";
import slide4 from "./photos/partners/slid4.png";
import slide5 from "./photos/partners/slid5.png";
import slide6 from "./photos/partners/slid6.png";
import slide7 from "./photos/partners/slid7.png";

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
  logo.src = tbcAcdLogo;

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

  const risk = document.createElement("button");
  risk.textContent = "რისკები";

  headerLinks.appendChild(main);
  headerLinks.appendChild(tbcIt);
  headerLinks.appendChild(tbcXusaid);
  headerLinks.appendChild(risk);

  // title section dom
  // const titlePhoto = new Image();
  // titlePhoto.src = titlePhotoImport;

  // title.appendChild(titlePhoto);
  // image;
  const titleText = document.createElement("h1");
  titleText.textContent = "TBC x USAID";

  const titleText2 = document.createElement("h2");
  titleText2.textContent = "ტექნოლოგიური განათლებისთვის";

  title.appendChild(titleText);
  title.appendChild(titleText2);

  // paragraph section dom
  const paragraphText = document.createElement("p");
  paragraphText.textContent =
    "„ TBC x USAID - ტექნოლოგიური განათლებისთვის “ პროგრამა  საინფორმაციო ტექნოლოგიებით დაინტერესებულ ადამიანებს გთავაზობთ სრულად დაფინანსებულ ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს  სხვადასხვა ICT მიმართულებით. წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა დასაქმდნენ თიბისისა და მის პარტნიორ კომპანიებში.";

  const paragraphLink = document.createElement("button");
  paragraphLink.textContent = "გაიგე მეტი";

  paragraph.appendChild(paragraphText);
  paragraph.appendChild(paragraphLink);

  // cards section
  const courseTitleDiv = document.createElement("span");
  courseTitleDiv.classList.add("courses-title");
  courseTitleDiv.textContent = "სასწავლო კურსები";
  courses.appendChild(courseTitleDiv);
  ("./photos/partners/slid1.png");
  const courseCardDiv = document.createElement("div");
  courseCardDiv.classList.add("course-cards");
  courses.appendChild(courseCardDiv);

  const isoCard = card(
    ios,
    "iOS Development",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
    cardIcon,
  );
  const reactCard = card(
    reacte,
    "Reacte",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
    cardIcon,
  );
  const intrPythonCard = card(
    intPython,
    "Intro to Python",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
    cardIcon,
  );
  const advancedPythonCard = card(
    advPython,
    "Advanced Python",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
    cardIcon,
  );
  const cybersecurityCard = card(
    cybersecurity,
    "Advanced Cybersecurity Course",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
    cardIcon,
  );
  const totCard = card(
    tot,
    "ToT - Training of Trainers",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
    cardIcon,
  );
  const BlockchainCard = card(
    blockchain,
    "Blockchain",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
    cardIcon,
  );
  const DevOpsCard = card(
    devops,
    "DevOps",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
    cardIcon,
  );
  const SecurityCard = card(
    security,
    "Information Security Governance",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
    cardIcon,
  );

  // slider section

  // Define image paths
  const slid1 = new Image();
  slid1.src = slide1;

  const slid2 = new Image();
  slid2.src = slide2;

  const slid3 = new Image();
  slid3.src = slide3;

  const slid4 = new Image();
  slid4.src = slide4;

  const slid5 = new Image();
  slid5.src = slide5;

  const slid6 = new Image();
  slid6.src = slide6;

  const slid7 = new Image();
  slid7.src = slide7;

  const logos = [[slid1, slid2, slid3], [slid4, slid5, slid6], [slid7]];
  slider(logos, sliderIcon, sliderDot);

  // question section

  const questionTitleDiv = document.createElement("div");
  questionTitleDiv.classList.add("question-title-div");
  const questionTitle = document.createElement("h1");
  questionTitle.textContent = "ხშირად დასმული კითხვები";

  const questionTitleBtn = document.createElement("button");
  questionTitleBtn.textContent = "ყველა კითხვა";

  questions.appendChild(questionTitleDiv);
  questionTitleDiv.appendChild(questionTitle);
  questionTitleDiv.appendChild(questionTitleBtn);

  const question1 = questionsAndAnswers(
    "როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?",
    questionIcon,
    "answer I",
  );

  const question2 = questionsAndAnswers(
    "შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?",
    questionIcon,
    "TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე.",
  );
  const question3 = questionsAndAnswers(
    "რა ღირს სწავლა პროგრამის ფარგლებში?",
    questionIcon,
    "პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ.",
  );

  // footer section
  const footerTextDiv = document.createElement("div");
  footerTextDiv.classList.add("footer-text");

  const footerLogo = new Image();
  footerLogo.src = tbc;

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
  fbLink.src = fb;

  const youtubeLink = new Image();
  youtubeLink.src = youtube;

  const textUsBtn = document.createElement("button");
  textUsBtn.textContent = "მოგვწერეთ";

  footerLinkSocDiv.appendChild(fbLink);
  footerLinkSocDiv.appendChild(youtubeLink);

  footerLinksDiv.appendChild(footerLinkSocDiv);
  footerLinksDiv.appendChild(textUsBtn);

  footer.appendChild(footerTextDiv);
  footer.appendChild(footerLinksDiv);
}

export { DomContent };
