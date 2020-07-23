import React from 'react'
import BackgroundHeroImageSection from 'gatsby-background-image'

const SharedHero = ({heroImage, title, description}) => {
    return (
        <BackgroundHeroImageSection
        Tag="section"
        fluid={heroImage.childImageSharp.fluid}
        >
            <div className="container mx-auto py-24">
            <h1 className="text-4xl md:text-5xl xl:text-7xl text-gray-900">{title}</h1>
                <p className="mt-4">
                  {description}
                </p>
            </div>
        </BackgroundHeroImageSection>
    )
}

export default SharedHero
