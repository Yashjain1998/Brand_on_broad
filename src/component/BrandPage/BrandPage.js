import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import "./BrandPage.css";

const BrandPage = () => {
  const navigate = useNavigate()
  const [brand, setBrand] = useState({})
  const [cookie, setCookie] = useCookies(['user']) ;
  let { id } = useParams();
  const location = useLocation();
  const fetchBrand = async() => {
    console.log("ran")
    const response = await fetch(`http://localhost:4001/brand/${id}`);

    if(response.status === 403){
      console.log("Incorrect Details")
      // navigate("/homepage")
      return
    }

    if(response.status === 404){
      console.log("Not found")
      navigate('/homepage')
      return
    }

    const data = await response.json();
    setBrand(data.brand)
  }

  useEffect(() => {
    if(!cookie.user){
      navigate("/")
    }else if(!location?.state?.brand){
      fetchBrand()
    }
}, [location?.state?.brand]); 

  return (
    <div className="brand_container">
      {!location?.state?.brand && !brand ? <div></div> : <><div className="brand_container_header">
        <p>{location?.state?.brand?.brand_name || brand.brand_name}</p>
      </div>
      <div className="brand_main">
        <div className="brand_icons">
          <div className="brand_icon">
            <p>{location?.state?.brand?.country || brand.country}</p>
          </div>
          <div className="brand_icon">
            <p>{location?.state?.brand?.industry || brand.industry}</p>
          </div>
          <div className="brand_icon">
            <p>{location?.state?.brand?.social_media || brand.social_media}</p>
          </div>
          <div className="brand_info">
            <p>Target Audience:</p>
            <p>{location?.state?.brand?.audience || brand.audience}</p>
          </div>
          <div className="brand_info">
            <p>Budget for next Quarter:</p>
            <p>{location?.state?.brand?.quarter || brand.quarter}</p>
          </div>
          <div className="brand_info">
            <p>Objective:</p>
            <p>{location?.state?.brand?.campaign || brand.campaign}</p>
          </div>
        </div>
        <div className="brand_description">
          <p>{location?.state?.brand?.description || brand.description}</p>
        </div>
      </div></> }
      
    </div>
  );
};

export default BrandPage;
