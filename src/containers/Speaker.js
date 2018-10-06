import React from 'react'
import { withRouteData } from 'react-static'

export default withRouteData(({speaker}) => {
    return <div>
        <h1>{speaker.name}</h1>
        <h2>{speaker.title}</h2>
    </div>
});