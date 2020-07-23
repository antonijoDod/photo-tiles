import React from "react"
import { Link } from "gatsby"
import DownloadImage from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faApple } from "@fortawesome/free-brands-svg-icons"

// ! FIX RESPONSIVE

const Download = ({ data }) => {
  const {
    title,
    downloadButtonText,
    downloadButtonUrl,
    downloadImage,
  } = data[0].node.frontmatter
  return (
    <section className="bg-pink-100">
      <div className="container mx-auto">
        <div className="md:flex py-24 px-4 items-center">
          <div className="md:w-8/12 mr-10">
            <h2 className="text-4xl md:text-5xl">Super easy app</h2>
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              elementum ante non magna rutrum suscipit. Curabitur mollis congue
              feugiat. Duis ac lectus augue. Vivamus ut lobortis turpis.
              <br />
              <br />
              Integer euismod, eros vitae faucibus placerat, tellus velit mollis
              lorem, eget venenatis leo nibh nec erat. Integer nec fermentum
              nisl. Etiam elit quam, convallis vitae tempus et, pharetra ut
              purus. Nulla sed suscipit mi, sit amet posuere lacus. Nullam
              feugiat facilisis finibus. Etiam a quam non dolor tempor
              dignissim.
            </p>
            <div className="pt-5">
              <Link
                className="inline-block text-white font-bold px-8 py-5 rounded-lg bg-pink-500 shadow-xl hover:bg-pink-700"
                style={{ transition: "all .15s ease" }}
                to={downloadButtonUrl}
              >
                <div className="flex">
                  <div>
                    <FontAwesomeIcon icon={faApple} className="mr-4 text-5xl" />
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: downloadButtonText }}
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex-1 hidden md:block self-center w-4/12">
            <DownloadImage
              fluid={downloadImage.childImageSharp.fluid}
              className="w-3/4 float-right"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download
