import './form.css'

function Form({ formData, setFormData }) {

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
}
  return (
<form onSubmit={(e) => e.preventDefault()}>
      <p>பெயர்</p>
      <input type="text" name="name" value={formData.name} onChange={handleChange}/>

      <p>முகவரி</p>
      <input type="text" name="address" value={formData.address} onChange={handleChange}/>

      <p>தேதி</p>
      <input type="date" name="date" value={formData.date} onChange={handleChange}/>

      <p>போர்‌‌‌வேல்‌‌‌ சைஸ்‌‌‌</p>
      <input type="number" name="size" value={formData.size} onChange={handleChange}/>

<p>போர்‌‌‌வேல்‌‌‌ ஆழம்‌‌‌</p>     
<input type="number" name="depth" value={formData.depth} onChange={handleChange}/>
<p>எத்‌‌‌தனை இஞ்‌‌‌ச்‌‌‌</p>      
<input type="number" name="inch" value={formData.inch} onChange={handleChange}/>
<p>போர்‌‌‌ 1 அடிக்‌‌‌கு ரூ.</p>      
<input type="number" name="veetham" value={formData.veetham} onChange={handleChange}/>
<p>எத்‌‌‌தனை அடி</p>      
<input type="number" name="adi" value={formData.adi} onChange={handleChange}/>
<p>ஜல்‌‌‌லி</p>      
<input type="text" name="jalli" value={formData.jalli} onChange={handleChange}/>
<p>கம்‌‌‌ப்‌‌‌ரசர்‌‌‌</p>      
<input type="number" name="kamprasar" value={formData.kamprasar} onChange={handleChange}/>
<p>போர்‌‌‌ செட்‌‌‌ டிரன்‌‌‌ஸ்‌‌‌போர்‌‌‌ட்‌‌‌ சார்‌‌‌ஜ்‌‌‌</p>      
<input type="number" />
<p>மட்‌‌‌டு குழி சார்‌‌‌ஜ்‌‌‌</p>      
<input type="number" />
<p>மட்‌‌‌டு சார்‌‌‌ஜ்‌‌‌</p>      
<input type="number" />
<p>பைப்‌‌‌</p>
<input type="number" name="pipe" value={formData.pipe} onChange={handleChange}/>
<p>மீட்‌‌‌டர்‌‌‌ ஒன்‌‌‌றுக்‌‌‌கு ரூ</p>
<input type="number" name="meter" value={formData.meter} onChange={handleChange}/>
<p>எத்‌‌‌தனை மீட்‌‌‌டர்‌‌‌</p>
<input type="number" name="meterukku" value={formData.meterukku} onChange={handleChange}/>
<p>பைப்‌‌‌ ஸ்‌‌‌லாட்‌‌‌ போடுவதற்‌‌‌கு எத்‌‌‌தனை அடி</p>
<input type="number" name="slad" value={formData.slad} onChange={handleChange}/>
<p>இஞ்‌‌‌சி எண்‌‌‌ட்‌‌‌ கேப்‌‌‌</p>
<input type="number" name="cape" value={formData.cape} onChange={handleChange}/>
<p>கிளாம்‌‌‌ப்‌‌‌ / டாப்‌‌‌ கவர்‌‌‌</p>
<input type="number"/>
<p>தண்‌‌‌ணீர்‌‌‌ சார்‌‌‌ஜ்‌‌‌</p>
<input type="number"/>
<p>டேங்‌‌‌க்‌‌‌ வாடகை மற்‌‌‌றும்‌‌‌ டிரான்‌‌‌ஸ்‌‌‌போர்‌‌‌ட்‌‌‌</p>
<input type="number"/>
<p>பைப்‌‌‌ டிரான்‌‌‌ஸ்‌‌‌போர்‌‌‌ட்‌‌‌</p>
<input type="number"/>
<p>பம்‌‌‌பு</p>
<input type="number" name="pump" value={formData.pump} onChange={handleChange}/>
<p>H.P</p>
<input type="number" name="HP" value={formData.HP} onChange={handleChange}/>
<button type="submit">Submit</button>
</form>
  );
}

export default Form;
