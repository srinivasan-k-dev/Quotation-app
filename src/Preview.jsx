import React from "react";
import "./preview.css";
import html2pdf from "html2pdf.js";

function Preview({ formData = {} }) {
  const num = (val) => {
    if (val === undefined || val === null) return 0;
    const match = String(val).match(/\d+(\.\d+)?/);
    return match ? Number(match[0]) : 0;
  };

  const formatINR = (val) => {
    return val ? Number(val).toLocaleString("en-IN") : "—";
  };

  // ── Row calculations ──────────────────────────
  const row1  = num(formData.veetham) * num(formData.adi);
  const row2  = 130 * num(formData.jalli);
  const row3  = 2500 * num(formData.kamprasar);
  const row4  = num(formData.transport);
  const row5  = num(formData.mattukuli);
  const row6  = num(formData.mattu);
  const row7  = num(formData.meter) * num(formData.meterukku);
  const row8  = 10 * num(formData.slad);
  const row9  = 75 * num(formData.cape);
  const row10 = num(formData.clamp);
  const row11 = num(formData.water);
  const row12 = num(formData.tank);
  const row13 = num(formData.pipeTransport);
  const row14 = num(formData.pump);

  const total =
    row1 + row2 + row3 + row4 + row5 + row6 +
    row7 + row8 + row9 + row10 + row11 + row12 +
    row13 + row14;

  const downloadPDF = () => {
    const element = document.getElementById("pdf-content");
    const opt = {
      margin: 0,
      filename: "quotation.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 3, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <>
      {/* Download Button */}
      <div className="div">
        <button className="download-btn" onClick={downloadPDF}>
          Download PDF
        </button>
      </div>

      <div id="pdf-content" className="page">

        {/* ── HEADER ─────────────────────────────── */}
        <p className="top-line">
          <span>செல் : 9442998070</span>
          <span><p style={{ color: "red" }}>SUPERVISOR: M.K.DINESH </p>செல் : 6379794646</span>
        </p>

        <p className="deity-line">உ</p>
        <p className="deity-line">ஸ்ரீ மார்க்கமுடையார் அய்யனார் துணை</p>

        <h1 className="company-name">ஸ்ரீ ராகவேந்திரா போர்வெல்ஸ்</h1>

        <p className="address">
          55 &amp; 56, கோதண்டபாணி பிள்ளை நகர், ராகவேந்திர நகர் விரிவாக்கம்,<br />
          தஞ்சாவூர் – 613 009.
        </p>

        <div className="notice">
          குடிநீர் மற்றும் விவசாயத்திற்கு தேவையான போர்வெல்<br />
          சிறந்த முறையில் அமைத்துத் தரப்படும்.
        </div>

        <div className="quotation-wrap">
          <span className="quotation-badge">QUOTATION</span>
        </div>

        {/* ── CUSTOMER INFO ───────────────────────── */}
        <div className="info">
          <p>திரு / திருமதி : {formData.name || ""}</p>
          <p>முகவரி : {formData.address || ""}</p>
        </div>

        {/* ── BORE DETAILS ROW (red bar) ──────────── */}
        <div className="details">
          <div>
            போர்வெல் சைஸ்&nbsp;
            <span className="detail-value">{formData.size || "____"}</span>
          </div>
          <div>
            போர்வெல் ஆழம்&nbsp;
            <span className="detail-value">{formData.depth || "____"}</span>
          </div>
          <div>
            தேதி&nbsp;
            <span className="detail-value">{formData.date || "____"}</span>
          </div>
        </div>

        {/* ── ITEMS TABLE ─────────────────────────── */}
        <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>எண்</th>
              <th>விவரம்</th>
              <th>ரூபாய்</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>1</td>
              <td>
                {formData.inch || "___"} இஞ்ச் போர் 1 அடிக்கு ரூ.{formData.veetham || "___"} வீதம் {formData.adi || "___"} அடிக்கு
              </td>
              <td>{row1 ? `₹ ${formatINR(row1)}` : ""}</td>
            </tr>

            <tr>
              <td>2</td>
              <td>ஜல்லி (விருத்தாச்சலம்) {formData.jalli || "___________"}</td>
              <td>{row2 ? `₹ ${formatINR(row2)}` : ""}</td>
            </tr>

            <tr>
              <td>3</td>
              <td>கம்ப்ரசர் {formData.kamprasar || "___"} மணி நேரம் டிரைவர் படி உட்பட</td>
              <td>{row3 ? `₹ ${formatINR(row3)}` : ""}</td>
            </tr>

            <tr>
              <td>4</td>
              <td>போர் செட் டிரான்ஸ்போர்ட் சார்ஜ்</td>
              <td>{row4 ? `₹ ${formatINR(row4)}` : ""}</td>
            </tr>

            <tr>
              <td>5</td>
              <td>மட்டு குழி சார்ஜ்</td>
              <td>{row5 ? `₹ ${formatINR(row5)}` : ""}</td>
            </tr>

            <tr>
              <td>6</td>
              <td>மட்டு சார்ஜ் (களி மண்)</td>
              <td>{row6 ? `₹ ${formatINR(row6)}` : ""}</td>
            </tr>

            <tr>
              <td>7</td>
              <td>
                {formData.pipe || "___"} பைப் ஒரு மீட்டர் ரூ.{formData.meter || "___"} வீதம் {formData.meterukku || "___"} மீட்டருக்கு
              </td>
              <td>{row7 ? `₹ ${formatINR(row7)}` : ""}</td>
            </tr>

            <tr>
              <td>8</td>
              <td>{formData.slad || "___"} அடி பைப் ஸ்லாட் போடுவதற்கு</td>
              <td>{row8 ? `₹ ${formatINR(row8)}` : ""}</td>
            </tr>

            <tr>
              <td>9</td>
              <td>{formData.cape || "___"} இஞ்ச் எண்ட் கேப்</td>
              <td>{row9 ? `₹ ${formatINR(row9)}` : ""}</td>
            </tr>

            <tr>
              <td>10</td>
              <td>கிளாம்ப் / டாப் கவர்</td>
              <td>{row10 ? `₹ ${formatINR(row10)}` : ""}</td>
            </tr>

            <tr>
              <td>11</td>
              <td>தண்ணீர் சார்ஜ்</td>
              <td>{row11 ? `₹ ${formatINR(row11)}` : ""}</td>
            </tr>

            <tr>
              <td>12</td>
              <td>டேங்க் வாடகை மற்றும் டிரான்ஸ்போர்ட்</td>
              <td>{row12 ? `₹ ${formatINR(row12)}` : ""}</td>
            </tr>

            <tr>
              <td>13</td>
              <td>பைப் டிரான்ஸ்போர்ட்</td>
              <td>{row13 ? `₹ ${formatINR(row13)}` : ""}</td>
            </tr>

            <tr>
              <td>14</td>
              <td>{formData.pump || "___"} பம்பு &nbsp; {formData.HP || "___"} H.P</td>
              <td>{row14 ? `₹ ${formatINR(row14)}` : ""}</td>
            </tr>

            {/* ── TOTAL ROW ─────────────────────── */}
            <tr className="total-row">
              <td colSpan={2} style={{ textAlign: "right", paddingRight: "12px" }}>
                மொத்தம்
              </td>
              <td>{total ? `₹ ${formatINR(total)}` : ""}</td>
            </tr>

          </tbody>
        </table>
        </div>

        {/* ── SIGNATURE ───────────────────────────── */}
        <div className="borewellName">
          <p>For</p>
          <h4>ஸ்ரீ ராகவேந்திரா போர்வெல்ஸ்</h4>
        </div>

        {/* ── FOOTER ──────────────────────────────── */}
        <div className="footer-section">
          <div className="footer-above">
            <p>இந்த வேலைக்கு ரூ.{formData.advance || "________________________________"}</p>
            <p>முன் பணமாக பெற்றுக் கொண்டேன்.</p>
          </div>

          <div className="footer">
            பாறை வந்தால் பாறை உடைக்கும் சார்ஜ் தனி...
          </div>
        </div>

      </div>
    </>
  );
}

export default Preview;
