import React from 'react'
import { useNavigate } from "react-router";


const BrandCard = ({brand}) => {
    const navigate = useNavigate()
    const {companyName, companyWebsite, companyNumber, city, state, industry, _id} = brand
  return (
    <div className="homepage_card_container"  onClick={() => navigate(`/brand/${_id}`, {state: {brand}})}>
            <div className="homepage_card_header">
                <h6>{companyName}</h6>
                <p>{companyWebsite}</p>
            </div>
            <div className="homepage_card_socials">
                <a>{companyNumber}</a>
                <div className="homepage_card_social">
                    <p>{city}</p>
                </div>
            </div>
            <div className="homepage_card_desc">
                <a>{state}</a>
                {/* <p>{description}</p> */}
            </div>
        </div>
  )
}

export default BrandCard