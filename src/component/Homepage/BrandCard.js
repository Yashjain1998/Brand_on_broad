import React from 'react'

const BrandCard = ({brand}) => {
    const {brand_name, email, country, social_media, description, industry} = brand
  return (
    <div className="homepage_card_container">
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