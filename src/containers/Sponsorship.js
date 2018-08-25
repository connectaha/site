import React, { Component } from 'react';
import { Button, Flex, Label, Textarea } from 'rebass';
import Input from '../components/input';

export default class Default extends Component {
    render() {
        return (
            <form name='sponsorship' method='POST' data-netlify='true'>
                <Flex flexDirection='column' p={5}>
                    <Label>Name</Label>
                    <Input border={0} boxShadow={0} name='name'></Input>
                    <Label>Message</Label>
                    <Textarea rows={4} border={0} borderColor='black' borderRadius='4px' name='message'/>
                    <Flex justifyContent='flex-end' pt={4}>
                        <Button type='submit' children='Save' bg='primary' />
                    </Flex>
                </Flex>
            </form>
        );
    }
}