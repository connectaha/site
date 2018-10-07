import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({speakers}) => {
    return <div>
        {speakers.map(speaker => {
            return <div>
                <div>{speaker.name}</div>
                <div>{speaker.bio}</div>
                <Link to={`/speakers/${speaker.id}/`}>More...</Link>
            </div>
        })}
    </div>
});