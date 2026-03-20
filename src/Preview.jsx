import React from "react";
import "./preview.css";
import html2pdf from "html2pdf.js";


function Preview({ formData = {} }) {

const num = (val) => Number(val) || 0;
  // 🔢 Row calculations
const row1 = num(formData.inch) * num(formData.veetham) * num(formData.adi);
const row2 = num(formData.jalli);
const row3 = num(formData.kamprasar);
const row4 = num(formData.transport);
const row5 = num(formData.mattukuli);
const row6 = num(formData.mattu);
const row7 = num(formData.pipe) * num(formData.meter) * num(formData.meterukku);
const row8 = num(formData.slad);
const row9 = num(formData.cape);
const row10 = num(formData.clamp);
const row11 = num(formData.water);
const row12 = num(formData.tank);
const row13 = num(formData.pipeTransport);
const row14 = num(formData.pump) + num(formData.HP);
  // 💰 Total
const total =
  row1 + row2 + row3 +
  row4 + row5 + row6 +
  row7 + row8 + row9 +
  row10 + row11 + row12 +
  row13 + row14;
const downloadPDF = () => {
    const element = document.getElementById("pdf-content");

    html2pdf().from(element).save();
  };
  return (
<>
<button onClick={downloadPDF}>Download PDF</button>
<div id="pdf-content" className="page">
      {/* Header */}
      <div className="header">
        <p className="top-line">
          செல் : 9442998070 <span>செல் : 9443549457</span>
        </p>
        <p>உ</p>
        <p>ஸ்ரீ மார்க்கமுடையார் அய்யனார் துணை</p>
        <h1>ஸ்ரீ ராகவேந்திரா போர்வெல்ஸ்</h1>

        <p>
          55 & 56, கோதண்டபாணி பிள்ளை நகர், ராகவேந்திர நகர் விரிவாக்கம்,
          தஞ்சாவூர் - 613 009.
        </p>

        <div className="notice">
          குடிநீர் மற்றும் விவசாயத்திற்கு தேவையான போர்வெல் சிறந்த முறையில் அமைத்துத் தரப்படும்.
        </div>

        <h2 className="quotation">QUOTATION</h2>
      </div>

      {/* Customer Info */}
      <div className="info">
        <p>திரு: {formData.name || " ________________________________"}</p>
        <p>முகவரி: {formData.address || "_____________________________"}</p>
      </div>

      {/* Details */}
      <div className="details">
        <div>போர்வெல் சைஸ்: {formData.size || " ______"}</div>
        <div>போர்வெல் ஆழம்: {formData.depth || "______"}</div>
        <div>தேதி: {formData.date || " ______"}</div>
      </div>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>எண்</th>
            <th>விவரம்</th>
            <th>தொகை</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>1</td>
            <td>
              {formData.inch || "____"} இஞ்ச் போர் 1 அடிக்கு ரூ {formData.veetham || "____"} வீதம் {formData.adi || "____"} அடிக்கு
            </td>
            <td>₹ {row1 || ""}</td>
          </tr>

          <tr>
            <td>2</td>
            <td>ஜல்லி {formData.jalli || ""}</td>
            <td>₹ {row2 || ""}</td>
          </tr>

          <tr>
            <td>3</td>
            <td>கம்ப்ரசர் {formData.kamprasar || ""}</td>
            <td>₹ {row3 || ""}</td>
          </tr>

<tr><td>4</td><td>போர் செட் டிரான்ஸ்போர்ட் சார்ஜ்</td><td>₹ {row4 || ""}</td></tr>
<tr><td>5</td><td>மட்டு குழி சார்ஜ்</td><td>₹ {row5 || ""}</td></tr>
<tr><td>6</td><td>மட்டு சார்ஜ்</td><td>₹ {row6 || ""}</td></tr>

          <tr>
            <td>7</td>
            <td>
              {formData.pipe || ""} பைப் ரூ {formData.meter || ""} × {formData.meterukku || ""}
            </td>
            <td>₹ {row7 || ""}</td>
          </tr>

          <tr>
            <td>8</td>
            <td>{formData.slad || ""} அடி ஸ்லாட்</td>
            <td>₹ {row8 || ""}</td>
          </tr>

          <tr>
            <td>9</td>
            <td>{formData.cape || ""} எண்ட் கேப்</td>
            <td>₹ {row9 || ""}</td>
          </tr>

<tr><td>10</td><td>கிளாம்ப் / டாப் கவர்</td><td>₹ {row10 || ""}</td></tr>
<tr><td>11</td><td>தண்ணீர் சார்ஜ்</td><td>₹ {row11 || ""}</td></tr>
<tr><td>12</td><td>டேங்க் வாடகை</td><td>₹ {row12 || ""}</td></tr>
<tr><td>13</td><td>பைப் டிரான்ஸ்போர்ட்</td><td>₹ {row13 || ""}</td></tr>

          <tr>
            <td>14</td>
            <td>
              {formData.pump || ""} பம்பு {formData.HP || ""} HP
            </td>
            <td>₹ {row14 || ""}</td>
          </tr>

        </tbody>
      </table>

      {/* Total */}
      <div className="total">
        <p>மொத்தம்: ₹ {total ? total : " __________________"}</p>
      </div>

<div className="borewellName">
<p>For</p><h4>ஸ்ரீ ராகவேந்‌‌‌திரா போர்‌‌‌வேல்‌‌‌ஸ்‌‌‌</h4>
</div>

 {/* Footer above */}
      <div className="footer-above">
        <p>இந்த வேலைக்கு ரூ. __________________ முன் பணமாக</p>
<p> பெற்‌‌‌றுக்‌‌‌ கொண்‌‌‌டேன்‌‌‌.</p>
      </div>

<div className="footer">
 <h3>பாறை வந்‌‌‌தால்‌‌‌ பாறை உடைக்‌‌‌கும்‌‌‌ சார்‌‌‌ஜ்‌‌‌ தனி...</h3>
</div>
    </div>
    </>  
  );
}
export default Preview;
