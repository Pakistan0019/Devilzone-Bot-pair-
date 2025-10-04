// Example: Refresh button will fetch new QR from your backend (Render/Cyclic)
const refreshBtn = document.getElementById("refreshBtn");
const qrBox = document.getElementById("qr");

refreshBtn.addEventListener("click", async () => {
  qrBox.innerHTML = "<p>Loading new QR...</p>";

  try {
    // Replace this URL with your actual backend endpoint:
    const response = await fetch("https://your-backend.onrender.com/qr");
    const qrHTML = await response.text();
    qrBox.innerHTML = qrHTML;
  } catch (err) {
    qrBox.innerHTML = "<p style='color:red;'>Failed to load QR 😢</p>";
  }
});