import React, { useState, useEffect, Fragment } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Header = ({ siteTitle }) => {
  const [headerStyling, setHeaderStyling] = useState()
  const [toogleMenuBar, isToogleMenuBar] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  }, [])
  const listenScrollEvent = e => {
    if (window.scrollY > 200) {
      setHeaderStyling({
        transition: "all 300ms ease-in-out",
        backgroundColor: "#FEF4F9",
        paddingTop: "0rem",
        paddingBottom: "0rem",
      })
    } else {
      setHeaderStyling({
        transition: "all 300ms ease-in-out",
        backgroundColor: "transparent",
        paddingTop: ".75rem",
        paddingBottom: ".75rem",
      })
    }
  }
  return (
    <Fragment>
      <header>
        <nav
          style={headerStyling}
          className="fixed z-50 w-full top-0 flex flex-wrap items-center justify-between py-3 navbar-expand-lg"
        >
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link
                to="/"
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-100"
              >
                <svg
                  width="137"
                  height="27"
                  viewBox="0 0 137 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.404 11.324C29.404 11.996 29.242 12.626 28.918 13.214C28.606 13.802 28.108 14.276 27.424 14.636C26.752 14.996 25.9 15.176 24.868 15.176H22.762V20H20.242V7.436H24.868C25.84 7.436 26.668 7.604 27.352 7.94C28.036 8.276 28.546 8.738 28.882 9.326C29.23 9.914 29.404 10.58 29.404 11.324ZM24.76 13.142C25.456 13.142 25.972 12.986 26.308 12.674C26.644 12.35 26.812 11.9 26.812 11.324C26.812 10.1 26.128 9.488 24.76 9.488H22.762V13.142H24.76ZM41.6152 7.436V20H39.0952V14.654H33.7132V20H31.1932V7.436H33.7132V12.602H39.0952V7.436H41.6152ZM49.9275 20.126C48.7515 20.126 47.6715 19.85 46.6875 19.298C45.7035 18.746 44.9235 17.984 44.3475 17.012C43.7715 16.028 43.4835 14.918 43.4835 13.682C43.4835 12.458 43.7715 11.36 44.3475 10.388C44.9235 9.404 45.7035 8.636 46.6875 8.084C47.6715 7.532 48.7515 7.256 49.9275 7.256C51.1155 7.256 52.1955 7.532 53.1675 8.084C54.1515 8.636 54.9255 9.404 55.4895 10.388C56.0655 11.36 56.3535 12.458 56.3535 13.682C56.3535 14.918 56.0655 16.028 55.4895 17.012C54.9255 17.984 54.1515 18.746 53.1675 19.298C52.1835 19.85 51.1035 20.126 49.9275 20.126ZM49.9275 17.876C50.6835 17.876 51.3495 17.708 51.9255 17.372C52.5015 17.024 52.9515 16.532 53.2755 15.896C53.5995 15.26 53.7615 14.522 53.7615 13.682C53.7615 12.842 53.5995 12.11 53.2755 11.486C52.9515 10.85 52.5015 10.364 51.9255 10.028C51.3495 9.692 50.6835 9.524 49.9275 9.524C49.1715 9.524 48.4995 9.692 47.9115 10.028C47.3355 10.364 46.8855 10.85 46.5615 11.486C46.2375 12.11 46.0755 12.842 46.0755 13.682C46.0755 14.522 46.2375 15.26 46.5615 15.896C46.8855 16.532 47.3355 17.024 47.9115 17.372C48.4995 17.708 49.1715 17.876 49.9275 17.876ZM66.7783 7.436V9.47H63.4303V20H60.9103V9.47H57.5623V7.436H66.7783ZM74.449 20.126C73.273 20.126 72.193 19.85 71.209 19.298C70.225 18.746 69.445 17.984 68.869 17.012C68.293 16.028 68.005 14.918 68.005 13.682C68.005 12.458 68.293 11.36 68.869 10.388C69.445 9.404 70.225 8.636 71.209 8.084C72.193 7.532 73.273 7.256 74.449 7.256C75.637 7.256 76.717 7.532 77.689 8.084C78.673 8.636 79.447 9.404 80.011 10.388C80.587 11.36 80.875 12.458 80.875 13.682C80.875 14.918 80.587 16.028 80.011 17.012C79.447 17.984 78.673 18.746 77.689 19.298C76.705 19.85 75.625 20.126 74.449 20.126ZM74.449 17.876C75.205 17.876 75.871 17.708 76.447 17.372C77.023 17.024 77.473 16.532 77.797 15.896C78.121 15.26 78.283 14.522 78.283 13.682C78.283 12.842 78.121 12.11 77.797 11.486C77.473 10.85 77.023 10.364 76.447 10.028C75.871 9.692 75.205 9.524 74.449 9.524C73.693 9.524 73.021 9.692 72.433 10.028C71.857 10.364 71.407 10.85 71.083 11.486C70.759 12.11 70.597 12.842 70.597 13.682C70.597 14.522 70.759 15.26 71.083 15.896C71.407 16.532 71.857 17.024 72.433 17.372C73.021 17.708 73.693 17.876 74.449 17.876Z"
                    fill="#F20977"
                  />
                  <path
                    d="M90.4178 12.512V14.636H82.7858V12.512H90.4178ZM101.794 7.436V9.47H98.446V20H95.926V9.47H92.578V7.436H101.794ZM106.153 7.436V20H103.633V7.436H106.153ZM111.162 18.002H115.302V20H108.642V7.436H111.162V18.002ZM119.424 9.47V12.62H123.654V14.618H119.424V17.948H124.194V20H116.904V7.418H124.194V9.47H119.424ZM130.822 20.126C129.946 20.126 129.154 19.976 128.446 19.676C127.75 19.376 127.198 18.944 126.79 18.38C126.382 17.816 126.172 17.15 126.16 16.382H128.86C128.896 16.898 129.076 17.306 129.4 17.606C129.736 17.906 130.192 18.056 130.768 18.056C131.356 18.056 131.818 17.918 132.154 17.642C132.49 17.354 132.658 16.982 132.658 16.526C132.658 16.154 132.544 15.848 132.316 15.608C132.088 15.368 131.8 15.182 131.452 15.05C131.116 14.906 130.648 14.75 130.048 14.582C129.232 14.342 128.566 14.108 128.05 13.88C127.546 13.64 127.108 13.286 126.736 12.818C126.376 12.338 126.196 11.702 126.196 10.91C126.196 10.166 126.382 9.518 126.754 8.966C127.126 8.414 127.648 7.994 128.32 7.706C128.992 7.406 129.76 7.256 130.624 7.256C131.92 7.256 132.97 7.574 133.774 8.21C134.59 8.834 135.04 9.71 135.124 10.838H132.352C132.328 10.406 132.142 10.052 131.794 9.776C131.458 9.488 131.008 9.344 130.444 9.344C129.952 9.344 129.556 9.47 129.256 9.722C128.968 9.974 128.824 10.34 128.824 10.82C128.824 11.156 128.932 11.438 129.148 11.666C129.376 11.882 129.652 12.062 129.976 12.206C130.312 12.338 130.78 12.494 131.38 12.674C132.196 12.914 132.862 13.154 133.378 13.394C133.894 13.634 134.338 13.994 134.71 14.474C135.082 14.954 135.268 15.584 135.268 16.364C135.268 17.036 135.094 17.66 134.746 18.236C134.398 18.812 133.888 19.274 133.216 19.622C132.544 19.958 131.746 20.126 130.822 20.126Z"
                    fill="#1D0D14"
                  />
                  <rect
                    x="8.66669"
                    y="7"
                    width="4.33333"
                    height="4.33333"
                    fill="#F20977"
                  />
                  <rect
                    x="4.33331"
                    y="11.3334"
                    width="4.33333"
                    height="4.33333"
                    fill="#F20977"
                  />
                  <rect
                    y="15.6666"
                    width="4.33333"
                    height="4.33333"
                    fill="#F20977"
                  />
                  <rect y="7" width="4.33333" height="4.33333" fill="#F20977" />
                  <rect
                    x="8.66669"
                    y="15.6666"
                    width="4.33333"
                    height="4.33333"
                    fill="#F20977"
                  />
                </svg>
              </Link>
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => isToogleMenuBar(!toogleMenuBar)}
              >
                <FontAwesomeIcon icon={faBars} className="text-gray-700" />
              </button>
            </div>
            <div
              className={
                toogleMenuBar
                  ? "lg:flex flex-grow items-center block transition-all duration-700 ease-in-out block"
                  : "lg:flex flex-grow items-center block hidden transition-all duration-700 ease-in-out "
              }
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li>
                    <Link to="/" className="px-3 py-2 flex items-center text-xs uppercase font-bold  hover:text-gray-600">
                      <i className="fab fa-facebook-square text-lg leading-lg text-gray-500" />
                      <span className="ml-2">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/blog"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold hover:text-gray-600"
                    >
                      <i className="far fa-file-alt text-lg leading-lg text-gray-500" />
                      <span className="ml-2">Blog</span>
                    </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
