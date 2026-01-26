const visits = document.getElementById("visits");
const emails = document.getElementById("emails");
const demos = document.getElementById("demos");

const vVal = document.getElementById("vVal");
const eVal = document.getElementById("eVal");
const dVal = document.getElementById("dVal");

const scoreEl = document.getElementById("score");
const statusEl = document.getElementById("status");

function calculateScore() {
  const score =
    visits.value * 2 +
    emails.value * 5 +
    demos.value * 15;

  scoreEl.innerText = score;

  if (score >= 80) statusEl.innerText = "🔥 Hot Lead";
  else if (score >= 40) statusEl.innerText = "⚡ Warm Lead";
  else statusEl.innerText = "❄️ Cold Lead";
}

[visits, emails, demos].forEach(slider => {
  slider.addEventListener("input", () => {
    vVal.innerText = visits.value;
    eVal.innerText = emails.value;
    dVal.innerText = demos.value;
    calculateScore();
  });
});

calculateScore();
