import React from 'react'
import Card from '../card/Card'

const Cards = ({data}) => {
    return (
        <div className="flex flex-wrap">
            {data.map(card => (
                <Card key={card.node.id} otherData={card.node.frontmatter} />
            ))}
        </div>
    )
}

export default Cards
