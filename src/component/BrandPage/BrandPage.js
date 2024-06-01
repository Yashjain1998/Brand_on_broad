import React from 'react'
import { useParams, useLocation } from 'react-router'

const BrandPage = () => {
    let { id } = useParams()
    const location = useLocation()
    console.log(location.state.brand)
  return (
    <div>{id}</div>
  )
}

export default BrandPage