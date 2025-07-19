
function checkLicence() {
  const input = document.getElementById('licenceInput').value.trim();
  const resultDiv = document.getElementById('result');

  if (input === "DK0897294CH0874") {
    resultDiv.classList.remove("hidden");
  } else {
    alert("Licence not found!");
    resultDiv.classList.add("hidden");
  }
}
