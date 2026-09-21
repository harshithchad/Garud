const input = document.getElementById("smsFile");
const previewBox = document.getElementById("previewBox");
const preview = document.getElementById("preview");
const fileName = document.getElementById("fileName");
const result = document.getElementById("result");
const analyzeBtn = document.getElementById("analyzeBtn");

input.addEventListener("change", () => {
  const file = input.files[0];
  if (!file) return;
  fileName.textContent = file.name;
  preview.src = URL.createObjectURL(file);
  previewBox.classList.remove("hidden");
  result.classList.add("hidden");
});

analyzeBtn.addEventListener("click", () => {
  result.innerHTML = "<strong>⚠️ Demo Risk Analysis</strong><br>GARUD detected that this message should be reviewed before making any payment. Do not share OTPs, UPI PINs or passwords. Verify the sender independently.";
  result.classList.remove("hidden");
});
