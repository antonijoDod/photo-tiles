import React from "react"
import CardImage from "gatsby-image"
import { Link } from "gatsby"

const Card = ({ otherData }) => {
  const { title, description, slug } = otherData
  const cardImage = otherData.image.childImageSharp.fluid
  return (
    <div className="w-full sm:w-1/2 md:w-1/3">
      <div className="max-w-sm rounded m-2 overflow-hidden shadow-lg">
        <CardImage fluid={cardImage} className="w-full h-64" alt={title} />
        <div className="px-6 py-5">
          <div className="font-bold text-xl mb-5">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pb-5">
          <Link to={slug} className="text-pink-500">Read more</Link>
        </div>
      </div>
    </div>
  )
}

export default Card
