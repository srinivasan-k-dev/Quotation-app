import './form.css';
import { useNavigate } from "react-router-dom";

function Form({ formData, setFormData, onSubmit }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
        navigate("/preview");
      }}
    >
      {/* ── PERSONAL INFO ─────────────────────────── */}
      <div className="form-body">

        <div className="form-section">
          <div className="form-section-title">தனிப்பட்ட தகவல்</div>

          <div className="field-group">
            <label className="required">உங்களின் பெயர்</label>
            <input
              type="text"
              name="name"
              placeholder="பெயரை உள்ளிடவும்"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="field-group">
            <label className="required">முகவரி</label>
            <input
              type="text"
              name="address"
              placeholder="முகவரியை உள்ளிடவும்"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="field-group">
            <label>தேதி</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* ── BORE WELL DETAILS ─────────────────────── */}
        <div className="form-section">
          <div className="form-section-title">போர்வேல் விவரங்கள்</div>

          <div className="field-row">
            <div className="field-group">
              <label>போர்வேலின் சைஸ்</label>
              <div className="input-with-unit">
                <input
                  type="number"
                  name="size"
                  placeholder="0"
                  value={formData.size}
                  onChange={handleChange}
                />
                <span className="input-unit">இஞ்ச்</span>
              </div>
            </div>

            <div className="field-group">
              <label>போர்வேலின் ஆழம்</label>
              <div className="input-with-unit">
                <input
                  type="number"
                  name="depth"
                  placeholder="0"
                  value={formData.depth}
                  onChange={handleChange}
                />
                <span className="input-unit">அடி</span>
              </div>
            </div>
          </div>

<div className="field-row">
  <div className="field-group">
    <label>எத்தனை இஞ்ச்?</label>
    <div className="input-with-unit">
      <select
        name="inch"
        value={formData.inch}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="7.5">7.5</option>
        <option value="8">8</option>
      </select>
      <span className="input-unit">இஞ்ச்</span>
    </div>
  </div>

            <div className="field-group">
              <label>எத்தனை அடி போர்?</label>
              <div className="input-with-unit">
                <input
                  type="number"
                  name="adi"
                  placeholder="0"
                  value={formData.adi}
                  onChange={handleChange}
                />
                <span className="input-unit">அடி</span>
              </div>
            </div>
          </div>

          <div className="field-row">
            <div className="field-group">
              <label>போர் 1 அடிக்கு வீதம்</label>
              <div className="input-with-unit">
                <input
                  type="number"
                  name="veetham"
                  placeholder="0"
                  value={formData.veetham}
                  onChange={handleChange}
                />
                <span className="input-unit">ரூ</span>
              </div>
            </div>

            <div className="field-group">
              <label>எவ்வளவு ஜல்லி?</label>
              <input
                type="text"
                name="jalli"
                placeholder="அளவு"
                value={formData.jalli}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field-group">
            <label>கம்ப்ரசர் ஓட வேண்டிய நேரம்</label>
            <div className="input-with-unit">
              <input
                type="number"
                name="kamprasar"
                placeholder="0"
                value={formData.kamprasar}
                onChange={handleChange}
              />
              <span className="input-unit">மணி</span>
            </div>
          </div>
<div className="field-group">
            <label>கம்ப்ரசர் தொகை</label>
            <div className="input-with-unit">
              <input
                type="number"
                name="row3"
                placeholder="0"
                value={formData.row3}
                onChange={handleChange}
              />
              <span className="input-unit">தொகை</span>
            </div>
          </div>

        </div>

        {/* ── TRANSPORT & CHARGES ───────────────────── */}
        <div className="form-section">
          <div className="form-section-title">கட்டணங்கள் & போக்குவரத்து</div>

          <div className="field-row">
            <div className="field-group">
              <label>போர் செட் டிரன்ஸ்போர்ட்</label>
              <div className="input-with-unit">
                <input
                  type="number"
                  name="transport"
                  placeholder="0"
                  value={formData.transport || ""}
                  onChange={handleChange}
                />
                <span className="input-unit">ரூ</span>
              </div>
            </div>

            <div className="field-group">
              <label>மட்டு குழி சார்ஜ்</label>
              <div className="input-with-unit">
                <input
                  type="number"
                  name="mattukuli"
                  placeholder="0"
                  value={formData.mattukuli || ""}
                  onChange={handleChange}
                />
                <span className="input-unit">ரூ</span>
              </div>
            </div>
          </div>

          <div className="field-row">
            <div className="field-group">
              <label>மட்டு சார்ஜ்</label>
              <div className="input-with-unit">
                <input
                  type="number"
                  name="mattu"
                  placeholder="0"
                  value={formData.mattu || ""}
                  onChange={handleChange}
                />
                <span className="input-unit">ரூ</span>
              </div>
            </div>

            <div className="field-group">
              <label>தண்ணீர் சார்ஜ்</label>
              <div className="input-with-unit">
                <input
                  type="number"
                  name="water"
                  placeholder="0"
                  value={formData.water || ""}
                  onChange={handleChange}
                />
                <span className="input-unit">ரூ</span>
              </div>
            </div>
          </div>

          <div className="field-row">
            <div className="field-group">
              <label>டேங்க் வாடகை & டிரான்ஸ்போர்ட்</label>
              <div className="input-with-unit">
                <input
                  type="number"
                  name="tank"
                  placeholder="0"
                  value={formData.tank || ""}
                  onChange={handleChange}
                />
                <span className="input-unit">ரூ</span>
              </div>
            </div>

            <div className="field-group">
              <label>கிளாம்ப் / டாப் கவர் மதிப்பு</label>
              <div className="input-with-unit">
                <input
                  type="number"
                  name="clamp"
                  placeholder="0"
                  value={formData.clamp || ""}
                  onChange={handleChange}
                />
                <span className="input-unit">ரூ</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── PIPE DETAILS ──────────────────────────── */}
        <div className="form-section">
          <div className="form-section-title">பைப் விவரங்கள்</div>

          <div className="field-row">
            <div className="field-group">
              <label>பைப் அளவு</label>
              <div className="input-with-unit">
                <input
                  type="number"
                  name="pipe"
                  placeholder="0"
                  value={formData.pipe}
                  onChange={handleChange}
                />
                <span className="input-unit">இஞ்ச்</span>
              </div>
            </div>

            <div className="field-group">
              <label>மீட்டர் ஒன்றுக்கு வீதம்</label>
              <div className="input-with-unit">
                <input
                  type="number"
                  name="meter"
                  placeholder="0"
                  value={formData.meter}
                  onChange={handleChange}
                />
                <span className="input-unit">ரூ</span>
              </div>
            </div>
          </div>

          <div className="field-row">
            <div className="field-group">
              <label>எத்தனை மீட்டர்?</label>
              <div className="input-with-unit">
                <input
                  type="number"
                  name="meterukku"
                  placeholder="0"
                  value={formData.meterukku}
                  onChange={handleChange}
                />
                <span className="input-unit">மீ</span>
              </div>
            </div>

            <div className="field-group">
              <label>பைப் ஸ்லாட் அடி</label>
              <div className="input-with-unit">
                <input
                  type="number"
                  name="slad"
                  placeholder="0"
                  value={formData.slad}
                  onChange={handleChange}
                />
                <span className="input-unit">அடி</span>
              </div>
            </div>
          </div>

          <div className="field-row">
            <div className="field-group">
              <label>இஞ்சி எண்ட் கேப் அளவு</label>
              <div className="input-with-unit">
                <input
                  type="number"
                  name="cape"
                  placeholder="0"
                  value={formData.cape}
                  onChange={handleChange}
                />
                <span className="input-unit">இஞ்ச்</span>
              </div>
            </div>

            <div className="field-group">
              <label>பைப் டிரான்ஸ்போர்ட் சார்ஜ்</label>
              <div className="input-with-unit">
                <input
                  type="number"
                  name="pipeTransport"
                  placeholder="0"
                  value={formData.pipeTransport || ""}
                  onChange={handleChange}
                />
                <span className="input-unit">ரூ</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── PUMP DETAILS ──────────────────────────── */}
        <div className="form-section">
          <div className="form-section-title">பம்பு விவரங்கள்</div>

          <div className="field-row">
            <div className="field-group">
              <label>பம்பு என்ன?</label>
              <input
                type="number"
                name="pump"
                placeholder="0"
                value={formData.pump}
                onChange={handleChange}
              />
            </div>

            <div className="field-group">
              <label>H.P என்ன?</label>
              <div className="input-with-unit">
                <input
                  type="number"
                  name="HP"
                  placeholder="0"
                  value={formData.HP}
                  onChange={handleChange}
                />
                <span className="input-unit">HP</span>
              </div>
            </div>
</div>
        </div>
<div className="form-section">
          <div className="form-section-title">முன்‌‌‌பணம்‌‌‌ விவரம்‌‌‌</div>

<div className="field-row">
<div className="field-group">
<label>எவ்‌‌‌வளவு முன்‌‌‌பணம்‌‌‌ பெற்‌‌‌றது</label>
<div className="input-with-unit">
<input
type="number"
name="advance"
placeholder="தொகை"
value={formData.advance}
onChange={handleChange}
/>
<span className="input-unit">தொகை</span>
              </div>
</div>
</div>
</div>
      </div>{/* end .form-body */}

      {/* ── SUBMIT ────────────────────────────────── */}
      <div className="form-footer">
        <button type="submit">சமர்ப்பி</button>
      </div>

    </form>
  );
}

export default Form;
