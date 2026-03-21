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
    transport: "",
    mattukuli: "",
    mattu: "",
    pipe: "",
    meter: "",
    meterukku: "",
    slad: "",
    cape: "",
    clamp: "",
    water: "",
    tank: "",
    pipeTransport: "",
    pump: "",
    HP: "",
  });

  // 🔥 NEW STATE (important)
  const [submittedData, setSubmittedData] = useState({});
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Form
              formData={formData}
              setFormData={setFormData}
              onSubmit={(data) => setSubmittedData(data)} // 🔥 pass handler
            />
          }
        />

        <Route
          path="/preview"
          element={<Preview formData={Object.keys(submittedData).length ? submittedData : formData} />} // 🔥 use submittedData
        />
      </Routes>
    </>
  );
}

export default App;
