import React from "react"
import { Link } from "gatsby"
import HeroImage from "gatsby-image"
import HeroBackgroundImage from "gatsby-background-image"

const Hero = ({ data }) => {
  const {
    title,
    subtitle,
    buttonText,
    buttonUrl,
    heroImage,
    backgroundImage,
  } = data[0].node.frontmatter

  return (
    <HeroBackgroundImage
      Tag="section"
      fluid={backgroundImage.childImageSharp.fluid}
    >
      <div className="header relative pt-16 items-center flex h-screen">
        <div className="container mx-auto items-center flex flex-wrap px-4">
          <div className="w-full flex">
            <div className="md:w-3/5">
              <div className="pt-0">
                <h1 className="text-4xl md:text-5xl xl:text-7xl text-gray-900">{title}</h1>
                <p className="mt-4">
                  {subtitle}
                </p>
                <div className="mt-12">
                  <Link
                    className="text-white font-bold px-8 py-5 rounded-lg bg-pink-500 shadow-xl hover:bg-pink-700"
                    style={{ transition: "all .15s ease" }}
                    to={buttonUrl}
                  >
                    {buttonText}
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1 hidden md:block self-center">
                <HeroImage fluid={heroImage.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </HeroBackgroundImage>
  )
}

export default Hero
