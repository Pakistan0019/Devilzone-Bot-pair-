const generateBtn = document.getElementById("generateBtn");
const resultBox = document.getElementById("resultBox");
const copyBtn = document.getElementById("copyBtn");

generateBtn.addEventListener("click", () => {
  const number = document.getElementById("numberInput").value.trim();

  if (!number.startsWith("+") || number.length < 10) {
    alert("Please enter a valid WhatsApp number with country code!");
    return;
  }

  // Demo pair code generator
  const code = "P-" + Math.random().toString(36).substring(2, 10).toUpperCase();
  resultBox.textContent = code;
});

copyBtn.addEventListener("click", () => {
  const code = resultBox.textContent;
  navigator.clipboard.writeText(code);
  alert("Pair Code Copied!");
});