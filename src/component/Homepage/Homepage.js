import React, { useState, useEffect } from "react";
import Logomark from "../../Assets/Logomark.png";
import "./Homepage.css";
import BrandCard from "./BrandCard";
import { useNavigate } from "react-router";
import Dialog from "./DialogBox"

const Homepage = () => {
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();
  const fetchBrands = async () => {
    try {
      const response = await fetch("http://localhost:4001/brand");
      const data = await response.json();
      setBrands(data.brands);
      console.log(data.brands);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    // <React.Fragment>
    <div className="homepage_container">
      <div className="homapage_logo">
        <img
          src={Logomark}
          alt="TruAd Logo"
          style={{
            width: "50%",
            objectFit: "fill",
          }}
        />
      </div>
      <div className="homapage_nav">
        <h5>Brand On Broad</h5>
        <button onClick={()=>navigate("/register")}>Add Brand</button>
      </div>
      <div className="homepage_main">
        {brands &&
          brands.map((brand) => <BrandCard key={brand._id} brand={brand} />)}
      </div>
    </div>
    // <Dialog handleClose={handleClose} open={open}/>
    // </React.Fragment>
  );
};

export default Homepage;
