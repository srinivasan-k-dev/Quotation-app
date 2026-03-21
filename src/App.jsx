import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Form from "./Form.jsx";
import Preview from "./Preview.jsx";
import React, { useState } from "react";
import Login from "./Login";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

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
const [user, setUser] = useState(null);
// 🔥 Logout function (ONLY HERE)
  const handleLogout = () => {
    signOut(auth);
    setUser(null);
  };
  if (!user) {
    return <Login setUser={setUser} />;
  }
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
