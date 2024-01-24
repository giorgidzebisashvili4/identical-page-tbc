function card(image, title, status, button) {
  const coursesDiv = document.querySelector(".course-cards");
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  coursesDiv.appendChild(cardDiv);

  let cardContentDiv = document.createElement("div");

  let cardPhoto = new Image();
  cardPhoto.src = image;
  let cardTitle = document.createElement("h2");
  cardTitle.textContent = `${title}`;
  let cardStatus = document.createElement("h3");
  cardStatus.textContent = `${status}`;
  let cardButton = document.createElement("button");
  cardButton.textContent = `${button}`;

  cardDiv.appendChild(cardContentDiv);
  cardContentDiv.appendChild(cardPhoto);
  cardContentDiv.appendChild(cardTitle);
  cardContentDiv.appendChild(cardStatus);
  cardDiv.appendChild(cardButton);
}

export { card };
