import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Form from "./Form.jsx";
import Preview from "./Preview.jsx";
import React, { useState } from "react";
import Login from "./Login.jsx"; // ✅ FIXED
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);

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

  const [submittedData, setSubmittedData] = useState({});

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
  };

  // 🔥 TEMP DEBUG (very important)
  console.log("USER:", user);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <>
      <Navbar onLogout={handleLogout} /> {/* ✅ FIXED */}

      <Routes>
        <Route
          path="/"
          element={
            <Form
              formData={formData}
              setFormData={setFormData}
              onSubmit={(data) => setSubmittedData(data)}
            />
          }
        />

        <Route
          path="/preview"
          element={
            <Preview
              formData={
                Object.keys(submittedData).length
                  ? submittedData
                  : formData
              }
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
