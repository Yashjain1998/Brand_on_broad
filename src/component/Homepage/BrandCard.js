import React from 'react'
import { useNavigate } from "react-router";


const BrandCard = ({brand}) => {
    const navigate = useNavigate()
    const {brand_name, email, country, social_media, description, industry, _id} = brand
  return (
    <div className="homepage_card_container"  onClick={() => navigate(`/brand/${_id}`, {state: {brand}})}>
            <div className="homepage_card_header">
                <h6>{brand_name}</h6>
                <p>{email}</p>
            </div>
            <div className="homepage_card_socials">
                <a>{country}</a>
                <div className="homepage_card_social">
                    <p>{social_media}</p>
                </div>
            </div>
            <div className="homepage_card_desc">
                <a>{industry}</a>
                <p>{description}</p>
            </div>
        </div>
  )
}

export default BrandCard