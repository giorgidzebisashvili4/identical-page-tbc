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
import { card } from "./cardFactory";

function DomContent() {
  const containerSelect = document.querySelector(".site-container");

  // making main divs
  let header = document.createElement("div");
  header.classList.add("header");

  let title = document.createElement("div");
  title.classList.add("title-section");

  let paragraph = document.createElement("div");
  paragraph.classList.add("paragraph-section");

  let courses = document.createElement("div");
  courses.classList.add("courses-section");

  let partners = document.createElement("div");
  partners.classList.add("partners-section");

  let questions = document.createElement("div");
  questions.classList.add("questions-section");

  let footer = document.createElement("div");
  footer.classList.add("footer");

  containerSelect.appendChild(header);
  containerSelect.appendChild(title);
  containerSelect.appendChild(paragraph);
  containerSelect.appendChild(courses);
  containerSelect.appendChild(partners);
  containerSelect.appendChild(questions);
  containerSelect.appendChild(footer);

  // dom header content
  let logo = document.createElement("h1");
  logo.textContent = "tbc x აკადემია";

  let headerLinks = document.createElement("div");
  headerLinks.classList.add("header-links");

  header.appendChild(logo);
  header.appendChild(headerLinks);

  let main = document.createElement("button");
  main.textContent = "მთავარი";

  let tbcIt = document.createElement("button");
  tbcIt.textContent = "TBC IT";

  let tbcXusaid = document.createElement("button");
  tbcXusaid.textContent = "TBC x USAID";

  let risk = document.createElement("button");
  risk.textContent = "რისკები";

  headerLinks.appendChild(main);
  headerLinks.appendChild(tbcIt);
  headerLinks.appendChild(tbcXusaid);
  headerLinks.appendChild(risk);

  // title section dom
  // const titlePhoto = new Image();
  // titlePhoto.src = titlePhotoImport;

  // title.appendChild(titlePhoto);

  let titleText = document.createElement("h1");
  titleText.textContent = "TBC x USAID";

  let titleText2 = document.createElement("h2");
  titleText2.textContent = "ტექნოლოგიური განათლებისთვის";

  title.appendChild(titleText);
  title.appendChild(titleText2);

  // paragraph section dom
  let paragraphText = document.createElement("p");
  paragraphText.textContent =
    "„ TBC x USAID - ტექნოლოგიური განათლებისთვის “ პროგრამა  საინფორმაციო ტექნოლოგიებით დაინტერესებულ ადამიანებს გთავაზობთ სრულად დაფინანსებულ ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს  სხვადასხვა ICT მიმართულებით. წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა დასაქმდნენ თიბისისა და მის პარტნიორ კომპანიებში.";

  let paragraphLink = document.createElement("button");
  paragraphLink.textContent = "გაიგე მეტი";

  paragraph.appendChild(paragraphText);
  paragraph.appendChild(paragraphLink);

  // cards section
  let courseTitleDiv = document.createElement("h1");
  courseTitleDiv.classList.add("courses-title");
  courseTitleDiv.textContent = "სასწავლო კურსები";
  courses.appendChild(courseTitleDiv);

  let isoCard = card(
    ios,
    "iOS Development",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
  );
  let reactCard = card(
    reacte,
    "Reacte",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
  );
  let intrPythonCard = card(
    intPython,
    "Intro to Python",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
  );
  let advancedPythonCard = card(
    advPython,
    "Advanced Python",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
  );
  let cybersecurityCard = card(
    cybersecurity,
    "Advanced Cybersecurity Course",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
  );
  let totCard = card(
    tot,
    "ToT - Training of Trainers",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
  );
  let BlockchainCard = card(
    blockchain,
    "Blockchain",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
  );
  let DevOpsCard = card(
    devops,
    "DevOps",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
  );
  let SecurityCard = card(
    security,
    "Information Security Governance",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
  );

  //footer section
}

export { DomContent };
