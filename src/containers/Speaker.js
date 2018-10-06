import React from 'react'
import { withRouteData } from 'react-static'
import {Image} from 'rebass';

export default withRouteData(({speaker}) => {
    return <div>
        <h1>{speaker.name}</h1>
        <h2>{speaker.title}</h2>
        <Image src={speaker.photo} />
    </div>
});