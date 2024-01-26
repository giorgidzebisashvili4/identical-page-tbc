export function slider(logos, icon, dot) {
  const container = document.querySelector(".partners-section");
  let sliderBtnLeft = new Image();
  sliderBtnLeft.src = icon;
  sliderBtnLeft.classList.add("slider-btn-left");

  let sliderBtnRight = new Image();
  sliderBtnRight.src = icon;
  sliderBtnRight.classList.add("slider-btn-right");

  container.appendChild(sliderBtnLeft);

  let sliderDisplayDiv = document.createElement("div");
  container.appendChild(sliderDisplayDiv);
  let n = 0;
  sliderPage(n);

  container.appendChild(sliderBtnRight);

  function sliderPage(n) {
    let sliderDiv = document.createElement("div");
    sliderDiv.classList.add(`slider-div-${n}`);
    sliderDisplayDiv.appendChild(sliderDiv);
    if (n !== 2) {
      for (let i = 0; i <= 2; i++) {
        sliderDiv.appendChild(logos[n][i]);
      }
    } else {
      sliderDiv.appendChild(logos[2][0]);
    }
  }
  sliderBtnRight.addEventListener("click", () => {
    sliderDisplayDiv.removeChild(sliderDisplayDiv.lastElementChild);
    if (n !== 2) {
      n += 1;
    } else {
      n = 0;
    }
    sliderPage(n);
    let selectedDot = document.querySelector(`.slider-dot-${n}`);
    console.log(selectedDot);
    selectedDot.id = "dot-selected";
  });

  // dot section
  let dotDiv = document.createElement("div");
  dotDiv.classList.add("dot-Div");
  container.appendChild(dotDiv);

  for (let i = 0; i <= 2; i++) {
    let sliderDot = new Image();
    sliderDot.src = dot;
    sliderDot.classList.add(`slider-dot-${i}`);
    dotDiv.appendChild(sliderDot);
  }
}
