import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

import formImg from "./assets/Form.jpg";
import previewImg from "./assets/preview.png";

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="navbar">

      <button className="nav-btn" onClick={() => navigate("/")}>
        <img src={formImg} alt="Form" />
        <span>Form</span>
      </button>

      <button className="nav-btn" onClick={() => navigate("/preview")}>
        <img src={previewImg} alt="Preview" />
        <span>Preview</span>
      </button>
<button className="download-btn" onClick={onLogout}>
  Logout
</button>

    </div>
  );
};

export default Navbar;
