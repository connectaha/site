import React, { useState } from "react"
import Img from "gatsby-image"

import speakersStyles from "../pages/speakers.module.scss"
import heroStyles from "./hero.module.scss"
const Speaker = ({ edge }) => {
  const [visible, setVisible] = useState(false)
  return (
    <div className={heroStyles.card}>
      <div
        className={speakersStyles.speaker}
        key={edge.node.slug}
        onClick={() => setVisible(!visible)}
      >
        {edge.node.image && <Img fluid={edge.node.image.fluid} />}
        <div className="info">
          <h3>{edge.node.name}</h3>
          <h3>{edge.node.company}</h3>
          <h4>{edge.node.session}</h4>
        </div>
      </div>
      <div
        className={visible ? speakersStyles.abstract : speakersStyles.hidden}
      >
        {edge.node.abstract.json.content.map(con => {
          return con.content.map(c => {
            return <p>{c.value}</p>
          })
        })}
      </div>
    </div>
  )
}

export default Speaker
