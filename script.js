const btn = document.querySelector(".btn");
const choiceText = document.querySelector(".choice");
function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// add time values for interval
function getTimes() {
  const fasterTimes = [];
  const slowerTimes = [];
  const min = 5;
  const max = 10;
  let fasterLimit = randomValue(min, max);
  let slowerLimit = randomValue(min, max);
  for (let i = 0; i < fasterLimit; i++) {
    fasterTimes.push(randomValue(20, 50));
  }
  for (let i = 0; i < slowerLimit; i++) {
    slowerTimes.push(randomValue(150, 250));
  }
  return [...fasterTimes, ...slowerTimes, ...fasterTimes, ...slowerTimes, 500, 700];
}

let btnDisabled = false;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (btnDisabled) {
    return;
  }
  btnDisabled = true;
  const names = Array.from(document.querySelector("#names").value)
    .join("")
    .split(" ")
    .filter((x) => x && x.trim() !== "");
  let index = 0;
  const times = getTimes();
  function spin() {
    choiceText.textContent = names[Math.floor(Math.random() * names.length)];
    index++;

    if (index < times.length) {
      setTimeout(spin, times[index]);
    } else if (index >= times.length) {
      btnDisabled = false;
    }
  }

  spin();
});
