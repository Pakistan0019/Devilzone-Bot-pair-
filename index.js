<!DOCTYPE html><html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Pair Panel — Scan to Connect</title>
  <style>
    :root{
      --bg:#0f172a; /* dark navy */
      --card:#0b1220;
      --muted:#94a3b8;
      --accent:#7c3aed;
    }
    *{box-sizing:border-box}
    body{margin:0;font-family:Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;background:linear-gradient(180deg,var(--bg),#071026);color:#e6eef8;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px}.card{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));backdrop-filter:blur(6px);width:100%;max-width:920px;border-radius:16px;padding:28px;display:grid;grid-template-columns: 340px 1fr;gap:28px;align-items:center;box-shadow:0 8px 30px rgba(2,6,23,0.6)}

.left{display:flex;flex-direction:column;align-items:center;gap:18px}
.qr-wrap{background:linear-gradient(180deg,#0b1220,#061021);padding:18px;border-radius:12px;border:1px solid rgba(255,255,255,0.03)}
.qr{width:260px;height:260px;display:block}
h1{font-size:20px;margin:0}
p.muted{color:var(--muted);margin:0;text-align:center}

.controls{width:100%;display:flex;flex-direction:column;gap:10px}
label{font-size:13px;color:var(--muted)}
input[type=text], textarea{width:100%;padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit;font-size:14px}
.btn{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border-radius:10px;border:none;cursor:pointer;background:linear-gradient(90deg,var(--accent),#5b21b6);color:white;font-weight:600}

.right{padding:6px 8px}
.info{background:rgba(255,255,255,0.02);padding:14px;border-radius:10px;border:1px solid rgba(255,255,255,0.02)}
pre{overflow:auto;background:transparent;color:var(--muted);font-family:monospace;padding:6px;border-radius:6px}

footer{grid-column:1/-1;text-align:center;color:var(--muted);margin-top:10px;font-size:13px}

@media (max-width:820px){
  .card{grid-template-columns:1fr;}
  .qr{width:200px;height:200px}
}

  </style>
</head>
<body>
  <div class="card">
    <div class="left">
      <h1>Pair Your Device</h1>
      <div class="qr-wrap">
        <!-- QR image will update when user generates link -->
        <img id="qrImage" class="qr" src="https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=Scan+to+pair" alt="QR Code"/>
      </div>
      <p class="muted">Open WhatsApp on your phone → Settings → Linked Devices → Scan QR code</p>
    </div><div class="right">
  <div class="controls">
    <label for="pairData">Pairing Data / URL</label>
    <input id="pairData" type="text" placeholder="Paste pairing URL or text here (e.g., whatsapp://... or any text)" value="https://example.com/pair/session-12345" />

    <div style="display:flex;gap:8px">
      <button class="btn" id="generateBtn">Generate QR</button>
      <button class="btn" id="downloadBtn" style="background:linear-gradient(90deg,#111827,#0b1220)">Download PNG</button>
    </div>

    <label style="margin-top:8px">Preview Link</label>
    <div class="info">
      <pre id="preview">https://example.com/pair/session-12345</pre>
    </div>

    <label style="margin-top:8px">Embed code (copy)</label>
    <div class="info">
      <pre id="embed">&lt;img src="https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=https://example.com/pair/session-12345" alt="QR" /&gt;</pre>
    </div>
  </div>
</div>

<footer>Made for Render — Upload this repo to GitHub and choose <strong>Static Site</strong> in Render. <br/>If this is root index.html, set <code>Publish Directory</code> to <strong>/</strong>.</footer>

  </div>  <script>
    const pairDataInput = document.getElementById('pairData');
    const qrImage = document.getElementById('qrImage');
    const generateBtn = document.getElementById('generateBtn');
    const preview = document.getElementById('preview');
    const embed = document.getElementById('embed');
    const downloadBtn = document.getElementById('downloadBtn');

    function updatePreviewAndEmbed(value){
      const encoded = encodeURIComponent(value);
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encoded}`;
      qrImage.src = qrUrl;
      preview.textContent = value;
      embed.textContent = `<img src=\"${qrUrl}\" alt=\"QR\" />`;
    }

    generateBtn.addEventListener('click', ()=>{
      const val = pairDataInput.value.trim() || 'Scan to pair';
      updatePreviewAndEmbed(val);
    });

    // download the current QR as PNG
    downloadBtn.addEventListener('click', ()=>{
      const url = qrImage.src;
      // open in new tab to let user save
      window.open(url, '_blank');
    });

    // update live when typing (lightweight)
    pairDataInput.addEventListener('input', ()=>{
      const val = pairDataInput.value.trim() || 'Scan to pair';
      preview.textContent = val;
      const encoded = encodeURIComponent(val);
      embed.textContent = `<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encoded}\" alt=\"QR\" />`;
    });

    // initial setup
    updatePreviewAndEmbed(pairDataInput.value);
  </script></body>
</html>