const input = document.getElementById("qrFile");
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
  result.innerHTML = "<strong>⚠️ Demo QR Risk Analysis</strong><br>Before paying, verify the recipient name and amount shown by your UPI app. Never enter your UPI PIN to receive money.";
  result.classList.remove("hidden");
});
