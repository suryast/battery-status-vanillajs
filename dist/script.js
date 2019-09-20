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
    case slider.value > 75:
      childrenArray.map(item => (item.className = "grid-item_darkgreen"));
      break;

    case slider.value > 50 && slider.value <= 75:
      children[0].className = "hidden";
      childrenArray
        .filter(item => childrenArray.indexOf(item) > 0)
        .map(item => {
          item.className = "grid-item_green";
        });
      break;

    case slider.value > 25 && slider.value <= 50:
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
      break;

    case slider.value >= 1 && slider.value < 25:
      childrenArray
        .filter(item => childrenArray.indexOf(item) < 3)
        .map(item => {
          item.className = "hidden";
        });
      children[3].className = "grid-item_darkred";
      break;

    case slider.value < 1:
      childrenArray.map(item => (item.className = "hidden"));
      break;

    default:
      return;
  }
}
