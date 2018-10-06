import React from 'react'
import { withRouteData } from 'react-static'

export default withRouteData(({speakers}) => {
    return <div>
        {speakers.map(speaker => {
            return <div>
                <div>{speaker.name}</div>
                <div>{speaker.bio}</div>
            </div>
        })}
    </div>
});