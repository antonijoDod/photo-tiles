import React from "react"
import Cards from '../../shared/cards/Cards'

const News = ({data}) => {
  return (
    <section>
      <div className="container mx-auto py-24 px-4">
        <h2 className="text-4xl md:text-5xl mb-5">Our latest news</h2>
        <Cards data={data} />
      </div>
    </section>
  )
}

export default News
