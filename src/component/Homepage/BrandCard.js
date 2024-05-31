import React from 'react'

const BrandCard = ({brand_name, email, country, social, description}) => {
  return (
    <div className="homepage_card_container">
            <div className="homepage_card_header">
                <h6>Netflix</h6>
                <p>netflix.com</p>
            </div>
            <div className="homepage_card_socials">
                <a>India</a>
                <div className="homepage_card_social">
                    <p>LinkedIn</p>
                    <p>Facebook</p>
                </div>
            </div>
            <div className="homepage_card_desc">
                <a>IT</a>
                <p>Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies on an internet-connected device. </p>
            </div>
        </div>
  )
}

export default BrandCard