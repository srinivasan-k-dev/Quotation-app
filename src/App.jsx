import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Form from "./Form.jsx";
import Preview from "./Preview.jsx";
import React, { useState, useEffect } from "react";
import Login from "./Login.jsx";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

// ✅ Safe parser (prevents blank screen crash)
const safeParse = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch (e) {
    console.error("Parse error:", key, e);
    return fallback;
  }
};

function App() {
  // ✅ Persisted input data
  const [data, setData] = useState(() =>
    safeParse("myData", "")
  );

  // ✅ Persisted user login
  const [user, setUser] = useState(() =>
    safeParse("user", null)
  );

  // ✅ Persisted form data
  const [formData, setFormData] = useState(() =>
    safeParse("formData", {
      name: "",
      address: "",
      date: "",
      size: "",
      depth: "",
      inch: "",
      veetham: "",
      adi: "",
      jalli: "",
      jallithogai: "",
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
      advance: "",
      row3: "",
bit: "",
pipe_name: "",
    })
  );

  // ✅ Persisted submitted data
  const [submittedData, setSubmittedData] = useState(() =>
    safeParse("submittedData", {})
  );

  // 🔄 Save all states to localStorage
  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem("submittedData", JSON.stringify(submittedData));
  }, [submittedData]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // 🔓 Logout
  const handleLogout = () => {
    signOut(auth);
    setUser(null);
  };

  // 🔐 If not logged in → show login
  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <>
      <Navbar onLogout={handleLogout} />

      <Routes>
        {/* 📝 Form Page */}
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

        {/* 📄 Preview Page */}
        <Route
          path="/preview"
          element={
            <Preview
              value={data}
              onChange={(e) => setData(e.target.value)}
              formData={
                Object.keys(submittedData).length > 0
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
