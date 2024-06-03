import React from "react";
import { useParams, useLocation } from "react-router";
import "./BrandPage.css";

const BrandPage = () => {
  let { id } = useParams();
  const location = useLocation();
  console.log(location.state.brand);
  return (
    <div className="brand_container">
      <div className="brand_container_header">
        <p>{location.state.brand.brand_name}</p>
      </div>
      <div className="brand_main">
        <div className="brand_icons">
          <div className="brand_icon">
            <p>{location.state.brand.country}</p>
          </div>
          <div className="brand_icon">
            <p>{location.state.brand.industry}</p>
          </div>
          <div className="brand_icon">
            <p>{location.state.brand.social_media}</p>
          </div>
          <div className="brand_info">
            <p>Target Audience:</p>
            <p>Young, Teens</p>
          </div>
          <div className="brand_info">
            <p>Budget for next Quarter:</p>
            <p>12000</p>
          </div>
          <div className="brand_info">
            <p>Objective:</p>
            <p>{location.state.brand.campaign}</p>
          </div>
        </div>
        <div className="brand_description">
          <p>{location.state.brand.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
