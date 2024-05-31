import React, { useState , useEffect } from "react";
import Logomark from "../../Assets/Logomark.png";
import "./Homepage.css";
import BrandCard from "./BrandCard";

const Homepage = () => {
    const [brands, setBrands] = useState([])

    const fetchBrands = async() => {
        try {
            const response = await fetch("http://localhost:4001/brand");
            const data = await response.json();
            setBrands(data.brands)
            console.log(data.brands)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchBrands()
    }, [])
    
  return (
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
      <div className="homepage_main">
        {brands && brands.map((brand) => (
            <BrandCard key={brand._id} brand={brand}/>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
