import React from "react"
import Started from "./shared/started/Started"
import FooterContent from "./shared/footer/FooterContent"

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto">
        <Started />
      </div>
      <div className="bg-pink-100">
        <div className="container mx-auto pt-20">
          <FooterContent />
        </div>
      </div>
    </footer>
  )
}

export default Footer
