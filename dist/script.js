// Set consts
const slider = document.getElementById("batteryRange");
const output = document.getElementById("batteryPercentage");
const children = document.querySelector(".grid").children;
const childrenArray = Array.from(children);

// Get value of slider
output.innerHTML = slider.value;

// Add battery percentage status
window.onload = () => {
  output.innerHTML = "50%";
};

// Update battery percentage
slider.oninput = function() {
  const formattedOutput = this.value.toString() + "%";
  output.innerHTML = formattedOutput;
  checkBattery();
};

function checkBattery() {
  switch (true) {
    case slider.value == 100:
      setToOneHundred();
      break;
    case slider.value > 75:
      setToOneHundred();
      break;
    case slider.value == 75:
      setToSeventyFive();
      break;
    case slider.value > 50 && slider.value < 75:
      setToSeventyFive();
      break;
    case slider.value == 50:
      setToFifty();
      break;
    case slider.value > 25 && slider.value < 50:
      setToFifty();
      break;
    case slider.value > 1 && slider.value < 25:
      setToTwentyFive();
      break;
    case slider.value < 1:
      setToZero();
      break;
    default:
      return;
  }
}

// Setters
setToZero = () => {
  childrenArray.map(item => (item.className = "hidden"));
};

setToTwentyFive = () => {
  childrenArray
    .filter(item => childrenArray.indexOf(item) < 3)
    .map(item => {
      item.className = "hidden";
    });

  children[3].className = "grid-item_darkred";
};

setToFifty = () => {
  childrenArray
    .filter(item => childrenArray.indexOf(item) < 2)
    .map(item => {
      item.className = "hidden";
    });

  childrenArray
    .filter(item => childrenArray.indexOf(item) > 1)
    .map(item => {
      item.className = "grid-item_orangered";
    });
};

setToSeventyFive = () => {
  children[0].className = "hidden";

  childrenArray
    .filter(item => childrenArray.indexOf(item) > 0)
    .map(item => {
      item.className = "grid-item_green";
    });
};

setToOneHundred = () => {
  childrenArray.map(item => (item.className = "grid-item_darkgreen"));
};
