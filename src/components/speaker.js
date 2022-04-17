import React, { useState } from "react"
import Img from "gatsby-image"

import speakersStyles from "../pages/speakers.module.scss"
import heroStyles from "./hero.module.scss"
const Speaker = ({ edge }) => {
  const hasAbstract = () => {
    var x = edge.node.abstract.json.content.map(con => {
      return con.content.map(c => c.value)
    }).length
    console.log(x)
    return x.length > 0
  }
  const [visible, setVisible] = useState(false)
  return (
    <div className={`${heroStyles.card} && ${speakersStyles.speakerCard}`}>
      <div
        className={speakersStyles.speaker}
        key={edge.node.slug}
        onClick={() => setVisible(!visible)}
      >
        {edge.node.image && <Img fluid={edge.node.image.fluid} />}
        <div className="info">
          <h2>{edge.node.name}</h2>
          <h3>{edge.node.company}</h3>
          <h4>{edge.node.title}</h4>
          <h5>{edge.node.session}</h5>
        </div>
      </div>
      {hasAbstract() && (
        <div
          className={visible ? speakersStyles.abstract : speakersStyles.hidden}
        >
          {edge.node.abstract.json.content.map(con => {
            return con.content.map(c => {
              return <p>{c.value}</p>
            })
          })}
        </div>
      )}
    </div>
  )
}

export default Speaker
