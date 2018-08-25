import React, { Component, Fragment } from 'react';
import { Flex, Text } from 'rebass';

export default class Default extends Component {
    render() {
        return (
            <Fragment>
                <Flex flexDirection='column' alignItems='center' justifyContent='center' py={4}>
                    <Text>Connectaha will be on March 8 at the <a href='http://www.scottcenter.com/'>Scott Conference Center</a> in Omaha, NE</Text>
                    <Text>6450 Pine St.</Text>
                    <Text>Omaha, NE 68106</Text>
                </Flex>
                <Flex justifyContent='center'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.9658043690583!2d-96.01411248442943!3d41.24430277927759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938c4cd869edd5%3A0x4de832f06f7ec!2sScott+Conference+Center!5e0!3m2!1sen!2sus!4v1535216444555" width="600" height="450" frameborder="0" allowfullscreen></iframe>
                </Flex>
            </Fragment>
        )
    };
}