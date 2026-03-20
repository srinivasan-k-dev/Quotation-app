import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Form from "./Form.jsx";
import Preview from "./Preview.jsx";
import React, { useState } from "react";


function App() {
const [formData, setFormData] = useState({
    name: "",
    address: "",
    date: "",
    size: "",
    depth: "",
inch: "",
veetham: "",
adi: "",
jalli: "",
kamprasar: "",
pipe: "",
meter: "",
meterukku: "",
slad: "",
cape: "",
pump: "",
    HP: "",
  });
  return (
    <>
      <Navbar />
<Routes>
  <Route
    path="/"
    element={<Form formData={formData} setFormData={setFormData} />}
  />
  <Route
    path="/preview"
    element={<Preview formData={formData} />}
  />
</Routes>
    </>
  );
}

export default App;
